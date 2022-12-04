// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3b2jnsEkyDqp1BURX5xiFZNZN-LaoFs8",
  authDomain: "ecomercce-reactjssalado.firebaseapp.com",
  projectId: "ecomercce-reactjssalado",
  storageBucket: "ecomercce-reactjssalado.appspot.com",
  messagingSenderId: "790555944102",
  appId: "1:790555944102:web:d0bdf868c683e414384067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);