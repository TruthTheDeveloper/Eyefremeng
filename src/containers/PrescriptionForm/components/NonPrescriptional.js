import React, { useState, useContext, useEffect } from 'react';
import LensForm from './LensForm';
import AuthContext from '../../../context/auth-context';
import {v4} from 'uuid';

import { useNavigate  } from "react-router-dom";

const NonPrescriptional = ({productName, productDescription, productPrice, data}) => {

    let navigate = useNavigate();
    
    const {initialState, setInitialState } = useContext(AuthContext)

    const [inputValid, setInputValid] = useState(false)

    const [qty, setQty] = useState(1)
    const [lenseType, setlensType] = useState('')

    const [dataQty, setDataQty] = useState(data?.qty)
    const [clicked, setClicked] = useState(false)


    useEffect(() => {
        // console.log(data, 'data', data?.twoSinglePd, 'pd-pd' )
        console.log( lenseType, 'navigate')
        if( lenseType !== '' && clicked){
            const remove =   initialState.items.filter(el => el.id !== data?.id)
            console.log(remove, 'remove')
            setInitialState({...initialState, items:remove})
            console.log('navigate')
            navigate("/cart")
        }
        setClicked(false)
        
    },[data?.id, initialState, inputValid, lenseType, navigate, clicked, setInitialState])


    useEffect(() => {
        // console.log(data, 'data', data?.twoSinglePd, 'pd-pd' )
        console.log(inputValid, lenseType, 'navigate')
        if(inputValid && lenseType !== '' && clicked){
            navigate("/cart")
        }
        setClicked(false)
        
    },[inputValid, lenseType, navigate, clicked])


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

    const lenseTypeHandler = (select) => {
        setlensType(select)
    }


    const validateInput = () => {
        const prescription = {
            id:v4(),
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'Non Prescriptional',
            qty:qty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            lenseType:lenseType,
            twoSinglePd:null,

        }
        setInputValid(true)

        if(lenseType !== ''){
            initialState.items.push(prescription)
        }
        setClicked(true)

    }


    const validateUpdate = () => {

        const prescription = {
            id:v4(),
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'Non Prescriptional',
            qty:dataQty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            lenseType:lenseType,
            twoSinglePd:null,

        }
        setInputValid(true)

        if(lenseType !== ''){
            initialState.items.push(prescription)
        }
        setClicked(true)

    }

    const decrementDataQty = (e) => {
        e.preventDefault()
        console.log('decrement')

        if(dataQty > 1){
            setDataQty(prev => prev-1)
        }



    }

    const incrementDataQty = (e) => {
        e.preventDefault()
        console.log('increment')
        
        setDataQty(prev => prev + 1)
    }


    console.log(dataQty, 'data, data')


    return(
        <>
        <LensForm 
                validateInput={validateInput}
                validateUpdate={validateUpdate}
                inputValid={inputValid} 
                qty={qty} 
                incrementQty={incrementQty} 
                decrementQty={decrementQty} 
                lenseType={lenseType} 
                lenseTypeHandler={lenseTypeHandler}
                data={data}
                dataQty={dataQty}
                decrementDataQty={decrementDataQty}
                incrementDataQty={incrementDataQty}
            />
        </>
    )

}
export default NonPrescriptional;