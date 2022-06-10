import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import { Pd,doublePD, rightOd, leftOd,  rightAxis, rightCylinder, leftAxis, leftCylinder, usage, RightADD, LeftADD  } from '../options/options'; 
import RightOd from './singleVision/RightOd';
import LeftOd from './singleVision/LeftOd';
import SinglePdForm from './SinglePdForm';
import DoublePdForm from './DoublePdForm';
import LensForm from './LensForm';
import AuthContext from '../../../context/auth-context';
import MiniCartDetailPd from './MiniCartDetailPd';

import PrescriptionDetailForm from './singleVision/PrescriptionDetailForm';
import {v4} from 'uuid'




const SingleVision = ({productName, productDescription, productPrice, data}) => {

    const {initialState, } = useContext(AuthContext)

    // const {product, } = useContext(AuthContext)

    const [selectedRightOdOption, setSelectedRightOdOption] = useState({value:null});
    const [selectedRightOdOptionValidationError, setSelectedRightOdOptionValidationError] = useState(false)

    const [selectedRightAxisOption, setSelectedRightAxisOption] = useState({value:null});
    const [selectedRightAxisOptionValidationError, setSelectedRightAxisOptionValidationError] = useState(false);


    const [selectedRightCylinderOption, setSelectedRightCylinderOption] = useState({value:null})
    const [selectedRightCylinderOptionValidationError, setSelectedRightCylinderOptionValidationError] = useState(false)


    const [selectedLeftOdOption, setSelectedLeftOdOption] = useState({value:null});
    const [selectedLeftOdOptionValidationError, setSelectedLeftOdOptionValidationError] = useState(false);



    const [selectedLeftAxisOption, setSelectedLeftAxisOdOption] = useState({value:null});
    const [selectedLeftAxisOptionValidationError, setSelectedLeftAxisOdOptionValidationError] = useState(false);


    const [selectedLeftCylinderOption, setSelectedLeftCylinderOption] = useState({value:null})
    const [selectedLeftCylinderOptioValidationError, setSelectedLeftCylinderOptionValidationError] = useState(false)
    

    const [singlePD, setSinglePd] = useState({value:null})
    const [singlePDValidationError, setSinglePdValidationError] = useState(false)

    const [firstPd, setFirstPd] = useState({value:null})
    const [firstPdValidationError, setFirstPdValidationError] = useState(false)

    const [secondPd, setSecondPd] = useState({value:null})
    const [secondPdValidationError, setSecondPdValidationError] = useState(false)


    const [usageOption, setUsageOption] = useState({value:null})
    const [usageOptionValidationError, setUsageOptionValidationError] = useState(false)



    const [twoSinglePD, setTwoSinglePd] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    const [qty, setQty] = useState(1)

    const [lenseType, setlensType] = useState('')


    const [confirmed, setConfirmed] = useState(false)



    useEffect(() => {
        console.log(initialState, inputValid)
        console.log(productName, productDescription, productPrice)
    },[initialState,  inputValid])



    const addToCartTwoPD = () => {
        const prescription = {
            id:v4(),
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'Single Vision',
            rightOD:{
            sphere:selectedRightOdOption.value,
            cylinder:selectedRightCylinderOption.value,
            axis:selectedRightAxisOption.value,
            add:''
            },
            leftOD:{
            sphere:selectedLeftAxisOption.value,
            cylinder:selectedLeftCylinderOption.value,
            axis:selectedLeftAxisOption.value,
            add:''
            },
            pD:{
                first:firstPd.value,
                second:secondPd.value
            },
            usageOption:usageOption.value,
            qty:qty,
            unitPrice:'',
            amount:'',
            subTotal:'',
            grandTotal:'',
            pdType:'double',
            twoSinglePd:twoSinglePD,
            lenseType:lenseType,
            Add:false

        }

        setInputValid(true)

        initialState.items.push(prescription)

    }


    const addToCartOnePD = () => {
        const prescription = {
            id:v4(),
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'Single Vision',
            rightOD:{
            sphere:selectedRightOdOption.value,
            cylinder:selectedRightCylinderOption.value,
            axis:selectedRightAxisOption.value,
            add:''
            },
            leftOD:{
            sphere:selectedLeftAxisOption.value,
            cylinder:selectedLeftCylinderOption.value,
            axis:selectedLeftAxisOption.value,
            add:''
            },
            pD:singlePD.value,
            doublePd:'',
            usageOption:usageOption.value,
            qty:qty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            Add:false,
            lenseType:lenseType

        }
         setInputValid(true)

        initialState.items.push(prescription)

    }
        


    const validateInput = () => {
        selectedRightOdOption.value === null && setSelectedRightOdOptionValidationError(true)
        selectedRightAxisOption.value === null && setSelectedRightAxisOptionValidationError(true)
        selectedRightCylinderOption.value === null && setSelectedRightCylinderOptionValidationError(true)
        selectedLeftOdOption.value === null && setSelectedLeftOdOptionValidationError(true)
        selectedLeftAxisOption.value === null && setSelectedLeftAxisOdOptionValidationError(true)
        selectedLeftCylinderOption.value === null && setSelectedLeftCylinderOptionValidationError(true)
        singlePD.value === null && setSinglePdValidationError(true)
        firstPd.value === null && setFirstPdValidationError(true)
        secondPd.value === null && setSecondPdValidationError(true)
        usageOption.value === null && setUsageOptionValidationError(true)


        console.log(twoSinglePD)
        if(twoSinglePD === true){
            selectedRightOdOption.value !== null
            && selectedRightAxisOption.value !== null
            && selectedRightCylinderOption.value !== null
            && selectedLeftOdOption.value !== null
            && selectedLeftAxisOption.value !== null
            && selectedLeftCylinderOption.value !== null
            && firstPd.value !== null
            && secondPd.value !== null
            && usageOption.value !== null
            && addToCartTwoPD()
            
        }else{
            selectedRightOdOption.value !== null
            && selectedRightAxisOption.value !== null
            && selectedRightCylinderOption.value !== null
            && selectedLeftOdOption.value !== null
            && selectedLeftAxisOption.value !== null
            && selectedLeftCylinderOption.value !== null
            && singlePD.value !== null
            && usageOption.value !== null
            && addToCartOnePD()
            
        }

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

    const lenseTypeHandler = (select) => {
        setlensType(select)
    }


    const confirmedHandler = () => {
        console.log('clicked')
        setConfirmed(false)
    }
    



    let prescriptionFormSummary = <PrescriptionDetailForm
                selectedRightOdOption={selectedRightOdOption.value}
                selectedRightOdOptionValidationError={selectedRightOdOptionValidationError}

                selectedRightAxisOption={selectedRightAxisOption.value}
                selectedRightAxisOptionValidationError={selectedRightAxisOptionValidationError}

                selectedRightCylinderOption={selectedRightCylinderOption.value}
                selectedRightCylinderOptionValidationError={selectedRightCylinderOptionValidationError}

                setSelectedRightAxisOption={setSelectedRightAxisOption}
                setSelectedRightOdOption={setSelectedRightOdOption}
                setSelectedRightCylinderOption={setSelectedRightCylinderOption}

                selectedLeftOdOption={selectedLeftOdOption.value}
                selectedLeftOdOptionValidationError={selectedLeftOdOptionValidationError}

                selectedLeftAxisOption={selectedLeftAxisOption.value}
                selectedLeftAxisOptionValidationError={selectedLeftAxisOptionValidationError}

                selectedLeftCylinderOption={selectedLeftCylinderOption.value}
                selectedLeftCylinderOptioValidationError={selectedLeftCylinderOptioValidationError}

                setSelectedLeftAxisOdOption={setSelectedLeftAxisOdOption}
                setSelectedLeftOdOption={setSelectedLeftOdOption}
                
                setSelectedLeftCylinderOption={setSelectedLeftCylinderOption}

                singlePD={singlePD.value}
                singlePDValidationError={singlePDValidationError}
                setSinglePd={setSinglePd}

                secondPd={secondPd.value}
                setSecondPd={setSecondPd}
                secondPdValidationError={secondPdValidationError}

                twoSinglePD={twoSinglePD}
                setTwoSinglePd={setTwoSinglePd}

                firstPd={firstPd.value}
                setFirstPd={setFirstPd}
                firstPdValidationError={firstPdValidationError}
                usageOption={usageOption.value}
                setUsageOption={setUsageOption}
                usageOptionValidationError={usageOptionValidationError}
                // leftADD={''}
                // rightAdd={''}

                
                
    />




    if(confirmed){
        if(twoSinglePD === true){
                console.log('got')
                prescriptionFormSummary = <MiniCartDetailPd
                    pdType={'double'} 
                    leftSphere={selectedLeftAxisOption.value}
                    leftAxis={selectedLeftAxisOption.value}
                    leftCylinder={selectedLeftCylinderOption.value}
                    leftAdd={''}
                    
                    rightSphere={selectedRightOdOption.value}
                    rightCylinder={selectedRightCylinderOption.value}
                    rightAxis={selectedRightAxisOption.value}
                    rightAdd={''}
                    pD={''}
                    firstPd={firstPd.value}
                    secondPd={secondPd.value}
                    setConfirm={confirmedHandler}
                    />
        }else{
            prescriptionFormSummary = <MiniCartDetailPd
                pdType={'single'} 
                leftSphere={selectedLeftAxisOption.value}
                leftAxis={selectedLeftAxisOption.value}
                leftCylinder={selectedLeftCylinderOption.value}
                leftAdd={''}
                
                rightSphere={selectedRightOdOption.value}
                rightCylinder={selectedRightCylinderOption.value}
                rightAxis={selectedRightAxisOption.value}
                rightAdd={''}
                pD={singlePD.value}
                setConfirm={confirmedHandler}
                />
        }


    }


    const prescriptionSummary = (e) => {
        e.preventDefault()

        console.log('prescription', twoSinglePD)

       setConfirmed(true)
        
        
    }



    return(
        <>
            {prescriptionFormSummary}

            <div className="px-3 border-2 py-3">
                <label>Prescription Paper(Optional)</label><br/>
                <input type="file" className="my-3"/>
                <p className="text-red-500 text-xs">Supported File Types:jpeg, jpeg, .gif, png, pdf</p>
                <p className="text-red-500 text-xs">Max file size:16M</p>
                <p className="text-xs my-2">Although it's optional, we highly suggest you uploading the prescription paper for double checking.</p>
                <button className="my-6 border-2  py-2 px-6  rounded" onClick={(e) => prescriptionSummary(e)}>
                    Confirm
                </button>
            </div>

            <LensForm 
                validateInput={validateInput} 
                inputValid={inputValid} 
                qty={qty} 
                incrementQty={incrementQty} 
                decrementQty={decrementQty} 
                lenseType={lenseType} 
                lenseTypeHandler={lenseTypeHandler}
            />
        </>
    )

}
export default SingleVision;