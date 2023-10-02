import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhX9TeNsj3fRud6W3GQk7YeXACZHrU5d4",
  authDomain: "sayna-reactjs-batmanreact.firebaseapp.com",
  projectId: "sayna-reactjs-batmanreact",
  storageBucket: "sayna-reactjs-batmanreact.appspot.com",
  messagingSenderId: "271484234515",
  appId: "1:271484234515:web:c118986b676b72530ac8e6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
