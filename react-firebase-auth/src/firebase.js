// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdsLMYKO2z1Xa4INCXgAdaRPkfYCJ2byQ",
  authDomain: "test-8d0b7.firebaseapp.com",
  projectId: "test-8d0b7",
  storageBucket: "test-8d0b7.appspot.com",
  messagingSenderId: "857964967691",
  appId: "1:857964967691:web:164a05ba7ddd059f92140e",
  measurementId: "G-85RR772MYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);