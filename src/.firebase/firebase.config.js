// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzjBKMrX6xRhf29Th_hyGB9jNzLrFpFEU",
  authDomain: "chef-recipe-hunter-4d487.firebaseapp.com",
  projectId: "chef-recipe-hunter-4d487",
  storageBucket: "chef-recipe-hunter-4d487.appspot.com",
  messagingSenderId: "42532817080",
  appId: "1:42532817080:web:9d3e1cad79124726580c4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;