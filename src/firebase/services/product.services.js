import {db} from "../firebase-config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where 
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
        const productDoc = doc(db, "products", id);
        return getDocs(productDoc)
        
    };

    getMenCart = () => {
        const q = query(productCollectionRef, where('category',  "==",  "Men Cartegory"))
        return getDocs(q)
    };

    getWomenCart = () => {
        const q = query(productCollectionRef, where('category', "==", "Women Cartegory"))
        return getDocs(q)
    };

    getChildrenCart = () => {
        const q =  query(productCollectionRef, where('category', "==", "Children Cartegory"))
        return getDocs(q)
    };
}

export default new ProductDataService();