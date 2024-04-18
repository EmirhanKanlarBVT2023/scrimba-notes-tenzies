import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9nhUOhhokIoMAWt0PBLIZIpxawU2uQ9g",
  authDomain: "react-notes-ca70c.firebaseapp.com",
  projectId: "react-notes-ca70c",
  storageBucket: "react-notes-ca70c.appspot.com",
  messagingSenderId: "1068118739773",
  appId: "1:1068118739773:web:409623fae83f759784d354",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
