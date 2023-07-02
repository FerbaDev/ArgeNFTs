import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOKZy5t9hWL6KJ4NytNiDFWyRsJ4e-IjE",
  authDomain: "trabajo-react-fer.firebaseapp.com",
  projectId: "trabajo-react-fer",
  storageBucket: "trabajo-react-fer.appspot.com",
  messagingSenderId: "781629716369",
  appId: "1:781629716369:web:a7379e8e93b2c3804f0c30",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth(app);

export const ingresar = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert("Email inválido");
  }
};

export const registrarse = async ({ email, password }) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

const googleProvider = new GoogleAuthProvider();
export const loginWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};
