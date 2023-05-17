// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlkb5jLFTYBM0sYO6b0aw8zedLR4Tgj-4",
  authDomain: "kids-car-zone.firebaseapp.com",
  projectId: "kids-car-zone",
  storageBucket: "kids-car-zone.appspot.com",
  messagingSenderId: "729666611545",
  appId: "1:729666611545:web:d808a645cb0842f75d0448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;