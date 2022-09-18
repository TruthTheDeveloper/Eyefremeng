import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

class ReviewDataService {
  addReview = (productId, reviews) => {
    const reviewCollectionRef = collection(db, `products/${productId}/reviews`);
    return addDoc(reviewCollectionRef, reviews);
  };

  getReview = (productId) => {
    const reviewCollectionRef = collection(db, `products/${productId}/reviews`);
    return getDocs(reviewCollectionRef, productId, "reviews");
  };

  checkReview = (productId, userId) => {
    const reviewCollectionRef = collection(db, `products/${productId}/reviews`);
    const q = query(reviewCollectionRef, where("id", "==", `${userId}`));
    return getDocs(q);
  };
}
export default new ReviewDataService();
