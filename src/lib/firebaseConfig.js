// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzqxrP_aXij1lnvzTjhu9WwmTkWyaqZQE",
  authDomain: "mundo-da-cozinha.firebaseapp.com",
  projectId: "mundo-da-cozinha",
  storageBucket: "mundo-da-cozinha.appspot.com",
  messagingSenderId: "671765562646",
  appId: "1:671765562646:web:82676e7475de826e403c37",
  measurementId: "G-ME2L9SFMV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }