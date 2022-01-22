// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARBB1ZxK5rpAfQR0Nx7pOkf6muTYVSH6c",
  authDomain: "fir-tut-318c3.firebaseapp.com",
  projectId: "fir-tut-318c3",
  storageBucket: "fir-tut-318c3.appspot.com",
  messagingSenderId: "76443713693",
  appId: "1:76443713693:web:9f09a44dc2a203a2c55474",
  measurementId: "G-H5DY9P9F6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
