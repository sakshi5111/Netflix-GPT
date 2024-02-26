// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ4hcKwsANNJxvKO83JTfRE2hGcHdO4uA",
  authDomain: "netflixgpt-56c22.firebaseapp.com",
  projectId: "netflixgpt-56c22",
  storageBucket: "netflixgpt-56c22.appspot.com",
  messagingSenderId: "832203689927",
  appId: "1:832203689927:web:52b7bdd7dca5841a7d53e2",
  measurementId: "G-EQNVDKE5HY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
