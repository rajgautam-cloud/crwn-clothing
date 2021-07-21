import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACzvKfRJl7qZHi9K7H6y2unalP-l0AgDw",
  authDomain: "crwn-clothing-f46f4.firebaseapp.com",
  projectId: "crwn-clothing-f46f4",
  storageBucket: "crwn-clothing-f46f4.appspot.com",
  messagingSenderId: "422100498192",
  appId: "1:422100498192:web:3ddaa0998684a5801d5795",
  measurementId: "G-SNB1MZN9PN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
