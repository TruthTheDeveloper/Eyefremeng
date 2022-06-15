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


const orderCollectionRef = collection(db, "orders");


class orderDataService {
    addOrder = (newOrder) => {
        return addDoc(orderCollectionRef, newOrder)
    };

    updateOrder = (id, updatedOrder) => {
        const OrderDoc = doc(db, "Orders", id);
        return updateDoc(OrderDoc, updatedOrder)
    };

    getAllOrder = () => {
        return getDocs(orderCollectionRef)
    };

    getOrder = (id) => {
        const orderDoc = doc(db, "orders", id);
        return getDoc(orderDoc)
        
    };

    deleteOrder = (id) => {
        const orderDoc = doc(db, "orders", id);
        return deleteDoc(orderDoc)
    };
}
export default new orderDataService();