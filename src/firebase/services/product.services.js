import {db} from "../firebase-config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const productCollectionRef = collection(db, "products");

class ProductDataService {
    addProduct = (newProduct) => {
        return addDoc(productCollectionRef, newProduct)
    };

    updateProduct = (id, updatedProduct) => {
        const productDoc = doc(db, "products", id);
        return updateDoc(productDoc, updatedProduct)
    };

    deleteProduct = (id) => {
        const productDoc = doc(db, "products", id);
        return deleteDoc(productDoc)
    };

    getAllProduct = () => {
        return getDocs(productCollectionRef)
    };

    getProduct = (id) => {
        const productDoc = doc(db, "productss", id);
        return getDocs(productDoc)
        
    }
}

export default new ProductDataService();