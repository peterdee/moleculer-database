'use strict';

const Adapter = require('moleculer-db-adapter-mongoose');
const axios = require('axios');
const DBService = require('moleculer-db');
const mongoose = require('mongoose');

const clientError = require('../utilities/client-error');
const config = require('../config');
const formatResponse = require('../utilities/format-response');
const generateToken = require('../utilities/generate-token');
const model = require('../models/forecast.model');
const serverError = require('../utilities/server-error');

const { DATABASE: DB } = config;

/**
 * Data service
 */
module.exports = {
  name: 'data',
  mixins: [DBService],
  adapter: new Adapter(
    `mongodb://${DB.username}:${DB.password}@${DB.host}:${DB.port}/${DB.name}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  ),
  model: mongoose.model('Forecast', model),
	actions: {
		locations: {
			rest: {
        method: 'GET',
        params: {
          query: 'string',
        },
				path: '/locations'
			},
			async handler(ctx) {
        // check the query
        const { params: { query = '' } = {} } = ctx;
        if (!query) {
          throw clientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const token = await generateToken();
          const { data: { data = [] } = {} } = await axios({
            headers: {
              'X-Auth': token,
            },
            method: 'GET',
            url: `${config.METAWEATHER_URL}/api/data/search?query=${query}`,
          });
          return formatResponse(data);
        } catch (error) {
          throw serverError(
            config.ERROR_MESSAGES.internalServerError,
            config.RESPONSE_CODES[500],
          );
        }
			},
    },
    location: {
			rest: {
        method: 'GET',
        params: {
          id: 'string',
        },
				path: '/location'
			},
			async handler(ctx) {
        // check the city identifier
        const { params: { id = '' } = {} } = ctx;
        if (!id) {
          throw clientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }
        if (Number.isNaN(Number(id))) {
          throw clientError(
            config.ERROR_MESSAGES.invalidCityId,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          // look in the database first
          const city = await this.adapter.model.findOne({ cityId: id });

          if (!city || city.updated < Date.now() - 4 * 60 * 1000) {
            // get the fresh data from MetaWeather  
            const token = await generateToken();
            const { data: response = {} } = await axios({
              headers: {
                'X-Auth': token,
              },
              method: 'GET',
              url: `${config.METAWEATHER_URL}/api/data/location?id=${id}`,
            });

            // handle the 'not a city' response
            if (response.info && response.info === config.RESPONSE_MESSAGES.notACity) {
              return formatResponse(null, config.RESPONSE_MESSAGES.notACity);
            }

            // if data is related to the city, update it
            const { data = {} } = response;
            if (data.location_type && data.location_type === 'City') {
              const now = Date.now();
              const forecast = {
                cityId: data.woeid,
                cityName: data.title,
                latitude: data.latt_long.split(',')[0],
                longitude: data.latt_long.split(',')[1],
                parent: data.parent,
                sources: data.sources,
                sunRise: data.sun_rise,
                sunSet: data.sun_set,
                svgLink: data.svgLink,
                timezone: data.timezone,
                weather: data.consolidated_weather,
                created: now,
                updated: now,
              };

              // delete old record if it existed
              if (city) {
                await this.adapter.model.deleteOne({ cityId: id });
              }

              await this.adapter.model.create(forecast);
              return formatResponse(forecast);
            }

            // forward everything else to the client
            return formatResponse(data);
          }

          return formatResponse(city);
        } catch (error) {
          const {
            response: {
              data: {
                code = null,
                message = '',
              } = {},
            } = {},
          } = error;
          if (code && code === 400 && message
            && message === config.ERROR_MESSAGES.invalidLocationId) {
            throw clientError(
              config.ERROR_MESSAGES.invalidLocationId,
              config.RESPONSE_CODES[400],
            );
          }
          throw serverError(
            config.ERROR_MESSAGES.internalServerError,
            config.RESPONSE_CODES[500],
          );
        }
			},
		},
	},
};
