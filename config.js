import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyB-sGlbKxLFoyfxhjJEKlvmE9he8k-VqXI",
    authDomain: "buzzer-app-79622.firebaseapp.com",
    databaseURL: "https://buzzer-app-79622-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-79622",
    storageBucket: "buzzer-app-79622.appspot.com",
    messagingSenderId: "10906773794",
    appId: "1:10906773794:web:4253109af2a9545b3cdd7b"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


