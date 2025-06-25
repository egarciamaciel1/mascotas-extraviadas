import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA520QgKkMCXXmRaSWaFVXlcnm-It5BncY",
  authDomain: "mascotas-extraviadas-49c63.firebaseapp.com",
  projectId: "mascotas-extraviadas-49c63",
  storageBucket: "mascotas-extraviadas-49c63.appspot.com",
  messagingSenderId: "1049552179658",
  appId: "1:1049552179658:web:1830ad87c8d4c10e93bf33"
};

// Inicialización única
const app = initializeApp(firebaseConfig);

// Auth con persistencia
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Opcional: Si usas Firestore
export const db = getFirestore(app);