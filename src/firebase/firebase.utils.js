import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCw-PTbbyVywNnWP9jYMLZznwDAHS35jq8",
    authDomain: "crwn-db-7cb8c.firebaseapp.com",
    databaseURL: "https://crwn-db-7cb8c.firebaseio.com",
    projectId: "crwn-db-7cb8c",
    storageBucket: "",
    messagingSenderId: "121617702807",
    appId: "1:121617702807:web:255ec6e5a1d20afdb86ed2"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;