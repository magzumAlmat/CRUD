import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyCtoDoMWVAPhvcn-_9-hse4fWKvbFkYUo4",
  authDomain: "chatapp-8998b.firebaseapp.com",
  projectId: "chatapp-8998b",
  storageBucket: "chatapp-8998b.appspot.com",
  messagingSenderId: "875358395462",
  appId: "1:875358395462:web:bbb9a2f47c2af3d0befe47",
  measurementId: "G-LP54X9TEVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export function useAuth(){
  const [currentUser,setCurrentUser]=useState();
}

export default (app);
