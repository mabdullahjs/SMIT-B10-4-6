import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAjIc8xWUF0qB6wZHb_lp8pAGMSagTuuBo",
    authDomain: "smit-10-a.firebaseapp.com",
    projectId: "smit-10-a",
    storageBucket: "smit-10-a.appspot.com",
    messagingSenderId: "255751253034",
    appId: "1:255751253034:web:23c716023045d12cc82753",
    measurementId: "G-1KMZ9E2J63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);