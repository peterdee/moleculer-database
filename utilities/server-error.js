const { Errors: { MoleculerServerError } } = require('moleculer');

const { ERROR_MESSAGES, RESPONSE_CODES } = require('../config');

/**
 * Create a server-related error
 * @param {string} message - error message
 * @param {number} code - response code
 * @returns {MoleculerServerError}
 */
module.exports = (
  message = ERROR_MESSAGES.internalServerError,
  code = RESPONSE_CODES[500],
) => new MoleculerServerError(
  message,
  code,
);
