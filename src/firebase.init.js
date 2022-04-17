// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYpWKpL9G1J-Q6LlpREWXcK8V6w4Dn3Gk",
  authDomain: "the-memory-maker.firebaseapp.com",
  projectId: "the-memory-maker",
  storageBucket: "the-memory-maker.appspot.com",
  messagingSenderId: "175123903964",
  appId: "1:175123903964:web:88c9429f37d85f8faf0b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;