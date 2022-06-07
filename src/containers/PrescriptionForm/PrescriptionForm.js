import Form from "./components/Form";
import LensForm from "./components/LensForm";
import Item from "../../components/admin/Item";

import { useEffect, useState } from "react";
import ProductServices from "../../firebase/services/product.services";
//Icons


const PrescriptionForm = () => {

    const [productDetail, setProductDetail] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {
        getProductDetail()
        result()
    },[])

    const result = async () => {
        if(JSON.parse(localStorage.getItem('cart')) === 'men'){
            const data = await ProductServices.getMenCart()
            setRelatedProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }else{
            const data = await ProductServices.getWomenCart()
            setRelatedProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        
    }

    // useEffect(() => {
    //     console.log(productDetail)
    // },[productDetail])

    const getProductDetail = async () => {
        const data = await ProductServices.getProduct(JSON.parse(localStorage.getItem('id')))
        setProductDetail(data.data())
    }

    return(
        <section className=" pt-16">
            <div className=" lg:grid grid-cols-2">
                <div className="">
                    <div className="flex justify-center">
                        <img src={productDetail.image} className="w-96 h-72"/>
                        
                    </div>
                    <div className="text-xl font-semibold ml-5 md:text-center md:text-2xl mt-3 text-indigo-800">
                    
                        <div>
                            {/* <h1>{productDetail.description}</h1> */}
                            <h1>{productDetail.productName}</h1>
                            <p className="text-indigo-800  text-2xl font-semibold my-6"># {productDetail.productPrice}</p>
                        </div>
                    </div>
                    <Form/>
                    {/* <LensForm/> */}
                </div>
                <div className="mx-3 md:mx-16 lg:mt-24">
                    <h1 className="font-semibold text-xl lg:text-2xl py-3">Description</h1>
                    <p className="text-sm lg:text-base text-slate-500">{productDetail.description}</p>
                    <ul className="my-6">
                        <li className="my-1">Size: 54-18-145 <span className="text-orange-500">size chart</span></li>
                        <li className="my-1">Front Material: {productDetail.frontMaterial}</li>
                        <li className="my-1">Temple Material: {productDetail.templeMaterial}</li>
                        <li className="my-1">Rim Type: {productDetail.rimType}</li>
                        <li className="my-1">Shape: {productDetail.shape}</li>
                    </ul>
                    <div>
                        <p>lens width:{productDetail.lensWidth} </p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-lens-width.svg"/>
                    </div>
                    <div className="my-2">
                        <p>lens height: {productDetail.lensHeight}</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-lens-height-1.svg"/>
                    </div>
                    <div className="my-2">
                        <p>bridge Width: {productDetail.bridgeWidth}</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-bridge-width.svg" />
                    </div>
                    <div className="my-2">
                        <p>temple Width: {productDetail.templeWidth}</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-temple-length.svg" />
                    </div>
                </div>
            </div>
            <div >
                <h1 className="ml-6 mt-8 md:ml-0 md:text-center text-2xl font-semibold">Related Product</h1>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                    {relatedProduct.map((item, index ) => { 
                    return(
                        <Item
                            key={item.id }
                            id={item.id}
                            name={item.productName}
                            image={item.image}
                            price={item.productPrice}
                        />
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default PrescriptionForm;

            