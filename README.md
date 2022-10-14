# JoinUs

Final project for Lighthouse Labs. JoinUs allows users to arrange casual short-term, spontaneous meetups within your local area, based on your interests.

## Tech Stack:

- Javascript
- NodeJS
- Axios
- Express
- Postgres
- React
- Typescript
- Material UI
- React Native

## Screenshots:

![Home](https://github.com/josephdoba/JoinUs/blob/main/docs/HomePage.png)

![User Home](https://github.com/josephdoba/JoinUs/blob/main/docs/UserHome.png)

![Event Card](https://github.com/josephdoba/JoinUs/blob/main/docs/IndividualEvent.png)

![Create/Edit Event Form](https://github.com/josephdoba/JoinUs/blob/main/docs/CreateEvent.png)

![Dark Mode User Home](https://github.com/josephdoba/JoinUs/blob/main/docs/DarkModeUserHome.png)

![Dark Mode Event Card](https://github.com/josephdoba/JoinUs/blob/main/docs/DarkModeIndividual.png)

## Setup:

### `client/joinus_client`:

- run `npm install` to install dependencies.
- run `npm start` to launch server, then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `client/mobile`

- run `npm install` to install dependencies.
- run `sudo gem install cocoapods` ([Seen here](https://cocoapods.org/))
- For MacOS users, you will need the latest version of [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) installed.

### `/server`

- run `npm install` to install dependencies.
- run `npm run build` for the server folder to compile Typescript files.
- run `npm run local` to run the server with node-mon.

## Database Setup:

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `final`

3. Install dependencies: `npm i`
4. Add the schema and seed the database in pg

- Check the db folder to see what gets created and seeded in the SDB

5. Run the server: `npm run local`

   - Note: nodemon is used, so you should not have to restart your server

6. Visit `http://localhost:8080/`

## Warnings & Tips

- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.

## Dependencies:

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Google Maps API
- [Cocoa Pods](https://cocoapods.org/)
- dayjs
- momentjs
- nodemon
- morgan
- body-parser
- react-router-dom
- tslint
