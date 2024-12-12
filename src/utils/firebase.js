// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmfor5zaOBxW-htw__2-ZUyje1CrbiGPU",
  authDomain: "netflixgpt-0510.firebaseapp.com",
  projectId: "netflixgpt-0510",
  storageBucket: "netflixgpt-0510.firebasestorage.app",
  messagingSenderId: "15302735669",
  appId: "1:15302735669:web:9d093a4dcf27ad6dc7be7c",
  measurementId: "G-145KZG290F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
