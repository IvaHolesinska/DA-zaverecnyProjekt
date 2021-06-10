import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALLPNOetl3Zim4FFLzipmFGSAsaGm6U2c',
  authDomain: 'animals-68fed.firebaseapp.com',
  projectId: 'animals-68fed',
  storageBucket: 'animals-68fed.appspot.com',
  messagingSenderId: '1077483808549',
  appId: '1:1077483808549:web:3737319c42593d648a9ccc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
