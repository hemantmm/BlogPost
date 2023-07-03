// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4FZOmX0AP6MUVNPkU0_PjZfbVMe5e43Q",
  authDomain: "blogproject-64a8c.firebaseapp.com",
  projectId: "blogproject-64a8c",
  storageBucket: "blogproject-64a8c.appspot.com",
  messagingSenderId: "1067035537400",
  appId: "1:1067035537400:web:1cf9d75ea7b650f775300d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()