// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNSQxM4SViE4oyrWRHmMb-iew7mMKxpqA",
    authDomain: "fir-example-47545.firebaseapp.com",
    projectId: "fir-example-47545",
    storageBucket: "fir-example-47545.firebasestorage.app",
    messagingSenderId: "397834408414",
    appId: "1:397834408414:web:eb39af87e73f616d58cd4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);