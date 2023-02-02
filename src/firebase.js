import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore,serverTimestamp} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsIS3pHy8ik15-xi7aAvCpo4IwIfI9mmw",
    authDomain: "slack-clone-6fa22.firebaseapp.com",
    projectId: "slack-clone-6fa22",
    storageBucket: "slack-clone-6fa22.appspot.com",
    messagingSenderId: "765874546562",
    appId: "1:765874546562:web:c159ff84edb6cf43ff519b",
    measurementId: "G-4M7BRY3GBW"
  };


  
const app=initializeApp(firebaseConfig)
const db=getFirestore();
const  auth =getAuth();
const storage=getStorage();
const provider=new GoogleAuthProvider();
const timeStamp=serverTimestamp();

export {app,db,auth,storage,provider,timeStamp}