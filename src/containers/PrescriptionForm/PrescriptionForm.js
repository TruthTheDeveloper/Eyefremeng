import Form from "./components/Form";
import Item from "./components/Item";


import { useEffect, useState} from "react";
import ProductServices from "../../firebase/services/product.services";
import {useParams} from "react-router-dom";
import GlassReview from "./components/GlassReview";

import { TailSpin } from  'react-loader-spinner';
import ReactImageMagnify from 'react-image-magnify';

const PrescriptionForm = () => {

    const [productDetail, setProductDetail] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])

    const [relatedProductClick, setRelatedProductClick] = useState(false)
    const [view, setView] = useState()

    const formId = useParams()


    useEffect(() => {
        getProductDetail()
        result()
    },[formId])

    useEffect(() => {
        setView(productDetail.frontView)
    },[productDetail])




    const result = async () => {
        if(JSON.parse(localStorage.getItem('cart')) === 'men'){
            const data = await ProductServices.getMenCart()
            setRelatedProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }else{
            const data = await ProductServices.getWomenCart()
            setRelatedProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        
    }


    const getProductDetail = async () => {
        const data = await ProductServices.getProduct(JSON.parse(localStorage.getItem('id')))
        setProductDetail(data.data())

        
    }

    const relatedProductClickHandler = () => {
        setRelatedProductClick(prev => !prev)
    }

    const setRightView = () => {
        setView(productDetail.rightView)
        

    }

    const setLeftView = () => {
        setView(productDetail.leftView)

    }

    const setFrontView = () => {
        setView(productDetail.frontView)

    }


    console.log(productDetail)

    return(
        // <img src={view} className=" h-72" alt="glass"/>
       
        <section className=" pt-16">
            <div className=" lg:grid grid-cols-2">
                <div className="">
                    <div className="flex justify-center w-full">
                    {productDetail.frontView ? <div className=" "><ReactImageMagnify  
                    enlargedImageContainerStyle={{objectFit: 'fill'}}
                    enlargedImageStyle={{objectFit: 'fill'}}
                    enlargedImageContainerDimensions={{width:'100%', height:'100%'}} 
                        smallImage= {{
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: view
                            
                        }}
                        largeImage= {{
                            src: view,
                            width: 1000,
                            height: 1000,
                            sizes: 'contain'
                            
                        }}
                     /></div>: <div className="py-12"><TailSpin color="#3730A3" height={80} width={80} /></div>}  
                    </div>
                    <div className="flex justify-center">
                    <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setLeftView()}>
                        
                            <img className="w-full" src={productDetail.leftView
                                } />
                        </div>
                        <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setFrontView()} >
                            <img className="w-full" src={productDetail.frontView
                            } />
                        </div>
                        <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setRightView()}>
                            <img className="w-full" src={productDetail.rightView
                            } />
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                    <div className="h-12 w-16   rounded-full m-2 cursor-pointer" onClick={() => setLeftView()}>
                        </div>
                        <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setFrontView()} >
                        </div>
                        <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setRightView()}>
                        </div>
                    </div> */}

                    
                    <div className="text-xl font-semibold ml-5 md:text-center md:text-2xl mt-3 text-indigo-800">
                    
                        <div>
                            {/* <h1>{productDetail.description}</h1> */}
                            
                        </div>
                    </div>
                    <Form productName={productDetail.productName} productDescription={productDetail.description} productPrice={productDetail.productPrice} productImage={productDetail.frontView}/>
                    <GlassReview relatedProductClick={relatedProductClick} />
                    {/* <LensForm/> */}
                </div>
                <div className="mx-3 md:mx-16 lg:mt-24">
                    <h1 className="text-indigo-800 text-3xl ">{productDetail.productName}</h1>
                    <p className="text-indigo-800  text-2xl font-semibold my-6">₦ {productDetail.productPrice}</p>
                    <h1 className="font-semibold text-xl lg:text-2xl py-3">Description</h1>
                    <p className="text-sm lg:text-base text-slate-800 font-semibold w-96">{productDetail.description}</p>
                    <ul className="my-6">
                        <li className="my-1">Frame Size: {productDetail.framesize}</li>
                        {/* <li className="my-1">Front Material: {productDetail.frontMaterial}</li>
                        <li className="my-1">Temple Material: {productDetail.templeMaterial}</li>
                        <li className="my-1">Rim Type: {productDetail.rimType}</li>
                        <li className="my-1">Shape: {productDetail.shape}</li> */}
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
                        <p>temple length: {productDetail.templeWidth}</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-temple-length.svg" />
                    </div>
                </div>
            </div>
            <div >
                <h1 className="ml-6 mt-8 md:ml-0 md:text-center text-2xl font-semibold">Related Product</h1>
                {relatedProduct.length === 0 && <div className="mx-auto my-24 flex justify-center"><TailSpin color="#3730A3" height={80} width={80} /></div>}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                    {relatedProduct.map((item, index ) => { 
                    return(
                        <Item
                            key={item.id }
                            id={item.id}
                            name={item.productName}
                            image={item.frontView}
                            price={item.productPrice}
                            relatedProductClickHandler={relatedProductClickHandler}
                        />
                    )
                })}
                </div>
            </div>
            {/* <Modal/> */}
            {/* <ReviewModal openReview={openReview} closeReviewHandler={closeReviewHandler}/> */}
        </section>
    )
}

export default PrescriptionForm;

            