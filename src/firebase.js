// import firebase from "firebase";

// Import the functions you need from the SDKs you need

//import firebase from "firebase/app";
//import "firebase/firestore";
//import firebase from "firebase";
//import"firebase/auth";

//import firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAomK7X0r8HiKQJr-QBIVJVo5Ji3f8O4eU",
//   authDomain: "netflix-clone-50a86.firebaseapp.com",
//   projectId: "netflix-clone-50a86",
//   storageBucket: "netflix-clone-50a86.appspot.com",
//   messagingSenderId: "444336822010",
//   appId: "1:444336822010:web:fd5673128af4cd12c21b43",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export { auth };
// export default db;

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyAomK7X0r8HiKQJr-QBIVJVo5Ji3f8O4eU",
//   authDomain: "netflix-clone-50a86.firebaseapp.com",
//   projectId: "netflix-clone-50a86",
//   storageBucket: "netflix-clone-50a86.appspot.com",
//   messagingSenderId: "444336822010",
//   appId: "1:444336822010:web:fd5673128af4cd12c21b43",
// });

// const db = app.firestore();
// const auth = app.auth();

// export { auth };
// export default db;

const firebaseConfig = {
  apiKey: "AIzaSyAomK7X0r8HiKQJr-QBIVJVo5Ji3f8O4eU",
  authDomain: "netflix-clone-50a86.firebaseapp.com",
  projectId: "netflix-clone-50a86",
  storageBucket: "netflix-clone-50a86.appspot.com",
  messagingSenderId: "444336822010",
  appId: "1:444336822010:web:fd5673128af4cd12c21b43",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

export { auth };
export default db;
