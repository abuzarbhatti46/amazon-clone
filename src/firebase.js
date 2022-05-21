import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCz8g2ovDScQOx8LoAtlHwgB4mIddSGASo",
  authDomain: "clone-4600c.firebaseapp.com",
  projectId: "clone-4600c",
  storageBucket: "clone-4600c.appspot.com",
  messagingSenderId: "676790772070",
  appId: "1:676790772070:web:1332ee4f9821bf91aae8a7",
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  measurementId: "G-6JSZZ438VF"
};

// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };