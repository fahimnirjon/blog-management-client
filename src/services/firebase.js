// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcnGqKVBwy5v_-xacf-XD5O3zf87miwNM",
  authDomain: "blog-management-84ed9.firebaseapp.com",
  projectId: "blog-management-84ed9",
  storageBucket: "blog-management-84ed9.appspot.com",
  messagingSenderId: "513539881197",
  appId: "1:513539881197:web:cafd0cc35fe3fbff3974e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
