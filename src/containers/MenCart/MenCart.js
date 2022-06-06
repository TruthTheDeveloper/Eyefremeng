import MenItem from "./components/MenItem";
import Banner from "./components/Banner";

import ProductServices from "../../firebase/services/product.services";

import { useEffect, useState } from "react";
import Item from "../../components/admin/Item";

const MenCart = () => {

    const [menProduct, setMenProduct] = useState([])

    useEffect(() => {

        


        console.log(result())

        console.log(menProduct)
        
    },[])

    const result = async () => {
        const data = await ProductServices.getMenCart()
        setMenProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    return(
        <section className="py-12 lg:py-16 lg:mx-24">
            <Banner/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {menProduct.map((item, index ) => { 
                    return(
                        <Item
                            key={index + 1 }
                            name={item.productName}
                            image={item.image}
                            price={item.productPrice}
                        />
                    )
                })}
            </div>
            <button className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg">Load More</button>
        </section>
    )
}
export default MenCart;