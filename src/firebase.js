import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVY53EAt7c-MXYcp5mPtHqvO2Y1WiiGxk",
  authDomain: "slack-clone-f11e1.firebaseapp.com",
  projectId: "slack-clone-f11e1",
  storageBucket: "slack-clone-f11e1.appspot.com",
  messagingSenderId: "211051075848",
  appId: "1:211051075848:web:0aca0f1d5c7c04757374bd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };