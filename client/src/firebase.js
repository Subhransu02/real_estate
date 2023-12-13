// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ee57c.firebaseapp.com",
  projectId: "real-estate-ee57c",
  storageBucket: "real-estate-ee57c.appspot.com",
  messagingSenderId: "433619584614",
  appId: "1:433619584614:web:1a4c9cddaf5141e83bcfa7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);