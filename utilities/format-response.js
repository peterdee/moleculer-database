const { RESPONSE_MESSAGES } = require('../config');

/**
 * Format the successful response
 * @param {*} data - data for the response
 * @returns {object}
 */
module.exports = (data = null, info = RESPONSE_MESSAGES.ok) => {
  const response = {
    datetime: Date.now(),
    info,
    status: 200,
  };
  if (data) {
    response.data = data;
  }
  return response;
};
