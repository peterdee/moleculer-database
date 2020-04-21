const { Errors: { MoleculerClientError } } = require('moleculer');

const { RESPONSE_CODES } = require('../config');

/**
 * Create a client-related error
 * @param {string} message - error message
 * @param {number} code - response code
 * @returns {MoleculerClientError}
 */
module.exports = (
  message = '',
  code = RESPONSE_CODES[400],
) => new MoleculerClientError(
  message,
  code,
);
