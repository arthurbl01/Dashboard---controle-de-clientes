import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBTW9k_AGtyX4VN-dwsc7uFg3ex1gBes9o",
  authDomain: "dashboard-a6f61.firebaseapp.com",
  databaseURL: "https://dashboard-a6f61.firebaseio.com",
  projectId: "dashboard-a6f61",
  storageBucket: "dashboard-a6f61.appspot.com",
  messagingSenderId: "325721486319",
  appId: "1:325721486319:web:fcadd2c7585355df857c1a"};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();