// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBwOz-8DOQ6_PrEczbKQcM6mdlHofPR2c",
  authDomain: "tuka-alsharief-site.firebaseapp.com",
  projectId: "tuka-alsharief-site",
  storageBucket: "tuka-alsharief-site.appspot.com",
  messagingSenderId: "498292335178",
  appId: "1:498292335178:web:8ec44f39a94361ec1dbcb3",
  measurementId: "G-63Q6GNB4SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);