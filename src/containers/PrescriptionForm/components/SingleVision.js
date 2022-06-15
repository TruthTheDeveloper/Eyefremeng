import React, { useState, useContext, useEffect } from 'react';
import LensForm from './LensForm';
import AuthContext from '../../../context/auth-context';
import MiniCartDetailPd from './MiniCartDetailPd';
import { uploadAFile } from '../../../firebase/utils/uploadFile';

import PrescriptionDetailForm from './singleVision/PrescriptionDetailForm';
import {v4} from 'uuid';

import { useNavigate  } from "react-router-dom";




const SingleVision = ({productName, productDescription, productPrice, data}) => {

    let navigate = useNavigate();

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

    const [firstPd, setFirstPd] = useState({value:{first:null}})
    const [firstPdValidationError, setFirstPdValidationError] = useState(false)

    const [secondPd, setSecondPd] = useState({value:{second:null}})
    const [secondPdValidationError, setSecondPdValidationError] = useState(false)


    const [usageOption, setUsageOption] = useState({value:null})
    const [usageOptionValidationError, setUsageOptionValidationError] = useState(false)

    const [remark, setRemark] = useState('')



    const [twoSinglePD, setTwoSinglePd] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    const [qty, setQty] = useState(1)

    const [lenseType, setlensType] = useState('')

    const [confirmed, setConfirmed] = useState(false)

    const [image, setImage] = useState(null)

    const [clicked, setClicked] = useState(false)

    //////////////UPDATE////////////////////////

    const [selectedDataRightOdOption, setSelectedDataRightOdOption] = useState({value:data?.rightOD.sphere || null});

    const [selectedDataRightAxisOption, setSelectedDataRightAxisOption] = useState({value:data?.rightOD.axis || null});

    const [selectedDataRightCylinderOption, setSelectedDataRightCylinderOption] = useState({value:data?.rightOD.cylinder || null})

    const [selectedDataLeftOdOption, setSelectedDataLeftOdOption] = useState({value:data?.leftOD.sphere || null});

    const [selectedDataLeftAxisOption, setSelectedDataLeftAxisOdOption] = useState({value:data?.leftOD.axis || null});

    const [selectedDataLeftCylinderOption, setSelectedDataLeftCylinderOption] = useState({value:data?.leftOD.cylinder || null})

    const [singlePDData, setSinglePdData] = useState({value:data?.pD || null})

    const [firstPdData, setFirstPdData] = useState({value:data?.pDD || null})

    const [secondPdData, setSecondPdData] = useState({value:data?.pDD || null})

    const [usageOptionData, setUsageOptionData] = useState({value:data?.usageOption || null})

    const [remarkData, setRemarkData] = useState({value:data?.remark || ''})

    const [twoSinglePDData, setTwoSinglePdData] = useState(data?.twoSinglePd)

    const [dataQty, setDataQty] = useState(data?.qty)

    const [inputValidData, setInputValidData] = useState(false)


    useEffect(() => {
        // console.log(data, 'data', data?.twoSinglePd, 'pd-pd' )
        console.log(inputValidData, lenseType, 'navigate')
        if(inputValidData && lenseType !== '' && clicked){
            const remove =   initialState.items.filter(el => el.id !== data?.id)
            console.log(remove, 'remove')
            setInitialState({...initialState, items:remove})
            console.log('navigate')
            navigate("/cart")
        }
        setClicked(false)
        
    },[data?.id, initialState, inputValid, inputValidData, lenseType, navigate, setInitialState, clicked])



    useEffect(() => {
        // console.log(data, 'data', data?.twoSinglePd, 'pd-pd' )
        console.log(inputValid, lenseType, 'navigate')
        if(inputValid && lenseType !== '' && clicked){
            navigate("/cart")
        }
        setClicked(false)
        
    },[inputValid, lenseType, navigate, clicked])




    const addToCartTwoPD = async () => {
        console.log('two single pd')
        const file = image ? await uploadAFile(image) : null 
        
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
            sphere:selectedLeftOdOption.value,
            cylinder:selectedLeftCylinderOption.value,
            axis:selectedLeftAxisOption.value,
            add:''
            },
            pDD:{
                first:firstPd.value.first,
                second:secondPd.value.second
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
            Add:false,
            remark:remark,
            file:file

        }

        setInputValid(true)

        if(lenseType !== ''){
            initialState.items.push(prescription)
        }
        setClicked(true)
        
        

    }


    const addToCartOnePD = async () => {
        console.log('one single pd')

        const file = image ? await uploadAFile(image) : null 

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
            sphere:selectedLeftOdOption.value,
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
            lenseType:lenseType,
            remark:remark,
            twoSinglePd:twoSinglePD,
            file:file

        }
         setInputValid(true)

         if(lenseType !== ''){
            initialState.items.push(prescription)
        }
        setClicked(true)

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
            console.log('two')
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
            console.log('one')
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


    const updateToCartTwoPD = async () => {
        console.log('update two double pd')

        const file = image ? await uploadAFile(image) : null

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
            sphere:selectedDataLeftOdOption.value,
            cylinder:selectedDataLeftCylinderOption.value,
            axis:selectedDataLeftAxisOption.value,
            add:''
            },
            pDD:{
                first:firstPdData.value.first,
                second:secondPdData.value.second
            },
            usageOption:usageOptionData.value,
            qty:dataQty,
            unitPrice:'',
            amount:'',
            subTotal:'',
            grandTotal:'',
            pdType:'double',
            twoSinglePd:twoSinglePDData,
            lenseType:lenseType,
            Add:false,
            remark:remark,
            file:file

        }

        setInputValidData(true)
        initialState.items.push(prescription)
        setClicked(true)



        // const remove =   initialState.items.filter(el => el.id !== data?.id)
        // console.log(remove, 'remove')
        // setInitialState({...initialState, items:remove})
        

    }


    const updateToCartOnePD = async () => {
        console.log('update one single pd')

        const file = image ? await uploadAFile(image) : null 
         
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
            sphere:selectedDataLeftOdOption.value,
            cylinder:selectedDataLeftCylinderOption.value,
            axis:selectedDataLeftAxisOption.value,
            add:''
            },
            pD:singlePDData.value,
            doublePd:'',
            usageOption:usageOptionData.value,
            qty:dataQty,
            unitPrice:5000,
            amount:15000,
            subTotal:15000,
            grandTotal:15000,
            pdType:'single',
            Add:false,
            lenseType:lenseType,
            remark:remark,
            twoSinglePd:twoSinglePDData,
            file:file

        }

        setInputValidData(true)

        initialState.items.push(prescription)
        setClicked(true)
        
        

        
        

        
        
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


        console.log(twoSinglePD)
        if(twoSinglePDData === true){
            console.log('update two pd was true')
            selectedDataRightOdOption.value !== null
            && selectedDataRightAxisOption.value !== null
            && selectedDataRightCylinderOption.value !== null
            && selectedDataLeftOdOption.value !== null
            && selectedDataLeftAxisOption.value !== null
            && selectedDataLeftCylinderOption.value !== null
            && firstPdData.value !== null
            && secondPdData.value !== null
            && usageOptionData.value !== null
            && updateToCartTwoPD()
            
        }else{
            console.log('update one pd has false')
            selectedDataRightOdOption.value !== null
            && selectedDataRightAxisOption.value !== null
            && selectedDataRightCylinderOption.value !== null
            && selectedDataLeftOdOption.value !== null
            && selectedDataLeftAxisOption.value !== null
            && selectedDataLeftCylinderOption.value !== null
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

                secondPd={secondPd?.value?.second}
                setSecondPd={setSecondPd}
                secondPdValidationError={secondPdValidationError}

                twoSinglePD={twoSinglePD}
                setTwoSinglePd={setTwoSinglePd}
                

                firstPd={firstPd?.value?.first}
                setFirstPd={setFirstPd}
                firstPdValidationError={firstPdValidationError}
                usageOption={usageOption.value}
                setUsageOption={setUsageOption}
                usageOptionValidationError={usageOptionValidationError}
                remark={remark}
                setRemark={setRemark}
                // leftADD={''}
                // rightAdd={''}

                
                
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
                setSinglePd={setSinglePdData}

                secondPd={secondPdData?.value?.second}
                setSecondPd={setSecondPdData}
                secondPdValidationError={secondPdValidationError}

                twoSinglePD={twoSinglePDData}
                setTwoSinglePd={setTwoSinglePdData}

                firstPd={firstPdData?.value?.first}
                setFirstPd={setFirstPdData}
                firstPdValidationError={firstPdValidationError}

                usageOption={usageOptionData.value}
                setUsageOption={setUsageOptionData}
                usageOptionValidationError={usageOptionValidationError}
                remark={remarkData.value}
                setRemark={setRemarkData}
                
                // leftADD={''}
                // rightAdd={''}  
                
    />
    }


    console.log(confirmed && data, 'confirmed && data')

    if(confirmed && data){
        if(twoSinglePDData === true){
                console.log('got')
                prescriptionFormSummary = <MiniCartDetailPd
                    pdType={'double'} 
                    leftSphere={selectedDataLeftAxisOption.value}
                    leftAxis={selectedDataLeftAxisOption.value}
                    leftCylinder={selectedDataLeftCylinderOption.value}
                    leftAdd={''}
                    
                    rightSphere={selectedDataRightOdOption.value}
                    rightCylinder={selectedDataRightCylinderOption.value}
                    rightAxis={selectedDataRightAxisOption.value}
                    rightAdd={''}
                    pD={''}
                    firstPd={firstPdData.value.first}
                    secondPd={secondPdData.value.second}
                    setConfirm={confirmedHandler}
                    />
        }else{
            prescriptionFormSummary = <MiniCartDetailPd
                pdType={'single'} 
                leftSphere={selectedDataLeftAxisOption.value}
                leftAxis={selectedDataLeftAxisOption.value}
                leftCylinder={selectedDataLeftCylinderOption.value}
                leftAdd={''}
                
                rightSphere={selectedDataRightOdOption.value}
                rightCylinder={selectedDataRightCylinderOption.value}
                rightAxis={selectedDataRightAxisOption.value}
                rightAdd={''}
                pD={singlePDData.value}
                setConfirm={confirmedHandler}
                />
        }


    }else if(confirmed){

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
                firstPd={firstPd.value.first}
                secondPd={secondPd.value.second}
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

    const decrementDataQty = (e) => {
        e.preventDefault()
         

        if(dataQty > 1){
            setDataQty(prev => prev-1)
        }



    }

    const incrementDataQty = (e) => {
        e.preventDefault()
        setDataQty(prev => prev + 1)
    }



    return(
        <>
            {prescriptionFormSummary}

            <div className="px-3 border-2 py-3">
                <label>Prescription Paper(Optional)</label><br/>
                <input type="file" className="my-3" onChange={(e) => setImage(e.target.files[0])}/>
                <p className="text-red-500 text-xs">Supported File Types:jpeg, jpeg, .gif, png, pdf</p>
                <p className="text-red-500 text-xs">Max file size:16M</p>
                <p className="text-xs my-2">Although it's optional, we highly suggest you uploading the prescription paper for double checking.</p>
                <button className="my-6 border-2  py-2 px-6  rounded" onClick={(e) => prescriptionSummary(e)}>
                    Confirm
                </button>
            </div>

            {confirmed && <LensForm 
                validateInput={validateInput} 
                inputValid={inputValid} 
                qty={qty} 
                incrementQty={incrementQty} 
                decrementQty={decrementQty} 
                lenseType={lenseType} 
                lenseTypeHandler={lenseTypeHandler}
                data={data}
                dataQty={dataQty}
                validateUpdate={validateUpdate}
                decrementDataQty={decrementDataQty}
                incrementDataQty={incrementDataQty}
                inputValidData={inputValidData}
            />}
        </>
    )

}
export default SingleVision;