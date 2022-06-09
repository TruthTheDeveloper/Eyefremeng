import React, { useState, useContext } from 'react';
import LensForm from './LensForm';
import AuthContext from '../../../context/auth-context';

const NonPrescriptional = ({productName, productDescription, productPrice}) => {
    
    const {initialState, } = useContext(AuthContext)

    const [inputValid, setInputValid] = useState(false)

    const [qty, setQty] = useState(1)
    const [lenseType, setlensType] = useState('')


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
            id:'',
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

        initialState.items.push(prescription)

    }

    return(
        <>
        <LensForm validateInput={validateInput} inputValid={inputValid} qty={qty} incrementQty={incrementQty} decrementQty={decrementQty} lenseType={lenseType} lenseTypeHandler={lenseTypeHandler}/>
        </>
    )

}
export default NonPrescriptional;