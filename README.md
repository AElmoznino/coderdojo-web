# Webbskolan | CoderDojo

A project to teach kids the basics of web development.

## Get started

**NOTE:** The project uses Node 10. Run `nvm use` in the root to set version from `.nvmrc`.

Create `.env.local` in the root (see `.env.local.template` for guidance). Get the endpoint URL and Token from GraphCMS.

```zsh
$ nvm use
$ npm install
$ npm run server // in one terminal tab to start mock API
$ npm start // in another terminal tab to start frontend
```

## Commands

| `npm run <script>` | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `start`            | Serves your app at `localhost:3000`. HMR will be enabled in development. |
| `build`            | Builds a production bundle of the app                                    |
| `test:dev`         | Run Jest in watch mode                                                   |
| `flow`             | Run Flow type checking                                                   |
| `server`           | Starts the mock GraphQL server at `localhost:4000`                       |

## TODOs:

- [x] Remove hardcoded texts on Overview-page, fetch from mock API instead
- [x] Add lessons and descriptions for Fortsättning overview page
- [x] Bold important words on Start page
- [x] Swap long texts for bullet points on the Start page (the ones called `text` in `StartSection.js`).
- [x] Swap out MockServer for GraphCMS
- [ ] Create content and sandboxes for all lessons
- [ ] Add lazy-loading on `Lesson.js`
- [ ] Add short quiz/test on end of each lesson, or after completing an entire section
- [ ] Save progress so the user know where s/he finished
- [ ] Make sure it works on Firefox, Safari, IE11
- [ ] Although not mission critical, add more tests for ChromeCheck.js
- [ ] ~~Break out API into separate repo and use a real database~~
- [ ] ~~Refactor and merge `levels.js` and `levelsOverview.js` into 1 file, return only what's needed for each query~~
