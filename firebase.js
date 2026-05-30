// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Importamos los SDKs que utilizaremos para el MVP
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr9GHUnYwJkZ-elE4j4MN0x51XLkY0JtA",
  authDomain: "starlit-guides.firebaseapp.com",
  projectId: "starlit-guides",
  storageBucket: "starlit-guides.firebasestorage.app",
  messagingSenderId: "875470427289",
  appId: "1:875470427289:web:dc35d6f3c3bc368f5cd408",
  measurementId: "G-J0426B9N21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializamos Authentication y Firestore para exportarlos
export const auth = getAuth(app);
export const db = getFirestore(app);