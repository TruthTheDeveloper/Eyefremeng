import MenItem from "./components/MenItem";
import Banner from "./components/Banner";

import ProductServices from "../../firebase/services/product.services";

import { useEffect, useState } from "react";


const MenCart = () => {

    const [menProduct, setMenProduct] = useState([])
    const [loadData, setLoadData] = useState()

    useEffect(() => {

        console.log(result())
        
    },[])

    useEffect(() => {
        console.log(menProduct)
    },[menProduct])

    const result = async () => {
        const data = await ProductServices.getMenCart()
        setLoadData(data)
        setMenProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    const loadMore = async (payload) => {
        const lastVisible = payload.docs[payload.docs.length-1];
        console.log("last", lastVisible);

        const data = await ProductServices.getMenCart(lastVisible)
        setLoadData(data)
        console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})), ': data')
        const ans = data.docs.map((doc) => ({...doc.data(), id:doc.id}))
        setMenProduct(prev => [...prev, ...ans])
    }

    return(
        <section className="py-12 lg:py-16 lg:mx-24">
            <Banner/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {menProduct.map((item, index ) => { 
                    return(
                        <MenItem
                            key={item.id }
                            id={item.id}
                            name={item.productName}
                            image={item.image}
                            price={item.productPrice}
                        />
                    )
                })}
            </div>
            <button className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg" onClick={() => loadMore(loadData)}>Load More</button>
        </section>
    )
}
export default MenCart;