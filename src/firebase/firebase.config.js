// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8uRjGnS8iNRw0my-9LR5eMd0ZzTpD7no",
  authDomain: "fir-book-inventory-a49fc.firebaseapp.com",
  projectId: "fir-book-inventory-a49fc",
  storageBucket: "fir-book-inventory-a49fc.appspot.com",
  messagingSenderId: "455503337291",
  appId: "1:455503337291:web:5d549b6167ea5ceca17ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;