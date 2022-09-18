import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserDataService {
  adduser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateuser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  getAlluser = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };

  deleteuser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };
}
export default new UserDataService();
