// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmIjDUyM_ix8pEuPiARdOkRxAFD1JgtvM",
  authDomain: "react-chat-app-52861.firebaseapp.com",
  projectId: "react-chat-app-52861",
  storageBucket: "react-chat-app-52861.appspot.com",
  messagingSenderId: "919233993944",
  appId: "1:919233993944:web:5db60b8db10c0d65b3cbad",
  measurementId: "G-EWYBC632S1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()