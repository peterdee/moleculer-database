'use strict';

const Adapter = require('moleculer-db-adapter-mongoose');
const axios = require('axios');
const DBService = require('moleculer-db');
const mongoose = require('mongoose');

const clientError = require('../utilities/client-error');
const config = require('../config');
const formatResponse = require('../utilities/format-response');
const serverError = require('../utilities/server-error');
const weather = require('../models/weather.model');

/**
 * Weather service, that handles the database data
 */
module.exports = {
  name: 'weather',
  mixins: [DBService],
  adapter: new Adapter(
    `mongodb://${DB.username}:${DB.password}@${DB.host}:${DB.port}/${DB.name}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  ),
  model: mongoose.model('Weather', weather),
	actions: {
		cities: {
			rest: {
        method: 'GET',
        params: {
          search: 'string',
        },
				path: '/cities'
			},
			async handler(ctx) {
        // check the search request
        const { params: { search = '' } = {} } = ctx;
        if (!search) {
          throw clientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const { data = [] } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/search/?query=${search}`,
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
    city: {
			rest: {
        method: 'GET',
        params: {
          search: 'string',
        },
				path: '/city'
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

        try {
          const { data } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/${id}`,
          });
          data.svgLink = 'https://www.metaweather.com/static/img/weather/';
          return formatResponse(data);
        } catch (error) {
          const { response: { data: { detail = '' } = {} } = {} } = error;
          if (detail && detail === 'Not found.') {
            throw clientError(
              config.ERROR_MESSAGES.invalidCityId,
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
