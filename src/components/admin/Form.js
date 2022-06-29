import { useNavigate  } from "react-router-dom";
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import ProductDataService from '../../firebase/services/product.services';
import { uploadAFile } from "../../firebase/utils/uploadFile";
import { TailSpin } from  'react-loader-spinner';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const options = [
    { value: 'Men Cartegory', label: 'Men Cartegory' },
    { value: 'Women Category', label: 'Women Category' },
    { value: 'Children Category', label: 'Children Category' },
  ];

const Form = ({formText, product, price}) => {
    console.log(product, price)

    const navigate = useNavigate();

    const [category, setCategory] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [description, setDescription] = useState('')
    const [framesize, setFramesize] = useState('')
    const [frontMaterial, setFrontMaterial] = useState('')
    const [lensWidth, setlensWidth] = useState('')
    const [lensHeight, setLensHeight] = useState('')
    const [bridgeWidth, setbridgeWidth] = useState('')
    const [templeWidth, setTempleWidth] = useState('')
    const [rimType, setRimType] = useState('')
    const [templeMaterial, setTempleMaterial] = useState('')
    const [shape, setShape] = useState('')
    const [spinner, setSpinner] = useState(false)
    const [rightView, setRightView] = useState(null)
    const [leftView, setLeftView] = useState(false)
    const [frontView, setFrontView] = useState(null)
    

    useEffect(() => {

        console.log(product, 'pro')

        if(product){
            console.log(product.category, '----category')
            setCategory(product.category )
            setProductName(product.productName)
            setProductPrice(product.productPrice)
            setFrontView(product.frontView)
            setLeftView(product.leftView)
            setRightView(product.rightView)
            setDescription(product.description)
            setFramesize(product.framesize)
            setFrontMaterial(product.frontMaterial)
            setlensWidth(product.lensWidth)
            setLensHeight(product.lensHeight)
            setbridgeWidth(product.bridgeWidth)
            setTempleWidth(product.templeWidth)
            setRimType(product.rimType)
            setTempleMaterial(product.templeMaterial)
            setShape(product.shape)
        }

    },[product])


    const addProduct = async () => {
        const front = frontView ? await uploadAFile(frontView) : null
        const left = leftView ? await uploadAFile(leftView) : null
        const right = rightView ? await uploadAFile(rightView) : null
        // if(productName === '' || productPrice === null || frontView === null || leftView === null || rightView === null ||  category === null || description === '' || framesize === ''|| frontMaterial === '' || lensWidth === '' || lensHeight === '' || bridgeWidth === ''|| templeWidth === '' || rimType === '' || shape === '' || templeMaterial === ''){
        //     return;
        // }



        const newProduct = {
            productName,
            productPrice,
            frontView:front,
            leftView:left,
            rightView:right,
            category:category.value,
            description,
            framesize, 
            frontMaterial,
            lensWidth,
            lensHeight, 
            bridgeWidth,
            templeWidth,
            rimType,
            shape,
            templeMaterial

        }

        console.log(newProduct)


        try{
            setSpinner(false)
            await ProductDataService.addProduct(newProduct)
            toast.success('Product added SuccessFully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })

                setCategory('')
                setProductName('')
                setProductPrice('')
                setFrontView(null)
                setLeftView(null)
                setRightView(null)
                setDescription('')
                setFramesize('')
                setFrontMaterial('')
                setlensWidth('')
                setLensHeight('')
                setbridgeWidth('')
                setTempleWidth('')
                setRimType('')
                setShape('')
                setTempleMaterial('')
                setSpinner(false)
        }catch(err){
            console.log(err)
            setSpinner(false)
            toast.error('Unable to add Product', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    const updateProduct = async () => {
        const front = frontView ? await uploadAFile(frontView) : null
        const left = leftView ? await uploadAFile(leftView) : null
        const right = rightView ? await uploadAFile(rightView) : null
        // if(productName === '' || productPrice === null || frontView === null || leftView === null || rightView === null || category === null || description === '' || framesize === ''|| frontMaterial === '' || lensWidth === '' || lensHeight === '' || bridgeWidth === ''|| templeWidth === '' || rimType === '' || shape === '' || templeMaterial === ''){
        //     return;
        // }

        const updateProduct = {
            productName,
            productPrice,
            frontView:front,
            leftView:left,
            rightView:right,
            category:category,
            description,
            framesize, 
            frontMaterial,
            lensWidth,
            lensHeight, 
            bridgeWidth,
            templeWidth,
            rimType,
            shape,
            templeMaterial

        }


        try{
            setSpinner(false)
            await ProductDataService.updateProduct(JSON.parse(localStorage.getItem('id')), updateProduct)
            toast.success('Product update SuccessFully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })

                setCategory('')
                setProductName('')
                setProductPrice('')
                setFrontView(null)
                setLeftView(null)
                setRightView(null)
                setDescription('')
                setFramesize('')
                setFrontMaterial('')
                setlensWidth('')
                setLensHeight('')
                setbridgeWidth('')
                setTempleWidth('')
                setRimType('')
                setShape('')
                setTempleMaterial('')
                setSpinner(false)
        }catch(err){
            console.log(updateProduct, 'update')
            console.log(err)

            
            setSpinner(false)
            toast.error('Unable to Update Product, make sure all fields are filled', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }

    }


    const addProductSubmitHandler = async(e) => {
        e.preventDefault();
        setSpinner(true)
        // console.log(productName, productPrice, image, category)
        

        formText === 'Add Product' ? addProduct() : updateProduct()
       
        
        

        
    }


    
    
    return(

        <>
        <form className="xl:w-4/12 lg:w-5/12 md:w-6/12  mx-auto p-3 border border-slate-400 rounded-md">
            <div className=" my-4 ">
                <label>Product Name</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none p-2"  onChange={(e) => setProductName(e.target.value)} value={productName}/>
            </div>
            <div className=" my-4">
                <label>Product Price</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" type="text" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className=" my-4">
                <label>Select Category</label>
                <Select
                    placeholder={product?.category || "--- Please Select --"}
                    defaultValue={category}
                    onChange={setCategory}
                    options={options}
                />
            </div>
            <div>
                <label>FrameSize</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setFramesize(e.target.value)} value={framesize}/>
            </div>
            <div>
                <label>lens Width</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setlensWidth(e.target.value)} value={lensWidth}/>
            </div>
            <div>
                <label>lens Height</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setLensHeight(e.target.value)} value={lensHeight}/>
            </div>
            <div>
                <label>Bridge Width</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setbridgeWidth(e.target.value)} value={bridgeWidth}/>
            </div>
            <div>
                <label>temple length</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setTempleWidth(e.target.value)} value={templeWidth}/>
            </div>
            <div className=" my-4">
                <label>Image Front View</label>
                <input type="file" className="mt-1" onChange={(e) => setFrontView(e.target.files[0])} />
            </div>
            <div className=" my-4">
                <label>Image Left View</label>
                <input type="file" className="mt-1" onChange={(e) => setLeftView(e.target.files[0])} />
            </div>
            <div className=" my-4">
                <label>Image Right View</label>
                <input type="file" className="mt-1" onChange={(e) => setRightView(e.target.files[0])} />
            </div>
            <button className=" my-6 mx-auto flex px-8 py-2 rounded-md bg-indigo-800 text-white" onClick={addProductSubmitHandler}>{spinner ? <div className="w-full "><TailSpin color="white" height={30} width={220} /></div> : formText}
            </button>
            
        </form>
        <button className="py-2 px-12 rounded-md border border-slate-700  mx-auto flex my-5" onClick={() => navigate(-1)}>Back</button>
        </>
    )
}

export default Form;