import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXCUKlFzUGOiLiLiadYFvBLLzSaaoexwY",
  authDomain: "blogreact-1.firebaseapp.com",
  projectId: "blogreact-1",
  storageBucket: "blogreact-1.appspot.com",
  messagingSenderId: "540109138968",
  appId: "1:540109138968:web:d4b30c2d0b5867f123676d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
