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


const subscribersCollectionRef = collection(db, "subscribers");


class subscribersDataService {
    addSubscribers = (newSubscribers) => {
        return addDoc(subscribersCollectionRef, newSubscribers)
    };

    updateSubscribers = (id, updatedSubscribers) => {
        const subscribersDoc = doc(db, "subscriberss", id);
        return updateDoc(subscribersDoc, updatedSubscribers)
    };

    getAllSubscribers = () => {
        return getDocs(subscribersCollectionRef)
    };

    getSubscribers = (id) => {
        const subscribersDoc = doc(db, "subscribers", id);
        return getDoc(subscribersDoc)
        
    };

    deleteSubscribers = (id) => {
        const subscribersDoc = doc(db, "subscribers", id);
        return deleteDoc(subscribersDoc)
    };
}
export default new subscribersDataService();