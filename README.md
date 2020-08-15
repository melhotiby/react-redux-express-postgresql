# Express/React/Redux/PostgreSQL Dockerized Fullstack application starter.

This repository contains a production ready template which includes the following

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Logger](https://github.com/LogRocket/redux-logger)
- [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux)
- [Express API](https://expressjs.com/)
- [Postgresql](https://www.postgresql.org/)
- [knex](http://knexjs.org/)
- [Ramda](https://ramdajs.com/docs/#)
- [Docker](https://www.docker.com/)
- [NGINX](https://www.nginx.com/)

---

## Development

For initial setup you will need to:

Copy the server `.env.example` to `.env`

```sh
cp -n server/.env{.example,}
```

Copy the server `docker-compose.override.example.yml` to `docker-compose.override.yml` for docker compose overrides

```sh
cp -n docker-compose.override{.example,}.yml
```

Start all the services with docker

```sh
docker-compose up --build
```

Create the new database table

```sh
docker-compose run --rm api yarn db:create
```

Migrate the database

```sh
docker-compose run --rm api yarn db:migrate
```

Seed the database

```sh
docker-compose run --rm api yarn db:seed
```

Visit [localhost:3000](http://localhost:3000/)
