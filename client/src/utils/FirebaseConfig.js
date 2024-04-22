import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDoav-7CEg7LDYLzsjJSuxSKQMfcnTs6Cw",
    authDomain: "whatsapp-clone-fa752.firebaseapp.com",
    projectId: "whatsapp-clone-fa752",
    storageBucket: "whatsapp-clone-fa752.appspot.com",
    messagingSenderId: "121462098026",
    appId: "1:121462098026:web:d788dd6d26a4556a42e213",
    measurementId: "G-HTD099G1HZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);