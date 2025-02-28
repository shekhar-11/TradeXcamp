import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "newproject-89979.firebaseapp.com",
  projectId: "newproject-89979",
  storageBucket: "newproject-89979.firebasestorage.app",
  messagingSenderId: "436933107238",
  appId:"1:436933107238:web:fc128a12807c86728350e7",
};


export const app = initializeApp(firebaseConfig);
