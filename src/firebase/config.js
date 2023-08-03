import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANkgyTSbzxbXsTMwCoxKr4vW1DmhwKCBw",
  authDomain: "shop-products-969b2.firebaseapp.com",
  projectId: "shop-products-969b2",
  storageBucket: "shop-products-969b2.appspot.com",
  messagingSenderId: "1066597973683",
  appId: "1:1066597973683:web:35fa55bfd737e78cd67ac6",
  measurementId: "G-KLLBL5WVTS",
};

firebase.initializeApp(firebaseConfig);

const shopFirestore = firebase.firestore();

export { shopFirestore };
