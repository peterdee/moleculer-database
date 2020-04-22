### Authentication

Authentication can be enabled or disabled with the `APP_AUTH_ENABLED` environment variable.

If authentication is enabled, you need to provide a `X-AUTH` header, that should contain a generated token ([JWT](https://jwt.io)).

The token should contain a `provider` property, and should be signed with the same secret key, that is provided in the `APP_AUTH_SECRET` environment variable.

Example request:

```javascript
const jwt = require('jsonwebtoken');

const token = await jwt.sign(
  {
    provider: '<PROVIDER>',
  },
  AUTH_SECRET,
  {
    expiresIn: 300,
  },
);

const response = await axios({
  headers: {
    'X-AUTH': token,
  }
  method: 'GET',
  url: '',
});
```
