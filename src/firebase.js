import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCINRIeAnEencGUqrtAOm0GVIWTtBCMl0A",
    authDomain: "kulukirjanpito-5a0b2.firebaseapp.com",
    databaseURL: "https://kulukirjanpito-5a0b2.firebaseio.com",
    projectId: "kulukirjanpito-5a0b2",
    storageBucket: "kulukirjanpito-5a0b2.appspot.com",
    messagingSenderId: "996147189686",
    appId: "1:996147189686:web:542b3339dca879813ed317"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;