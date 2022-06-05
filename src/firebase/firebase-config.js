// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQnhr_pem29BVYKYuAXIphb3-u7_wctc",
  authDomain: "eyefremeng.firebaseapp.com",
  projectId: "eyefremeng",
  storageBucket: "eyefremeng.appspot.com",
  messagingSenderId: "135863098826",
  appId: "1:135863098826:web:5b01eca42906d8da5a0333",
  measurementId: "G-4C5D883W7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export const db = getFirestore(app)
