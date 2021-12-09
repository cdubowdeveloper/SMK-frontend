import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
} from 'firebase/auth';


const config = {
    apiKey: "AIzaSyDv52hgBRPOMYLQ7wB6j_lTENgS1ocoID0",
    authDomain: "super-money-kids.firebaseapp.com",
    projectId: "super-money-kids",
    storageBucket: "super-money-kids.appspot.com",
    messagingSenderId: "614271211741",
    appId: "1:614271211741:web:4773790588de2747cc6334",
    measurementId: "G-XMJLJYBFZS"
  };

initializeApp(config);
const auth = getAuth();

export {
  auth,
};