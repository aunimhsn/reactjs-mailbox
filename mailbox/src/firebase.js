import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_uDSw4PMSY3h5Q_iSaoa4U6ilWeTX6SE",
    authDomain: "reactjs-mailbox.firebaseapp.com",
    projectId: "reactjs-mailbox",
    storageBucket: "reactjs-mailbox.appspot.com",
    messagingSenderId: "679657067050",
    appId: "1:679657067050:web:5538a8859103003cb7e953"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };