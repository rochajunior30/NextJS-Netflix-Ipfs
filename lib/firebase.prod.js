import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

try {
  firebase.initializeApp({
    apiKey: "AIzaSyBk6uvtrgbdzvmEvTkZ-wopfem2_cSBBWA",
    authDomain: "netflix-ipfs.firebaseapp.com",
    databaseURL: "https://netflix-ipfs-default-rtdb.firebaseio.com",
    projectId: "netflix-ipfs",
    storageBucket: "netflix-ipfs.appspot.com",
    messagingSenderId: "915647755563",
    appId: "1:915647755563:web:f7c3371a82594423b9416e",
    measurementId: "G-3JPZ9PBTPR"
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export default firebase;
