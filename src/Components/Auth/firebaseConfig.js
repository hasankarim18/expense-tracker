// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeiSmtKk8fzzUkEd_ECeaqJUzXPXJYJ-A",
    authDomain: "expense-track-2d87d.firebaseapp.com",
    databaseURL: "https://expense-track-2d87d-default-rtdb.firebaseio.com",
    projectId: "expense-track-2d87d",
    storageBucket: "expense-track-2d87d.appspot.com",
    messagingSenderId: "723367015661",
    appId: "1:723367015661:web:28f7c4988e7c7634c108e4",
    measurementId: "G-SX1KQJZ0XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);