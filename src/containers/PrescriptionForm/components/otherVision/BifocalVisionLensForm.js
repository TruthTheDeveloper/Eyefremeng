import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';//
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';//
import { useNavigate  } from "react-router-dom";

import Collapse from "react-collapsible-wrapper";
const BifocalVisionLensForm = ({validateInput, inputValid, incrementQty, decrementQty, qty, lenseType, lenseTypeHandler, data, validateUpdate, decrementDataQty, incrementDataQty, inputValidData, dataQty, productPrice}) => {
    const [isOpenClear, setIsOpenClear] = useState(false);
    const [isOpenphotoChromic, setIsOpenphotoChromic] = useState(false);
    const [isOpenphotoPolarized, setIsOpenphotoPolarized] = useState(false);
    const [isOpenAntiReflective, setIsOpenAntiReflective] = useState(false)

    
    const [lenseValidationError, setlenseValidationError] = useState(false)
    
    let navigate = useNavigate();

    // useEffect(() => {

    //     console.log(inputValidData, 'inputvalid')
    //     if(inputValid && lenseType !== ''){
    //         navigate("/cart")
    //     }else if(lenseType === ''){
    //         setlenseValidationError(true)
    //     }


    // },[inputValid, lenseType, navigate,inputValidData ])

    
    
    const clearButtonHandler= (e) => {
        e.preventDefault()
        setIsOpenClear(!isOpenClear)
    }

    const antiReflectiveButtonHandler = (e) => {
        e.preventDefault()
        setIsOpenAntiReflective(!isOpenAntiReflective)
    }


    const photoChromicButtonHandler= (e) => {
        e.preventDefault()
        setIsOpenphotoChromic(!isOpenphotoChromic)
    }


    const polarizedButtonHandler= (e) => {
        e.preventDefault()
        setIsOpenphotoPolarized(!isOpenphotoPolarized)
    }

    const addToCart = (e) => {
        e.preventDefault()
        validateInput()
        console.log(lenseType, inputValid, 'theirvalue')

        if(lenseType === ''){
            console.log('lense field is needed', lenseType)
            setlenseValidationError(true)
        }

        // if(inputValid && lenseType !== ''){
        //     navigate("/cart")
        // }else if(lenseType === ''){
        //     setlenseValidationError(true)
        // }
        
    }

    const updateItem = (e) => {
        e.preventDefault()
        console.log('update')
        


        console.log(inputValid, 'validinput' , lenseType)
        validateUpdate()

        if(lenseType === ''){
            console.log('lense field is needed', lenseType)
            setlenseValidationError(true)
        }
    }


    console.log(data, 'other data')

    return(
        <form className="">
            <div className=" text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
                <div className="flex">
                    <FontAwesomeIcon icon={faCircle} className="text-orange-500 mr-2 text-2xl"/>
                    <p className="text-white text-xl">Lenses</p>
                </div>
                <h1 className="text-white text-xs">All lenses includes Anti-Scratch and Anti-Reflective Coating</h1>
            </div>
            <article>
            <button onClick={clearButtonHandler} className="py-6 mt-2  w-full bg-orange-300 border text-left text-xl pl-3 font-semibold">
                Clear 
                <p className="text-sm">(Traditional, transparent lenses perfect for everyday use) </p>
                {/* <a></a> */}
            </button>
            <Collapse isOpen={isOpenClear}>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('Quality 1.5 index lenses with anti reflective coating (AR)', 7000)}/>
                    <label>
                    Quality 1.5 index lenses with anti reflective coating (AR)  <span className="text-indigo-800 font-semibold">#7000 </span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('Quality 1.59 index lenses with UV protective, anti reflective coating', 12600)}/>
                    <label>
                    Quality 1.59 index lenses with UV protective, anti reflective coating <span className="text-indigo-800 font-semibold">#12600</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('Quality 1.60 index thin lenses with UV-protective, anti-reflective coatings', 22500)}/>
                    <label>
                    Quality 1.60 index thin lenses with UV-protective, anti-reflective coatings<span className="text-indigo-800 font-semibold">#22500</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('Premium 1.6 index thin, features anti-reflective, UV blocking, anti-scratch coating', 22500)}/>
                    <label>
                    Premium 1.6 index thin, features anti-reflective, UV blocking, anti-scratch coating <span className="text-indigo-800 font-semibold">#22500</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('Premium 1.6 index thin, features anti-reflective, UV blocking, anti-scratch coating',45000 )}/>
                    <label>
                    Premium 1.6 index thin, features anti-reflective, UV blocking, anti-scratch coating <span className="text-indigo-800 font-semibold">#45000</span>
                    </label>
                </div>
            </Collapse>
            </article>
            <article>

            <button onClick={photoChromicButtonHandler} className="py-6 mt-2  w-full bg-orange-300 border text-left text-xl pl-3 font-semibold ">
                Photochromic
                <p className="text-sm">(Lenses that got darker when exposed to outside light and remain clear inside)</p>
            </button>
            <Collapse isOpen={isOpenphotoChromic}>
            <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('gray outdoor', 23000)}/>
                    <label>
                        gray outdoor <span className="text-indigo-800 font-semibold">#23000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense"  className="mx-2" onChange={() => lenseTypeHandler('clear indoor',23000)}/>
                    <label>
                    clear indoor <span className="text-indigo-800 font-semibold">#23000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('brown outdoor',23000)}/>
                    <label>
                    brown outdoor <span className="text-indigo-800 font-semibold">#23000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('brown lense', 23000)}/>
                    <label>
                    clear indoor <span className="text-indigo-800 font-semibold">#23000</span>
                    </label>
                </div>
                </Collapse>
            </article>
            {lenseValidationError && <p className="text-red-500 text-sm font-semibold my-2">Please select one of the above field</p>}
            <div className="my-4">
                <p className="my-8 text-2xl font-semibold text-indigo-800">#{productPrice}</p>
                <div className="flex">
                    {data ?
                            <>
                            <button className="border py-1 px-4 lg:text-2xl font-semibold" onClick={decrementDataQty}>-</button>
                            <button className="border border-black py-1 px-4 lg:text-2xl mx-2">{dataQty}</button>
                            <button className="border py-1 px-4 lg:text-2xl font-semibold" onClick={incrementDataQty}>+</button>
                            <button className="flex bg-indigo-800 text-white  py-2 px-4 mx-2" onClick={updateItem}>
                            <FontAwesomeIcon icon={faCartShopping} className="md:mr-2 pt-1 md:pt-0 lg:text-2xl"/>
                            <p>Update Item</p>
                            </button>
                            </>:<><button className="border py-1 px-4 lg:text-2xl font-semibold" onClick={decrementQty}>-</button>
                            <button className="border border-black py-1 px-4 lg:text-2xl mx-2">{qty}</button>
                            <button className="border py-1 px-4 lg:text-2xl font-semibold" onClick={incrementQty}>+</button>
                            <button className="flex bg-indigo-800 text-white  py-2 px-4 mx-2" onClick={addToCart}>
                            <FontAwesomeIcon icon={faCartShopping} className="md:mr-2 pt-1 md:pt-0 lg:text-2xl"/>
                            <p>Add to Cart</p>
                            </button>
                            </>
                    }
                </div>
            </div>
        </form>
    )

}

export default BifocalVisionLensForm