import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBN5Bu7WRuLnFnWmm1xlI9pJfR2UYDQKYQ",
	authDomain: "login-reduxapp.firebaseapp.com",
	projectId: "login-reduxapp",
	storageBucket: "login-reduxapp.appspot.com",
	messagingSenderId: "4716572382",
	appId: "1:4716572382:web:7e1763d6fe389bd57e1c4f",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
