// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaz4sXNMXWeS6siQ4jj9E9EM6dRKcShO4",
  authDomain: "shop-products-969b2.firebaseapp.com",
  projectId: "shop-products-969b2",
  storageBucket: "shop-products-969b2.appspot.com",
  messagingSenderId: "1066597973683",
  appId: "1:1066597973683:web:f52e7b7684449640d67ac6",
  measurementId: "G-BGP1G2FDLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const shopFirestore = firebase.firestore();

export { shopFirestore };
