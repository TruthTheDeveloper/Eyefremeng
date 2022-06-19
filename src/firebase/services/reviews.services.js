import {db} from "../firebase-config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    getDoc,
    deleteDoc
} from "firebase/firestore";


const reviewCollectionRef = collection(db, "products");


class ReviewDataService {
    addReview = (productId, reviews) => {
        return addDoc(reviewCollectionRef, productId, 'reviews', reviews)
    };

    updateReview = (id, updatedreview) => {
        const reviewDoc = doc(db, "reviews", id);
        return updateDoc(reviewDoc, updatedreview)
    };

    getAllReview = (productId) => {
        return getDocs(reviewCollectionRef, productId, 'reviews',)
    };

    getReview = (productId, reviewId) => {
        const reviewDoc = doc(db, "reviews", productId, reviewId);
        return getDoc(reviewDoc)
        
    };

    deleteReview = (productId, reviewId) => {
        const reviewDoc = doc(db, "reviews", productId, reviewId);
        return deleteDoc(reviewDoc)
    };
}
export default new ReviewDataService();