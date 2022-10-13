import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "your_firebase_apikey",
    authDomain: "project_name.firebaseapp.com",
    projectId: "project_name-2454f75",
    storageBucket: "project_name-2445f75.appspot.com",
    messagingSenderId: "3399571545776754",
    appId: "1:339957156754:web:d6dc00ea2e5fcb2cd84f4b",
    databaseURL : "https://project_name-default-rtdb.asia-southeast1.firebasedatabase.app"
  };
  //replace all of the above with your credentials and keys.

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();
  export default {
      firebaseConfig,auth,db,
  }