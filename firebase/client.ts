// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyG5MiJ0WgQRspiakYU60RJhPpmCDovFg",
    authDomain: "prepwise-d9575.firebaseapp.com",
    projectId: "prepwise-d9575",
    storageBucket: "prepwise-d9575.firebasestorage.app",
    messagingSenderId: "418418479250",
    appId: "1:418418479250:web:85505c23d0b4fc8ba8164b",
    measurementId: "G-C98YZ88YC3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);