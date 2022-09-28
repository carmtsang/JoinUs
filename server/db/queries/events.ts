import { db } from "../connection";

const getCategories = () => {
  return db
    .query(`SELECT * FROM categories`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

const getEvents = () => {
  return db
    .query(`SELECT * FROM events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

<<<<<<< HEAD
const getEventByID = (eventID: any) => {
  // dont worry, I will change this to ': number' before pushing
  return db
    .query(`SELECT * FROM events WHERE id = $1`, [eventID])
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

// stored in state

// create the functions first, export it, then import into routes
export default { getEvents, getEventByID, getCategories };
=======
export default { getCategories, getEvents };
>>>>>>> main
