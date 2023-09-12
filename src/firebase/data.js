// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXS-C-66j3jP31JbOPPsmPTWswJXLLkgE",
  authDomain: "tiendaropa-23e49.firebaseapp.com",
  projectId: "tiendaropa-23e49",
  storageBucket: "tiendaropa-23e49.appspot.com",
  messagingSenderId: "54783323489",
  appId: "1:54783323489:web:69c13ba044a72bd24b6920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)