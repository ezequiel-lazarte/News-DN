import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-qiE2vmGNeZyRCYO3r3vbByZZQyCOvTw",
    authDomain: "proyecto-react-firebase.firebaseapp.com",
    projectId: "proyecto-react-firebase",
    storageBucket: "proyecto-react-firebase.appspot.com",
    messagingSenderId: "308588650057",
    appId: "1:308588650057:web:99231cda97da80742f2998",
    measurementId: "G-LBE9Q4G8L2"
  };
  
const fire = firebase.initializeApp(firebaseConfig);

const auth = fire.auth();

export {auth};