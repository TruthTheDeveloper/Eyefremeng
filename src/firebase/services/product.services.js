import {db} from "../firebase-config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    limit,
    getDoc,
    startAfter
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
        return getDoc(productDoc)
        
    };


    getMenCart = (lastVisible) => {
        if(lastVisible){
            const q = query(productCollectionRef, where('category',  "==",  "Men Cartegory"), limit(9), startAfter(lastVisible))
        
            return getDocs(q)
        }else{
            const q = query(productCollectionRef, where('category',  "==",  "Men Cartegory"), limit(9))
        
            return getDocs(q)
        }
    };

    getWomenCart = (lastVisible) => {
        if(lastVisible){
            const q = query(productCollectionRef, where('category', "==", "Women Category"), limit(9), startAfter(lastVisible))
            return getDocs(q)
        }else{
            const q = query(productCollectionRef, where('category', "==", "Women Category"), limit(9))
            return getDocs(q)
        }
    };

    getChildrenCart = () => {
        const q =  query(productCollectionRef, where('category', "==", "Children Cartegory"))
        return getDocs(q)
    };

}

export default new ProductDataService();