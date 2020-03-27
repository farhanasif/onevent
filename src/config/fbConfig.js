import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: "react-redux-c02aa.firebaseapp.com",
    databaseURL: "https://react-redux-c02aa.firebaseio.com",
    projectId: "react-redux-c02aa",
    storageBucket: "react-redux-c02aa.appspot.com",
    messagingSenderId: "662703363063",
    appId: "1:662703363063:web:77d8bf71047094ca09d4f2",
    measurementId: "G-0NYDD7N72Y",    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore();

export default firebase;