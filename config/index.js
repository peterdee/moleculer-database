const { env: environment = {} } = process;

module.exports = {
  AUTH_ENABLED: environment.APP_AUTH_ENABLED === 'true',
  AUTH_SECRET: environment.APP_AUTH_SECRET,
  ERROR_MESSAGES: {
    internalServerError: 'INTERNAL_SERVER_ERROR',
    invalidAuth: 'INVALID_AUTH',
    invalidCityId: 'INVALID_CITY_ID',
    missingAuth: 'MISSING_AUTH',
    missingData: 'MISSING_DATA',
  },
  ERROR_TYPES: {
    accessDenied: 'ACCESS_DENIED',
  },
  RESPONSE_CODES: {
    200: 200,
    400: 400,
    401: 401,
    403: 403,
    404: 404,
    500: 500,
  },
  RESPONSE_MESSAGES: {
    ok: 'OK',
    pingOk: 'PING_OK',
  },
  PORT: Number(environment.PORT) || 5522,
};
