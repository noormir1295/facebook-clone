// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDcxWfHMxCoPbc2gHd_pRZIWTb8UkLgVG4",
  authDomain: "facebook-clone-4cf3e.firebaseapp.com",
  databaseURL: "https://facebook-clone-4cf3e.firebaseio.com",
  projectId: "facebook-clone-4cf3e",
  storageBucket: "facebook-clone-4cf3e.appspot.com",
  messagingSenderId: "626066219695",
  appId: "1:626066219695:web:29b73ecee7d864642dea5a",
  measurementId: "G-NBFDTEBPYY",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;