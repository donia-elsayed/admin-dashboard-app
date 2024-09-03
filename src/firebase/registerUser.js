import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const registerUser = async (userData) => {
  try {
    const userId = userData.email;
    await setDoc(doc(db, "users", userId), {
      fullName: userData.fullName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      password: userData.password,
    });
  } catch (error) {
    console.error("Error registering user: ", error);
  }
};
