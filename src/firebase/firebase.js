import firebase from 'firebase';
const APIKEY = process.env.REACT_APP_FIREBASE_API_KEY;
const DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const DB_URL = process.env.REACT_APP_FIREBASE_DB_URL;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const MESSAGING_ID = process.env.REACT_APP_FIREBASE_MESSAGING_ID;

const config = {
   apiKey: APIKEY,
   authDomain: DOMAIN,
   databaseURL: DB_URL,
   projectId: PROJECT_ID,
   storageBucket: STORAGE_BUCKET,
   messagingSenderId: MESSAGING_ID
};

firebase.initializeApp(config);
const db = firebase.database();
export {firebase, db as default};

// db.ref('sessions').push({
//   studentEmail: "marko@mail.com"
// });

// returns an array with objects
db.ref('sessions') // where do we want to store it
  .once('value')
  .then((snapshot) => {
    const sessions = [];
    snapshot.forEach((child) => {
      sessions.push({
        id: child.key,
        ...child.val()
    });
  });
  console.log(sessions)
});
