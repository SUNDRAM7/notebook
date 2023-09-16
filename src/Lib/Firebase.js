import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is o
const firebaseConfig = {
    apiKey: "AIzaSyAiD3vr8dNDOhpBL1Guvmp-2q_k1gqiulo",
    authDomain: "notebook-5bb6d.firebaseapp.com",
    projectId: "notebook-5bb6d",
    storageBucket: "notebook-5bb6d.appspot.com",
    messagingSenderId: "1042775276177",
    appId: "1:1042775276177:web:9e1900ea651cdb9af35d30",
    measurementId: "G-2JYDMVEKWF"
  };
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore =firebase.firestore();