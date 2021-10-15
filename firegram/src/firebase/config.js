// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvnvP2lPxcl1Xtju6WL7OjJ-Nu4XYHOEw",
  authDomain: "firegram-e64ec.firebaseapp.com",
  projectId: "firegram-e64ec",
  storageBucket: "firegram-e64ec.appspot.com",
  messagingSenderId: "921138045262",
  appId: "1:921138045262:web:c5b7a65e35c3d8b641be1f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore}

