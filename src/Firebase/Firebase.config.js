// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcznTNU3XNRms6KUTzp9ZwCms15KVuANs",
    authDomain: "cse-from-home-app.firebaseapp.com",
    projectId: "cse-from-home-app",
    storageBucket: "cse-from-home-app.appspot.com",
    messagingSenderId: "975284432520",
    appId: "1:975284432520:web:a1b22400c3e911dda2b93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;