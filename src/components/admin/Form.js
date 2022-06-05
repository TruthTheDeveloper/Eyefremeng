import { useNavigate  } from "react-router-dom";
import Select from 'react-select';
import React, { useState } from 'react';
import ProductDataService from '../../firebase/services/product.services';
import { uploadAFile } from "../../firebase/utils/uploadFile";




const options = [
    { value: 'Men Cartegory', label: 'Men Cartegory' },
    { value: 'Women Category', label: 'Women Category' },
    { value: 'Children Category', label: 'Children Category' },
  ];

const Form = ({formText}) => {

    const navigate = useNavigate();

    const [category, setCategory] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [image, setImage] = useState(null);



    const addProductSubmitHandler = async(e) => {
        e.preventDefault();
        // console.log(productName, productPrice, image, category)
        const file = await uploadAFile(image) 

       
        if(productName === '' || productPrice === null || image === null || category === null){
            return;
        }

        console.log(file, '----')

        const newProduct = {
            productName,
            productPrice,
            image:file,
            category
        }

        console.log(newProduct)

        try{

                console.log('file')
                await ProductDataService.addProduct(newProduct)
        }catch(err){
            console.log(err)
        }

        setCategory('')
        setProductName('')
        setProductPrice('')
        setImage()
        
    }
    
    return(

        <>
        <form className="xl:w-4/12 lg:w-5/12 md:w-6/12  mx-auto p-3 border border-slate-400 rounded-md">
            <div className=" my-4 ">
                <label>Product Name</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" onChange={(e) => setProductName(e.target.value)} value={productName}/>
            </div>
            <div className=" my-4">
                <label>Product Price</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" type="number" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
            </div>
            <div className=" my-4">
                <label>Select Category</label>
                <Select
                    placeholder={"--- Please Select --"}
                    defaultValue={category}
                    onChange={setCategory}
                    options={options}
                />
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