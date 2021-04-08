import firebase from 'firebase/app';

import 'firebase/firestore'

import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDdUJh1xYTA76tgG8u5qcjFi6V-p6usFbs",
    authDomain: "ecommerce-stripe-d05fb.firebaseapp.com",
    projectId: "ecommerce-stripe-d05fb",
    storageBucket: "ecommerce-stripe-d05fb.appspot.com",
    messagingSenderId: "1056269934529",
    appId: "1:1056269934529:web:c0df35dfa7dc87dc419940"
  }


  export const createUserProfileDocument = async(userAuth, additionalData) => {


if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);


const snapShot = await userRef.get()

if (!snapShot.exists) {
  
  const { displayName, email} = userAuth;
  const createdAt = new Date();


  try {

    await userRef.set({

    displayName,
    email,
    createdAt,
    ...additionalData

  }) } catch (error) {

    console.log('error creating user', error.message)

  }
}

return userRef;
  }

  firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
