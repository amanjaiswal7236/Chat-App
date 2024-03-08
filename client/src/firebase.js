// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdNoAkyjxisSjkBAmLRGDvqw3QZpEQWz4",
  authDomain: "chat-app-be039.firebaseapp.com",
  projectId: "chat-app-be039",
  storageBucket: "chat-app-be039.appspot.com",
  messagingSenderId: "908285664873",
  appId: "1:908285664873:web:f35ccfe4ca5001a328ccf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);