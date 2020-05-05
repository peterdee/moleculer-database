const { env: environment = {} } = process;

module.exports = {
  AUTH_ENABLED: environment.APP_AUTH_ENABLED === 'true',
  AUTH_EXPIRATION: Number(environment.APP_AUTH_EXPIRATION) || 300,
  AUTH_SECRET: environment.APP_AUTH_SECRET || 'super-secret',
  DATABASE: {
    host: environment.DB_HOST || 'localhost',
    name: environment.DB_NAME,
    password: environment.DB_PASSWORD,
    port: Number(environment.DB_PORT) || 27017,
    username: environment.DB_USERNAME,
  },
  ERROR_MESSAGES: {
    internalServerError: 'INTERNAL_SERVER_ERROR',
    invalidAuth: 'INVALID_AUTH',
    invalidLocationId: 'INVALID_LOCATION_ID',
    missingAuth: 'MISSING_AUTH',
    missingData: 'MISSING_DATA',
  },
  ERROR_TYPES: {
    accessDenied: 'ACCESS_DENIED',
  },
  METAWEATHER_URL: environment.NODE_ENV === 'production'
    ? ''
    : 'http://localhost:5544',
  PORT: Number(environment.PORT) || 5522,
  PROVIDER: environment.APP_PROVIDER || 'moleculer-database',
  RESPONSE_CODES: {
    200: 200,
    400: 400,
    401: 401,
    403: 403,
    404: 404,
    500: 500,
  },
  RESPONSE_MESSAGES: {
    notACity: 'SELECTED_LOCATION_IS_NOT_A_CITY',
    ok: 'OK',
    pingOk: 'PING_OK',
  },
};
