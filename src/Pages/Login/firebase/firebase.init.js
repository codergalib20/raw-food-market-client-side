import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

export default function initializeFirebase() {
    initializeApp(firebaseConfig)
}
