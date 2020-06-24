## moleculer-database

[![Known Vulnerabilities](https://snyk.io/test/github/peterdee/moleculer-database/badge.svg?targetFile=package.json)](https://snyk.io/test/github/peterdee/moleculer-database?targetFile=package.json)

A Moleculer-based microservice that stores data in the database.

Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

Stack: [Node](https://nodejs.org/), [Moleculer](https://moleculer.services/).

More information: https://www.youtube.com/watch?v=t4YR6MWrugw

DEV: http://localhost:5522

STAGE: https://moleculer-database.herokuapp.com

### Deploy

```shell script
git clone https://github.com/peterdee/moleculer-database.git
cd ./moleculer-database
nvm use 14.4.0
npm i
```

### Environment variables

The `.env` file is required. See the [.env.example](.env.example) for more details.

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

### Heroku

The `staging` branch is deployed to Heroku automatically.

### Authentication

See the [AUTHENTICATION.md](AUTHENTICATION.md) for more information about the microservice authentication.

### APIs

See the [APIS.md](APIS.md) for more information about the available APIs.
