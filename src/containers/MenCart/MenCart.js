import MenItem from "./components/MenItem";
import Banner from "./components/Banner";

import ProductServices from "../../firebase/services/product.services";

import { useEffect, useState } from "react";
import Item from "../../components/admin/Item";

const MenCart = () => {

    const [menProduct, setMenProduct] = useState([])

    useEffect(() => {

        const result = async () => {
            return await ProductServices.getMenCart()
        }

        setMenProduct(result())

        console.log(result())

        console.log(menProduct)
        
    },[])

    return(
        <section className="py-12 lg:py-16 lg:mx-24">
            <Banner/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {menProduct.map( item => (
                    <Item
                        name={item.productName}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
            <button className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg">Load More</button>
        </section>
    )
}
export default MenCart;