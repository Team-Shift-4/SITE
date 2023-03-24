// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ZntyHJJ6DF2qIS2MqBFG_wr5sQmtOOU",
  authDomain: "shift4-4009d.firebaseapp.com",
  databaseURL: "https://shift4-4009d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shift4-4009d",
  storageBucket: "shift4-4009d.appspot.com",
  messagingSenderId: "165925142298",
  appId: "1:165925142298:web:5b31cdec295bc875b176a3",
  measurementId: "G-1KW3BCVNJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);