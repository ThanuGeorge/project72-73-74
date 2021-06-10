import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyANG4FOHUS50a_Cil6wmbXobaOLH2l0SpI",
    authDomain: "storyhub-d98ef.firebaseapp.com",
    projectId: "storyhub-d98ef",
    storageBucket: "storyhub-d98ef.appspot.com",
    messagingSenderId: "293023437869",
    appId: "1:293023437869:web:4ef05a6966b18affc914a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();