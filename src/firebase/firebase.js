// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxy2Q4E_edUzUtfK2RZRR-tXez8IIL5o",
  authDomain: "restaurante-8af17.firebaseapp.com",
  projectId: "restaurante-8af17",
  storageBucket: "restaurante-8af17.appspot.com",
  messagingSenderId: "365449685663",
  appId: "1:365449685663:web:d4156db2529c9a228c10aa"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export  const db =  app.firestore ()
