import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3dykx2ZM3cewJrDfahisgQRnVQ_8BhEs",
  authDomain: "dust-bunny-game.firebaseapp.com",
  databaseURL: "https://dust-bunny-game-default-rtdb.firebaseio.com",
  projectId: "dust-bunny-game",
  storageBucket: "dust-bunny-game.appspot.com",
  messagingSenderId: "978758250745",
  appId: "1:978758250745:web:2aa9d23fe7830847977228",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
