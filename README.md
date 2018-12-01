# Webbskolan | CoderDojo

A project to teach kids the basics of web development.

## Get started

**NOTE:** The project uses Node 10. Run `nvm use` in the root to set version from `.nvmrc`.

```zsh
$ nvm use
$ npm install
$ npm run server // in one terminal tab to start mock API
$ npm start // in another terminal tab to start frontend
```

## Commands

| `npm run <script>`   | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `start`              | Serves your app at `localhost:3000`. HMR will be enabled in development. |
| `build`              | Builds a production bundle of the app                                    |
| `test:dev`           | Run Jest in watch mode                                                   |
| `test -- --coverage` | Run Jest and generate coverage                                           |
| `flow`               | Run Flow type checking                                                   |
| `server`             | Starts the mock GraphQL server at `localhost:4000`                       |
