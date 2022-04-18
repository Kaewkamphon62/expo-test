// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYK8jqFRaog3yZBWl6v__KFocyywHgCdo",
  authDomain: "fir-auth-8bd59.firebaseapp.com",
  projectId: "fir-auth-8bd59",
  storageBucket: "fir-auth-8bd59.appspot.com",
  messagingSenderId: "1022521765626",
  appId: "1:1022521765626:web:b342fe2fec2c1e44a2a343"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };