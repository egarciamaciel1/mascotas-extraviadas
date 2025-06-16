//import { initializeApp } from 'firebase/app';
//import { initializeApp, getApps, getApp } from 'firebase/app';
//import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//import { Platform } from 'react-native';
//import { firebaseConfig } from './firebaseConfig';

//const app = initializeApp(firebaseConfig);
//const app = getApps().length ? getApp() : initializeApp(firebaseConfig);


//let auth;

//if (Platform.OS === 'web') {
//  auth = getAuth(app); // Para web usamos getAuth directo
//} else {
//  auth = initializeAuth(app, {
//    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//  });
//}

//export { auth };

import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  Auth,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { firebaseConfig } from './firebaseConfig';

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth: Auth;

if (Platform.OS === 'web') {
  auth = getAuth(app); // En web no se requiere AsyncStorage
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export { auth };

