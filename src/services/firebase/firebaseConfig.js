import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH_QnxRC9XgGD71pZEtI5-XiAEUPMv3-U",
  authDomain: "oudperfu.firebaseapp.com",
  projectId: "oudperfu",
  storageBucket: "oudperfu.firebasestorage.app",
  messagingSenderId: "159349106154",
  appId: "1:159349106154:web:1970359ac4b8d4fb47be93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};

//Initialize Firestore
export const db = getFirestore(app)


