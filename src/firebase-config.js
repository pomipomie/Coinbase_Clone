import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYk4syPD3tiDqeP1vC1jDkAazWdEtML4o",
  authDomain: "coinbase-clone-340bf.firebaseapp.com",
  projectId: "coinbase-clone-340bf",
  storageBucket: "coinbase-clone-340bf.appspot.com",
  messagingSenderId: "140520252244",
  appId: "1:140520252244:web:4a25b7f6c84f4c1f6f1ec1",
  measurementId: "G-DNGQQQE8LT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
  

export { db, auth };
