import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';//
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';//
import { useNavigate  } from "react-router-dom";

import Collapse from "react-collapsible-wrapper";

const ProgressiveVisionLensForm = ({validateInput, inputValid, incrementQty, decrementQty, qty, lenseType, lenseTypeHandler, data, validateUpdate,productPrice, decrementDataQty, incrementDataQty, inputValidData, dataQty}) => {

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
                <p className="text-sm">Clear (Traditional, transparent lenses perfect for everyday use)</p>
                {/* <a></a> */}
            </button>
            <Collapse isOpen={isOpenClear}>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.56 index form progressive', 8000)}/>
                    <label>
                    (1.56 index form progressive) <span className="text-indigo-800 font-semibold">#8000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.56 index form progressive with Blue Light Blocking for computer screen',17000 )}/>
                    <label>
                    (1.56 index form progressive with Blue Light Blocking for computer screen)  <span className="text-indigo-800 font-semibold">#17000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.61 index form progressive',15000 )}/>
                    <label>
                    (1.61 index form progressive) <span className="text-indigo-800 font-semibold">#15000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.61 index form lenses with Blue Light Blocking for computer screen use', 22000)}/>
                    <label>
                    (1.61 index form lenses with Blue Light Blocking for computer screen use) <span className="text-indigo-800 font-semibold">#22000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.67 index form progressive', 38000)}/>
                    <label>
                    (1.67 index form progressive) <span className="text-indigo-800 font-semibold"> #38000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.67 index form progressive with Blue Light Blocking for computer screen', 45000)}/>
                    <label>
                    (1.67 index form progressive with Blue Light Blocking for computer screen) <span className="text-indigo-800 font-semibold"> #45000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.74 index form progressive', 50000)}/>
                    <label>
                    (1.74 index form progressive)<span className="text-indigo-800 font-semibold">#50000 </span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.74 index form progressive with Blue Light Blocking for computer screen', 54000)}/>
                    <label>
                    (1.74 index form progressive with Blue Light Blocking for computer screen)<span className="text-indigo-800 font-semibold"> #54000</span>
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
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.56 index form progressive photochromic brown', 17000)}/>
                    <label>
                    (1.56 index form progressive photochromic brown)<span className="text-indigo-800 font-semibold">#17000 </span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.56 index form progressive photochromic gray', 17000)}/>
                    <label>
                    (1.56 index form progressive photochromic gray) <span className="text-indigo-800 font-semibold">#17000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.56 index form progressive photochromic with Blue Light Blocking', 23000)}/>
                    <label>
                    (1.56 index form progressive photochromic with Blue Light Blocking)<span className="text-indigo-800 font-semibold"> #23000 </span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.61 index form progressive photochromic brown', 26000)}/>
                    <label>
                    (1.61 index form progressive photochromic brown)<span className="text-indigo-800 font-semibold"> #26000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.61 index form progressive photochromic with Blue Light Blocking', 45000 )}/>
                    <label>
                    (1.61 index form progressive photochromic with Blue Light Blocking)<span className="text-indigo-800 font-semibold">  #45000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.67 index form progressive photochromic', 27000)}/>
                    <label>
                    (1.67 index form progressive photochromic)<span className="text-indigo-800 font-semibold"> #27000</span>
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" name="lense" className="mx-2" onChange={() => lenseTypeHandler('1.67 index form progressive photochromic with Blue Light Blocking',47000)}/>
                    <label>
                    (1.67 index form progressive photochromic with Blue Light Blocking)<span className="text-indigo-800 font-semibold"> #47000</span> 
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

export default ProgressiveVisionLensForm