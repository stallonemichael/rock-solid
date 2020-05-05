import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC9wVoOH44Nd6J_YMzXDW7KYyvzWZbnDAg',
  authDomain: 'rock-solid-22d30.firebaseapp.com',
  databaseURL: 'https://rock-solid-22d30.firebaseio.com',
  projectId: 'rock-solid-22d30',
  storageBucket: 'rock-solid-22d30.appspot.com',
  messagingSenderId: '709687297635',
  appId: '1:709687297635:web:afde1e09757c6095eeda56',
  measurementId: 'G-SMNHWQF7SP',
};

firebase.initializeApp(config);

export const db = firebase.firestore();
