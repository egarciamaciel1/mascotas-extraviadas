// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA520QgKkMCXXmRaSWaFVXlcnm-It5BncY",
  authDomain: "mascotas-extraviadas-49c63.firebaseapp.com",
  projectId: "mascotas-extraviadas-49c63",
  storageBucket: "mascotas-extraviadas-49c63.firebasestorage.app",
  messagingSenderId: "1049552179658",
  appId: "1:1049552179658:web:1830ad87c8d4c10e93bf33"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
