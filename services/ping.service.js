'use strict';

const formatResponse = require('../utilities/format-response');
const { RESPONSE_MESSAGES } = require('../config');

 /**
  * Ping service
  */
module.exports = {
  name: 'ping',
	actions: {
		ping: {
			rest: {
        method: 'GET',
				path: '/'
			},
			async handler() {
        return formatResponse(null, RESPONSE_MESSAGES.pingOk);
			},
    },
	},
};
