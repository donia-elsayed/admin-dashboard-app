import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgn1Vm4t7oL37_ph2_9iz62vWZ4eOz-Ho",
  authDomain: "admin-dashboard-3f405.firebaseapp.com",
  projectId: "admin-dashboard-3f405",
  storageBucket: "admin-dashboard-3f405.appspot.com",
  messagingSenderId: "341738122006",
  appId: "1:341738122006:web:ad7bc5169f0decbfbe7e37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
