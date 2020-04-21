const jwt = require('jsonwebtoken');

const {
  AUTH_EXPIRATION,
  AUTH_SECRET,
  PROVIDER,
} = require('../config');

/**
 * Generate a new token for the MetaWeather microservice
 * @param {string} provider - provider name
 * @returns {Promise<string>}
 */
module.exports = (provider = PROVIDER) => jwt.sign(
  {
    provider,
  },
  AUTH_SECRET,
  {
    expiresIn: AUTH_EXPIRATION,
  },
);
