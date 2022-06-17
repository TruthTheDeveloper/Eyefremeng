import { useNavigate  } from "react-router-dom";
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import ProductDataService from '../../firebase/services/product.services';
import { uploadAFile } from "../../firebase/utils/uploadFile";




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
    const [image, setImage] = useState(null);
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

    useEffect(() => {

        if(product){
            setCategory(product.category )
            setProductName(product.productName)
            setProductPrice(product.productPrice)
            setImage(product.image)
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


    const addProductSubmitHandler = async(e) => {
        e.preventDefault();
        // console.log(productName, productPrice, image, category)
        const file = image ? await uploadAFile(image) : null


       
        if(productName === '' || productPrice === null || image === null || category === null || description === '', framesize === '', frontMaterial === '' || lensWidth === '' || lensHeight === '' || bridgeWidth === '', templeWidth === '', rimType === '', shape === '', templeMaterial === ''){
            return;
        }


        const newProduct = {
            productName,
            productPrice,
            image:file,
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

        try{
            await ProductDataService.addProduct(newProduct)
        }catch(err){
            console.log(err)
        }


        setCategory('')
        setProductName('')
        setProductPrice('')
        setImage()
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
                <label>Front Material</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setFrontMaterial(e.target.value)} value={frontMaterial}/>
            </div>
            <div>
                <label>Temple Material</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setTempleMaterial(e.target.value)} value={templeMaterial}/>
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
                <label>temple Width</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setTempleWidth(e.target.value)} value={templeWidth}/>
            </div>
            <div>
                <label>Rim Type</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setRimType(e.target.value)} value={rimType}/>
            </div>
            <div>
                <label>Shape</label>
                <input type="text" className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setShape(e.target.value)} value={shape}/>
            </div>
            <div className=" my-4">
                <label>Product Image</label>
                <input type="file" className="mt-1" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button className=" my-6 mx-auto flex px-8 py-2 rounded-md bg-indigo-800 text-white" onClick={addProductSubmitHandler}>{formText}</button>
        </form>
        <button className="py-2 px-12 rounded-md border border-slate-700  mx-auto flex my-5" onClick={() => navigate(-1)}>Back</button>
        </>
    )
}

export default Form;