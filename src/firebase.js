// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {getAuth,GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLivAsTxiWTUV-PMmXsgZCfCp1XAoEAtE",
  authDomain: "blog-1dbad.firebaseapp.com",
  projectId: "blog-1dbad",
  storageBucket: "blog-1dbad.appspot.com",
  messagingSenderId: "648870172696",
  appId: "1:648870172696:web:1e63a486bf01b85bbc8b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);
export const auth =getAuth(app);

export const provider =new GoogleAuthProvider();