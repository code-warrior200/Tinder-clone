import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_tM2LJ-DtqfW_f7t9UdzfryLYMzAWtL4",
    authDomain: "link-up-a6c55.firebaseapp.com",
    databaseURL: "https://link-up-a6c55-default-rtdb.firebaseio.com",
    projectId: "link-up-a6c55",
    storageBucket: "link-up-a6c55.appspot.com",
    messagingSenderId: "127708565684",
    appId: "1:127708565684:web:6be265629808eb4adc87e1",
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;