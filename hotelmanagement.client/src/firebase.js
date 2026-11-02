import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your exact Firebase configuration copied from the console
const firebaseConfig = {
    apiKey: "AIzaSyDF-SirQZzzrUkHm_f5BtrnfMkELrPkkjU",
    authDomain: "hotelmanagement-56f20.firebaseapp.com",
    projectId: "hotelmanagement-56f20",
    storageBucket: "hotelmanagement-56f20.firebasestorage.app",
    messagingSenderId: "259172525088",
    appId: "1:259172525088:web:4a539e9a09c4a2f0624845",
    measurementId: "G-M7MFE614B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication instance
export const auth = getAuth(app);