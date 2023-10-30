import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwjaJFTyPA23AJaD_21nyoVjd9NFOzgP4",
    authDomain: "smit-practiceapp.firebaseapp.com",
    projectId: "smit-practiceapp",
    storageBucket: "smit-practiceapp.appspot.com",
    messagingSenderId: "796294336033",
    appId: "1:796294336033:web:8dac2f2fbabcc261ac1d60",
    measurementId: "G-MDQ2WVHV7D"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);