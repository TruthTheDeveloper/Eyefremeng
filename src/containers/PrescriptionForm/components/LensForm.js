import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';//
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';//
import { useNavigate  } from "react-router-dom";

import Collapse from "react-collapsible-wrapper";

const LensForm = () => {
    const [isOpenClear, setIsOpenClear] = useState(false);
    const [isOpenphotoChromic, setIsOpenphotoChromic] = useState(false);
    const [isOpenphotoPolarized, setIsOpenphotoPolarized] = useState(false);
    
    let navigate = useNavigate();
    
    const clearButtonHandler= (e) => {
        e.preventDefault()
        setIsOpenClear(!isOpenClear)
    }


    const photoChromicButtonHandler= (e) => {
        e.preventDefault()
        setIsOpenphotoChromic(!isOpenphotoChromic)
    }


    const polarizedButtonHandler= (e) => {
        e.preventDefault()
        setIsOpenphotoPolarized(!isOpenphotoPolarized)
    }

    const CheckOut = (e) => {
        e.preventDefault()
        navigate("/checkoutForm")
    }

    return(
        <form className="mx-3 md:mx-16">
            <div className=" text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
                <div className="flex">
                    <FontAwesomeIcon icon={faCircle} className="text-orange-500 mr-2 text-2xl"/>
                    <p className="text-white text-xl">Lenses</p>
                </div>
                <h1 className="text-white text-xs">All lenses includes Anti-Scratch and Anti-Reflective Coating</h1>
            </div>
            <article>
            <button onClick={clearButtonHandler} className="py-6 mt-2  w-full bg-orange-300 border text-left text-xl pl-3 font-semibold">
                <a>Clear</a>
                {/* <a></a> */}
            </button>
            <Collapse isOpen={isOpenClear}>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
            </Collapse>
            </article>
            <article>

            <button onClick={photoChromicButtonHandler} className="py-6 mt-2  w-full bg-orange-300 border text-left text-xl pl-3 font-semibold ">PhotoChromic</button>
            <Collapse isOpen={isOpenphotoChromic}>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
            </Collapse>
            </article>

            <article>
            <button onClick={polarizedButtonHandler} className="py-6  mt-2  w-full bg-orange-300 border text-left text-xl pl-3 font-semibold">Polarized</button>
            <Collapse isOpen={isOpenphotoPolarized}>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
                <div className="border-2 py-4">
                    <input type="radio" className="mx-2"/>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, 
                    </label>
                </div>
            </Collapse>
            </article>
            <div className="my-4">
                <p className="my-8 text-2xl font-semibold text-indigo-800">#15,000</p>
                <div className="flex">
                    <button className="border py-1 px-4 lg:text-2xl font-semibold">-</button>
                    <button className="border border-black py-1 px-4 lg:text-2xl mx-2">1</button>
                    <button className="border py-1 px-4 lg:text-2xl font-semibold">+</button>
                    <button className="flex bg-indigo-800 text-white  py-2 px-4 mx-2" onClick={CheckOut}>
                        <FontAwesomeIcon icon={faCartShopping} className="md:mr-2 pt-1 md:pt-0 lg:text-2xl"/>
                        <p>Add to Cart</p>
                    </button>
                </div>
            </div>
        </form>
        )
}

export default LensForm;