## moleculer-database

[![Known Vulnerabilities](https://snyk.io/test/github/peterdee/moleculer-database/badge.svg?targetFile=package.json)](https://snyk.io/test/github/peterdee/moleculer-database?targetFile=package.json)

A Moleculer-based microservice that stores data in the database.

Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

Stack: [Moleculer](https://moleculer.services/).

More information: https://www.youtube.com/watch?v=t4YR6MWrugw

### Deploy

Local [NATS](https://nats.io/) server is required:

```shell script
brew install nats-server
brew services start nats-server
```

NATS is used as a transport for the service communications.

```shell script
git clone https://github.com/peterdee/moleculer-database.git
cd ./moleculer-database
nvm use 12.16.1
npm i
```

### Environment variables

Create the `.env` file in the project root directory:

```shell script
# Application
APP_AUTH_ENABLED="true"
APP_AUTH_SECRET=""
APP_AUTH_EXPIRATION="300"
APP_PROVIDER="moleculer-database"
PORT="5522"

# Database connection
DB_HOST=""
DB_NAME=""
DB_PASSWORD=""
DB_PORT=""
DB_USERNAME=""

# Moleculer
SERVICEDIR="services"
```

### Launch

This will launch the services locally:

```shell script
npm run dev
```

Services will be available at http://localhost:5522 (you can change the `port` in the `.env` file).

### Build

[Docker](https://www.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/) are required for the build.

Build and run the containers:

```shell script
npm run dc:up
```

Services will be available at http://localhost:3000 (see the [`docker-compose.yml`](docker-compose.yml) file for details).

Stop containers:

```shell script
npm run dc:down
```

### Authentication

See the [AUTHENTICATION.md](AUTHENTICATION.md) for more information about the microservice authentication.

### APIs

See the [APIS.md](APIS.md) for more information about the available APIs.
