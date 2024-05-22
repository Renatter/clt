// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore,
    initializeFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getStorage
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTOJUbT934M18H78kcLf44qvGh94w_jms",

    authDomain: "clothes-c2b42.firebaseapp.com",

    projectId: "clothes-c2b42",

    storageBucket: "clothes-c2b42.appspot.com",

    messagingSenderId: "468635788769",

    appId: "1:468635788769:web:e679af0dd0a405f9b09ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}