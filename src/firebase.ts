// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import {firebaseConfig} from './firebaseConfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;