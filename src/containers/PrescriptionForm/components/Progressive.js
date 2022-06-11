import React, { useState,  useContext } from 'react';

import LensForm from './LensForm';
import AuthContext from '../../../context/auth-context';
import MiniCartDetailAdd from './MiniCartAddDetail';
import {v4} from 'uuid';
import PrescriptionDetailForm from './otherVision/PrescriptionDetailForm';

const Progressive = ({productName, productDescription, productPrice, data}) => {
    const {initialState, setInitialState} = useContext(AuthContext)
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

    const [selectedRightADD, setSelectedRightADD] = useState({value:null})
    const [selectedRightADDValidationError, setSelectedRightADDValidationError] = useState(false)

    const [selectedLeftADD, setSelectedLeftADD] = useState({value:null})
    const [selectedLeftADDValidationError, setSelectedLeftADDValidationError] = useState(false)

    const [twoSinglePD, setTwoSinglePd] = useState(false)

    const [inputValid, setInputValid] = useState(false)
    const [qty, setQty] = useState(1)

    const [lenseType, setlensType] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [remark, setRemark] = useState('')



        //////////////UPDATE////////////////////////

        const [selectedDataRightOdOption, setSelectedDataRightOdOption] = useState({value:data?.rightOD.sphere || null});
        const [selectedDataRightOdOptionValidationError, setSelectedDataRightOdOptionValidationError] = useState(false)
    
        const [selectedDataRightAxisOption, setSelectedDataRightAxisOption] = useState({value:data?.rightOD.axis || null});
        const [selectedDataRightAxisOptionValidationError, setSelectedDataRightAxisOptionValidationError] = useState(false);
    
    
        const [selectedDataRightCylinderOption, setSelectedDataRightCylinderOption] = useState({value:data?.rightOD.cylinder || null})
        const [selectedDataRightCylinderOptionValidationError, setSelectedDataRightCylinderOptionValidationError] = useState(false)
    
    
        const [selectedDataLeftOdOption, setSelectedDataLeftOdOption] = useState({value:data?.leftOD.sphere || null});
        const [selectedDataLeftOdOptionValidationError, setSelectedDataLeftOdOptionValidationError] = useState(false);
    
    
    
        const [selectedDataLeftAxisOption, setSelectedDataLeftAxisOdOption] = useState({value:data?.leftOD.axis || null});
        const [selectedDataLeftAxisOptionValidationError, setSelectedDataLeftAxisOdOptionValidationError] = useState(false);
    
    
        const [selectedDataLeftCylinderOption, setSelectedDataLeftCylinderOption] = useState({value:data?.leftOD.cylinder || null})
        const [selectedDataLeftCylinderOptioValidationError, setSelectedDataLeftCylinderOptionValidationError] = useState(false)
        
    
        const [singlePDData, setSinglePdData] = useState({value:data?.pD.singleDataPD || null})
        const [singlePDDataValidationError, setSinglePdDataValidationError] = useState(false)
    
        const [firstPdData, setFirstPdData] = useState({value:data?.pD || null})
        const [firstPdDataValidationError, setFirstPdDataValidationError] = useState(false)
    
        const [secondPdData, setSecondPdData] = useState({value:data?.pD || null})
        const [secondPdDataValidationError, setSecondPdDataValidationError] = useState(false)
    
        const [usageOptionData, setUsageOptionData] = useState({value:data?.usageOption || null})
        const [usageOptionDataValidationError, setUsageOptionDataValidationError] = useState(false)
    
        const [remarkData, setRemarkData] = useState({value:data?.remarkData || null})
    
        const [selectedDataRightADD, setSelectedDataRightADD] = useState({value:null})
        const [selectedDataRightADDValidationError, setSelectedDataRightADDValidationError] = useState(false)
    
        const [selectedDataLeftADD, setSelectedDataLeftADD] = useState({value:null})
        const [selectedDataLeftADDValidationError, setSelectedDataLeftADDValidationError] = useState(false)



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
            add:selectedRightADD.value
            },
            leftOD:{
            sphere:selectedLeftAxisOption.value,
            cylinder:selectedLeftCylinderOption.value,
            axis:selectedLeftAxisOption.value,
            add:selectedLeftADD.value
            },
            pD:{
            first:firstPd.value,
            second:secondPd.value
            },
            usageOption:usageOption.value,
            qty:qty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'double',
            twoSinglePd:twoSinglePD,
            lenseType:lenseType,
            Add:true

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
            prescriptionType:'Progressive',
            rightOD:{
            sphere:selectedRightOdOption.value,
            cylinder:selectedRightCylinderOption.value,
            axis:selectedRightAxisOption.value,
            add:selectedRightADD.value
            },
            leftOD:{
            sphere:selectedLeftAxisOption.value,
            cylinder:selectedLeftCylinderOption.value,
            axis:selectedLeftAxisOption.value,
            add:selectedLeftADD.value
            },
            pD:singlePD.value,
            usageOption:usageOption.value,
            qty:qty,
            unitPrice:'',
            amount:'',
            subTotal:'',
            grandTotal:'',
            pdType:'single',
            twoSinglePd:twoSinglePD,
            lenseType:lenseType,
            Add:true,

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
        selectedRightADD.value === null && setSelectedRightADDValidationError(true)
        selectedLeftADD.value === null && setSelectedLeftADDValidationError(true)

        
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
            && setInputValid(true)
            
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


    const updateToCartTwoPD = () => {

        const prescription = {
            id:v4(),
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'Single Vision',
            rightOD:{
            sphere:selectedDataRightOdOption.value,
            cylinder:selectedDataRightCylinderOption.value,
            axis:selectedDataRightAxisOption.value,
            add:''
            },
            leftOD:{
            sphere:selectedDataLeftAxisOption.value,
            cylinder:selectedDataLeftCylinderOption.value,
            axis:selectedDataLeftAxisOption.value,
            add:''
            },
            pD:{
                first:firstPdData.value,
                second:secondPdData.value
            },
            usageOption:usageOptionData.value,
            qty:qty,
            unitPrice:'',
            amount:'',
            subTotal:'',
            grandTotal:'',
            pdType:'double',
            twoSinglePd:twoSinglePD,
            lenseType:lenseType,
            Add:false,
            remark:remark

        }

        setInputValid(true)
        const remove =   initialState.items.filter(el => el.id !== data.id)
        console.log(remove, 'remove')
        setInitialState({...initialState, items:remove})

        initialState.items.push(prescription)

        

    }

    const updateToCartOnePD = () => {

        const prescription = {
            id:v4(),
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
            prescriptionType:'Single Vision',
            rightOD:{
            sphere:selectedDataRightOdOption.value,
            cylinder:selectedDataRightCylinderOption.value,
            axis:selectedDataRightAxisOption.value,
            add:''
            },
            leftOD:{
            sphere:selectedDataLeftAxisOption.value,
            cylinder:selectedDataLeftCylinderOption.value,
            axis:selectedDataLeftAxisOption.value,
            add:''
            },
            pD:singlePDData.value,
            doublePd:'',
            usageOption:usageOptionData.value,
            qty:qty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            Add:false,
            lenseType:lenseType,
            remark:remark,

        }

        setInputValid(true)
        const remove =   initialState.items.filter(el => el.id !== data.id)
        console.log(remove, 'remove')
        setInitialState({...initialState, items:remove})

        initialState.items.push(prescription)
        
    }



    const validateUpdate = () => {
        selectedDataRightOdOption.value === null && setSelectedRightOdOptionValidationError(true)
        selectedDataRightAxisOption.value === null && setSelectedRightAxisOptionValidationError(true)
        selectedDataRightCylinderOption.value === null && setSelectedRightCylinderOptionValidationError(true)
        selectedDataLeftOdOption.value === null && setSelectedLeftOdOptionValidationError(true)
        selectedDataLeftAxisOption.value === null && setSelectedLeftAxisOdOptionValidationError(true)
        selectedDataLeftCylinderOption.value === null && setSelectedLeftCylinderOptionValidationError(true)
        singlePDData.value === null && setSinglePdValidationError(true)
        firstPdData.value === null && setFirstPdValidationError(true)
        secondPdData.value === null && setSecondPdValidationError(true)
        usageOptionData.value === null && setUsageOptionValidationError(true)
        selectedDataRightADD.value === null && setSelectedRightADDValidationError(true)
        selectedDataLeftADD.value === null && setSelectedLeftADDValidationError(true)


        console.log(twoSinglePD)
        if(twoSinglePD === true){
            selectedDataRightOdOption.value !== null
            && selectedDataRightAxisOption.value !== null
            && selectedDataRightCylinderOption.value !== null
            && selectedDataLeftOdOption.value !== null
            && selectedDataLeftAxisOption.value !== null
            && selectedDataLeftCylinderOption.value !== null
            && selectedDataRightADD.value !== null
            && selectedDataLeftADD.value !== null
            && firstPdData.value !== null
            && secondPdData.value !== null
            && usageOptionData.value !== null
            && updateToCartTwoPD()
            
        }else{
            selectedDataRightOdOption.value !== null
            && selectedDataRightAxisOption.value !== null
            && selectedDataRightCylinderOption.value !== null
            && selectedDataLeftOdOption.value !== null
            && selectedDataLeftAxisOption.value !== null
            && selectedDataLeftCylinderOption.value !== null
            && selectedDataRightADD.value !== null
            && selectedDataLeftADD.value !== null
            && singlePDData.value !== null
            && usageOptionData.value !== null
            && updateToCartOnePD()
            
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

    selectedRightADD={selectedRightADD.value}
    selectedRightADDValidationError={selectedRightADDValidationError}

    setSelectedRightADD={setSelectedRightADD}

    selectedLeftADD={selectedLeftADD.value}
    setSelectedLeftADD={setSelectedLeftADD}
    selectedLeftADDValidationError={selectedLeftADDValidationError}

    usageOption={usageOption.value}
    setUsageOption={setUsageOption}
    usageOptionValidationError={usageOptionValidationError}

    remark={remark}
    setRemrk={setRemark}

    />


    if(data){
        prescriptionFormSummary = <PrescriptionDetailForm
        selectedRightOdOption={selectedDataRightOdOption.value}
        selectedRightOdOptionValidationError={selectedRightOdOptionValidationError}
    
        selectedRightAxisOption={selectedDataRightAxisOption.value}
        selectedRightAxisOptionValidationError={selectedRightAxisOptionValidationError}
    
        selectedRightCylinderOption={selectedDataRightCylinderOption.value}
        selectedRightCylinderOptionValidationError={selectedRightCylinderOptionValidationError}
    
        setSelectedRightAxisOption={setSelectedDataRightAxisOption}
        setSelectedRightOdOption={setSelectedDataRightOdOption}
        setSelectedRightCylinderOption={setSelectedDataRightCylinderOption}
    
        selectedLeftOdOption={selectedDataLeftOdOption.value}
        selectedLeftOdOptionValidationError={selectedLeftOdOptionValidationError}

        selectedLeftAxisOption={selectedDataLeftAxisOption.value}
        selectedLeftAxisOptionValidationError={selectedLeftAxisOptionValidationError}
    
        selectedLeftCylinderOption={selectedDataLeftCylinderOption.value}
        selectedLeftCylinderOptioValidationError={selectedLeftCylinderOptioValidationError}

    
        setSelectedLeftAxisOdOption={setSelectedDataLeftAxisOdOption}
        setSelectedLeftOdOption={setSelectedDataLeftOdOption}
        
        setSelectedLeftCylinderOption={setSelectedDataLeftCylinderOption}
    
        singlePD={singlePDData.value}
        singlePDValidationError={singlePDValidationError}
        setSinglePd={setSinglePd}
    
        secondPd={secondPdData.value.secondPd}
        setSecondPd={setSecondPdData}
        secondPdValidationError={secondPdValidationError}
    
        twoSinglePD={twoSinglePD}
        setTwoSinglePd={setTwoSinglePd}
    
        firstPd={firstPdData.value.firstPd}
        setFirstPd={setFirstPdData}
        firstPdValidationError={firstPdValidationError}
    
        selectedRightADD={selectedDataRightADD.value}
        selectedRightADDValidationError={selectedRightADDValidationError}
    
        setSelectedRightADD={setSelectedDataRightADD}
    
        selectedLeftADD={selectedDataLeftADD.value}
        setSelectedLeftADD={setSelectedDataLeftADD}
        selectedLeftADDValidationError={selectedLeftADDValidationError}
    
        usageOption={usageOptionData.value}
        setUsageOption={setUsageOptionData}
        usageOptionValidationError={usageOptionValidationError}
        remark={remarkData.value}
        setRemark={setRemarkData}
    
        
        
        />
    }





    if(confirmed){
        if(twoSinglePD === true){
                console.log('got')
                prescriptionFormSummary = <MiniCartDetailAdd
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
            prescriptionFormSummary = <MiniCartDetailAdd
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
            data={data}
            validateUpdate={validateUpdate}
        />
        </>
    )

}
export default Progressive;