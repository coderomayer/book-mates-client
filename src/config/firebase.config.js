// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5K23K2V0jNGn2ScQwPxbFCyYxRkKfT2I",
  authDomain: "bookmates-eb572.firebaseapp.com",
  projectId: "bookmates-eb572",
  storageBucket: "bookmates-eb572.appspot.com",
  messagingSenderId: "717354587854",
  appId: "1:717354587854:web:29eaa9f132470950c2e29f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;