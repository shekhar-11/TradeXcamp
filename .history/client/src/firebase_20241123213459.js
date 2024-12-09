// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "minor-project-e236f.firebaseapp.com",
  projectId: "minor-project-e236f",
  storageBucket: "minor-project-e236f.firebasestorage.app",
  messagingSenderId: "806968791312",
  appId: "1:806968791312:web:93cda21ca88bddb2661595",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
