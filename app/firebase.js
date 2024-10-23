// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIqtXRJA2Zu-0s_8mIy8Ie5ObhaHDRj-E",
  authDomain: "bibliotecatdd-2d8b8.firebaseapp.com",
  projectId: "bibliotecatdd-2d8b8",
  storageBucket: "bibliotecatdd-2d8b8.appspot.com",
  messagingSenderId: "966367658164",
  appId: "1:966367658164:web:1d061d280e43d40d8f97e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);