// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeKDCcU9-OTw0_o5HDMBpIgGv4CiWjEaE",
  authDomain: "expense-tracker-1dc20.firebaseapp.com",
  projectId: "expense-tracker-1dc20",
  storageBucket: "expense-tracker-1dc20.appspot.com",
  messagingSenderId: "1028463493228",
  appId: "1:1028463493228:web:9aebb43e91c1af04a85849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);