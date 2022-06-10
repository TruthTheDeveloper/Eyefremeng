import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
import AuthContext from '../../../context/auth-context';
const FramesOnly = ({productName, productDescription, productPrice}) => {
    let navigate = useNavigate();

    const {initialState, } = useContext(AuthContext)

    const [qty, setQty] = useState(1)

    const CheckOut = (e) => {
        e.preventDefault()
        navigate("/cart")

        const prescription = {
            id:'',
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'FramesOnly',
            qty:qty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            singlePd:false,
            twoSinglePd:null

        }

        initialState.items.push(prescription)
    }


    const incrementQty = (e) => {
        e.preventDefault()
        setQty(prev => prev + 1)

    }

    const decrementQty = (e) => {
        e.preventDefault()

        if(qty > 1){
            setQty(prev => prev-1)
        }

    }
    
    return(
        <div className="my-4">
                <p className="my-8 text-2xl font-semibold text-indigo-800">#15,000</p>
                <div className="flex">
                    <button className="border py-1 px-4 lg:text-2xl font-semibold">-</button>
                    <button className="border border-black py-1 px-4 lg:text-2xl mx-2"onClick={decrementQty}>1</button>
                    <button className="border py-1 px-4 lg:text-2xl font-semibold"onClick={incrementQty}>+</button>
                    <button className="flex bg-indigo-800 text-white  py-2 px-4 mx-2" onClick={CheckOut}>
                        <FontAwesomeIcon icon={faCartShopping} className="md:mr-2 pt-1 md:pt-0 lg:text-2xl"/>
                        <p>Add to Cart</p>
                    </button>
                </div>
            </div>
    )

}

export default FramesOnly;