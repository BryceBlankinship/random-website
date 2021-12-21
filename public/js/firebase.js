// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeQaLsWDg-2io_uDEDnt704igaTZz3TRk",
  authDomain: "rapidjobsweb.firebaseapp.com",
  projectId: "rapidjobsweb",
  storageBucket: "rapidjobsweb.appspot.com",
  messagingSenderId: "417480107104",
  appId: "1:417480107104:web:c221e26199ecf25bf60f05",
  measurementId: "G-M1MQ29CVHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);