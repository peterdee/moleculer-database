'use strict';

const APIGateway = require('moleculer-web');
const compression = require('compression');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');

const clientError = require('../utilities/client-error');
const config = require('../config');

module.exports = {
	name: 'api',
  mixins: [APIGateway],
  
	settings: {
		port: config.PORT,
		ip: '0.0.0.0',

		// global middlewares
		use: [
      compression(),
      helmet(),
    ],

		routes: [
			{
				path: '/api',
				whitelist: [
					"**"
				],

        mergeParams: true,
				authentication: config.AUTH_ENABLED,
				authorization: false,
				autoAliases: true,
        bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
        },

				mappingPolicy: "all",
				logging: true
			}
		],

    // log stuff
		log4XXResponses: false,
		logRequestParams: null,
		logResponseData: null,
	},

  methods: {
    /**
     * Authenticate the request
     * @param {object} ctx - context object
     * @param {Object} route - route object
     * @param {object} request - request object
     * @returns {Promise<MoleculerClientError|object>}
     */
    async authenticate(ctx, route, request) {
      // check if token was provided
      const { headers: { 'x-auth': token = '' } = {} } = request;
      if (!token) {
        throw clientError(
          config.ERROR_MESSAGES.missingAuth,
          config.RESPONSE_CODES[401],
        );
      }

      try {
        // decode the token
        const decoded = await jwt.verify(auth, config.AUTH_SECRET);
        const { provider = '' } = decoded || {};
        if (!provider) {
          throw clientError(
            config.ERROR_TYPES.accessDenied,
            config.RESPONSE_CODES[401],
          );
        }

        return {
          authenticated: true,
          provider,
        };
      } catch (error) {
        throw clientError(
          config.ERROR_TYPES.accessDenied,
          config.RESPONSE_CODES[401],
        );
      }
    },
  },
};
