// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAMIAUpqWunL6UIwp0WhYj7klJJaPb5tpA",
    authDomain: "yourshop-93ef4.firebaseapp.com",
    projectId: "yourshop-93ef4",
    storageBucket: "yourshop-93ef4.firebasestorage.app",
    messagingSenderId: "961741817156",
    appId: "1:961741817156:web:38a481f028b85a548dc311"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
