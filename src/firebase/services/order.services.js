import {db} from "../firebase-config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    getDoc,
    deleteDoc,
    query,
    where
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

    getUserOrder = (id) => {
        const q = query(orderCollectionRef, where('userId',  "==",  `${id}`))
        return getDocs(q)
    }
    

    deleteOrder = (id) => {
        const orderDoc = doc(db, "orders", id);
        return deleteDoc(orderDoc)
    };
}
export default new orderDataService();