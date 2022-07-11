import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
import AuthContext from '../../../context/auth-context';
import {v4} from 'uuid';
import { formatToCurrency,  formatPriceToNumber  } from '../../../utilities/priceFormatter';

const FramesOnly = ({productImage,productName, productDescription, productPrice, data}) => {
    let navigate = useNavigate();

    const {initialState, setInitialState } = useContext(AuthContext)

    const [qty, setQty] = useState(1)
    const [dataQty, setDataQty] = useState(data?.qty)
    const [clicked, setClicked] = useState(false)
    const [updateClicked, setUpdateClicked] = useState(false)
    const [totalPrice, setTotalPrice] = useState(productPrice)
    const [unitPrice, setUnitPrice] = useState(totalPrice)

    console.log(productPrice)

    useEffect(() => {
        setTotalPrice(formatPriceToNumber(productPrice))
    },[])





    useEffect(() => {
        // console.log(data, 'data', data?.twoSinglePd, 'pd-pd' )
        if(clicked){
            navigate("/cart")
        }
        setClicked(false)
        
    },[clicked, navigate])

    useEffect(() => {
        // console.log(data, 'data', data?.twoSinglePd, 'pd-pd' )

        if(updateClicked){
            const remove =   initialState.items.filter(el => el.id !== data?.id)
            console.log(remove, 'remove')
            setInitialState({...initialState, items:remove})
            console.log('navigate')
            navigate("/cart")

            // if(remove){
            //     
            // }
            
        }
        setUpdateClicked(false)
        
    },[data?.id, initialState, navigate, setInitialState, updateClicked])


    useEffect(() => {
        setUnitPrice(totalPrice)

    },[totalPrice])


    const addToCart = (e) => {
        e.preventDefault()

        const prescription = {
            id:v4(),
            productImage:productImage,
            productName:productName,
            productDescription:productDescription,
            productPrice:totalPrice,
            prescriptionType:'Frames Only',
            qty:qty,
            unitPrice:unitPrice,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            singlePd:false,
            twoSinglePd:null,

        }

        initialState.items.push(prescription)
        setClicked(true)
    }


    const updateCart = (e) => {

        e.preventDefault()

        const prescription = {
            id:v4(),
            productImage:productImage,
            productName:productName,
            productDescription:productDescription,
            productPrice:totalPrice,
            prescriptionType:'Frames Only',
            qty:dataQty,
            unitPrice:unitPrice,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            singlePd:false,
            twoSinglePd:null

        }

        initialState.items.push(prescription)

        setUpdateClicked(true)
    }


    const incrementQty = (e) => {
        e.preventDefault()
        setQty(prev => prev + 1)
        setTotalPrice(prev => prev * 2)

    }

    const decrementQty = (e) => {
        e.preventDefault()

        if(qty > 1){
            setQty(prev => prev-1)
            setTotalPrice(prev => prev / 2)
        }

    }

    const incrementDataQty = (e) => {
        e.preventDefault()
        console.log('increment')
        
        setDataQty(prev => prev + 1)
        setTotalPrice(prev => prev * 2)
    }


    const decrementDataQty = (e) => {
        e.preventDefault()
        console.log('decrement')

        if(dataQty > 1){
            setDataQty(prev => prev-1)
            setTotalPrice(prev => prev / 2)
        }

    }


    return(
        <div className="my-4">
                <p className="my-8 text-2xl font-semibold text-indigo-800">₦{formatToCurrency(totalPrice)}</p>
                <div className="flex">
                {data ?
                            <>
                            <button className="border py-1 px-4 lg:text-2xl font-semibold" onClick={decrementDataQty}>-</button>
                            <button className="border border-black py-1 px-4 lg:text-2xl mx-2">{dataQty}</button>
                            <button className="border py-1 px-4 lg:text-2xl font-semibold" onClick={incrementDataQty}>+</button>
                            <button className="flex bg-indigo-800 text-white  py-2 px-4 mx-2" onClick={updateCart}>
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
    )

}

export default FramesOnly;