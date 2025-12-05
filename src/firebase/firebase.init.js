// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



  // VITE_apiKey=AIzaSyCZ14R0fWVqbO8QEuoSSUDV5WKJCcPA7po
  // VITE_authDomain=zap-shift-b354f.firebaseapp.com
  // VITE_projectId=zap-shift-b354f
  // VITE_storageBucket=zap-shift-b354f.firebasestorage.app
  // VITE_messagingSenderId=816812193116
// VITE_appId=1:816812193116:web:3a6fdc86c128af8ce03d99
    // VITE_image_host=3e9ddb4f5a699f6d6da98b2332c38bbb