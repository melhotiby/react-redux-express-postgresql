# Node/Express/React/Redux/postgresql Fullstack application starter.

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

---

## Development

For initial setup you will need to:

Copy the `.env.example` to `.env` and then update the `.env` that this command generates with your database postgresql username and password

```sh
cp -n .env{.example,}
```

Install the node packages for the server and client

```sh
nvm use
yarn install
cd client
yarn install
cd ..
```

Create the new database table

```sh
yarn db:create
```

Migrate the database

```sh
yarn db:migrate
```

Seed the database

```sh
yarn db:seed
```

Start the server and client

```sh
yarn dev
```
