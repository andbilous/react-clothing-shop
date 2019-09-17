import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCw-PTbbyVywNnWP9jYMLZznwDAHS35jq8",
  authDomain: "crwn-db-7cb8c.firebaseapp.com",
  databaseURL: "https://crwn-db-7cb8c.firebaseio.com",
  projectId: "crwn-db-7cb8c",
  storageBucket: "crwn-db-7cb8c.appspot.com",
  messagingSenderId: "121617702807",
  appId: "1:121617702807:web:255ec6e5a1d20afdb86ed2"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
