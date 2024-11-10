// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGo_lBJaO-yQL6Go-wlbCcd3iro82fIko",
    authDomain: "firebas-lws.firebaseapp.com",
    projectId: "firebas-lws",
    storageBucket: "firebas-lws.firebasestorage.app",
    messagingSenderId: "581219763376",
    appId: "1:581219763376:web:b407113033ad019fede775",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const signUp = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = response.user;
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const signinWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response.user;
    } catch (error) {
        throw new Error(error);
    }
};

export const sendpasswordResetEmail = async (email) => {
    try {
        const response = await sendPasswordResetEmail(auth, email);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        return user;
    } catch (error) {
        throw new Error(error);
    }
};
