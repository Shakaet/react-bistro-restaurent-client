// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyBLJeJD-AV6htyycw5zKBp01stegXaavAA",
//   authDomain: "bistro-restaurant-79371.firebaseapp.com",
//   projectId: "bistro-restaurant-79371",
//   storageBucket: "bistro-restaurant-79371.firebasestorage.app",
//   messagingSenderId: "571766788592",
//   appId: "1:571766788592:web:3fc44e45f0cbf357290d35"
            apiKey:import.meta.env.VITE_apiKey, 
            authDomain:import.meta.env.VITE_authDomain,
            projectId:import.meta.env.VITE_projectId,
            storageBucket:import.meta.env.VITE_storageBucket,
            messagingSenderId:import.meta.env.VITE_messagingSenderId,
            appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth