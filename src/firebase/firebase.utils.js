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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.replace(/\s/g, '').toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.replace(/\s/g, '').toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const firestore = firebase.firestore();
