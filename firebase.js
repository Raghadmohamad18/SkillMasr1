// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC3I9DDJKU2D5T3JMPwyoMbVzOpi8KisSQ",
  authDomain: "skillmasr.firebaseapp.com",
  projectId: "skillmasr",
  storageBucket: "skillmasr.firebasestorage.app",
  messagingSenderId: "290650747699",
  appId: "1:290650747699:web:638916dc7ecee74ebfc446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const db = getFirestore(app);
export const auth = getAuth(app);