import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCItHhQknI8UgXHSdGEpIjx84nYtMOzqr4",
  authDomain: "two-way-6788a.firebaseapp.com",
  projectId: "two-way-6788a",
  storageBucket: "two-way-6788a.firebasestorage.app",
  messagingSenderId: "794607026513",
  appId: "1:794607026513:web:a8c40d56748a50e4e25370",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
