import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCIHopFOTOYOVuloQS6B0W-TEbGV63tWy4",
    authDomain: "routeone-68b0b.firebaseapp.com",
    databaseURL: "https://routeone-68b0b-default-rtdb.firebaseio.com",
    projectId: "routeone-68b0b",
    storageBucket: "routeone-68b0b.appspot.com",
    messagingSenderId: "226542564917",
    appId: "1:226542564917:web:f65a89eb5f6e059f40a37c",
    measurementId: "G-FSKRN2K7XM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();
const auth = firebaseApp.auth();

export {db, auth};