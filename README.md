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
- React Native Element

## Screenshots:

![Home](https://github.com/josephdoba/JoinUs/blob/main/docs/HomePage.png)
JoinUs! Landing page.

![Log in](https://github.com/carmtsang/JoinUs/blob/main/docs/login.jpg)
Log in screen

![User Home](https://github.com/josephdoba/JoinUs/blob/main/docs/UserHome.png)
User's home page

![Event Details](https://github.com/josephdoba/JoinUs/blob/main/docs/IndividualEvent.png)
Event Details

![Create/Edit Event Form](https://github.com/josephdoba/JoinUs/blob/main/docs/CreateEvent.png)
New/Edit Event Form

![Dark Mode User Home](https://github.com/josephdoba/JoinUs/blob/main/docs/DarkModeUserHome.png)
Dark Mode

![Dark Mode Event Details](https://github.com/josephdoba/JoinUs/blob/main/docs/DarkModeIndividual.png)
Event Details in dark mode.

![Mobile Home](https://github.com/carmtsang/JoinUs/blob/main/docs/mobilehome.jpg)
Mobile Landing page

![Mobile EventList](https://github.com/carmtsang/JoinUs/blob/main/docs/mobileevent.jpg)
Mobile List of all events.

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

## Dependencies:

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Google Maps API
- [Cocoa Pods](https://cocoapods.org/)
- momentjs
- nodemon
- morgan
- body-parser
- react-router-dom
- tslint
- mui
- reach combobox
- axios
