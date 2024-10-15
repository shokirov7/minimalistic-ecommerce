import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaz4sXNMXWeS6siQ4jj9E9EM6dRKcShO4",

  authDomain: "shop-products-969b2.firebaseapp.com",

  projectId: "shop-products-969b2",

  storageBucket: "shop-products-969b2.appspot.com",

  messagingSenderId: "1066597973683",

  appId: "1:1066597973683:web:f52e7b7684449640d67ac6",

  measurementId: "G-BGP1G2FDLZ",
};

firebase.initializeApp(firebaseConfig);

const shopFirestore = firebase.firestore();

export { shopFirestore };
