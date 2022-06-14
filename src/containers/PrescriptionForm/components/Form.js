import React, { useEffect, useState, useContext} from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';// <-- import styles to be used
import { category } from '../options/options'; 
import DoublePdForm from './DoublePdForm';
import SinglePdForm from './SinglePdForm';
// import RightOd from './singleVision/RightOd';
// import LeftOd from './singleVision/LeftOd';

import RightOd from './otherVision/RightOd';
import LeftOd from './otherVision/LeftOd';
import SingleVision from './SingleVision';
import Bifocal from './Bifocal';
import Progressive from './Progressive';
import NonPrescriptional from './NonPrescriptional';
import FramesOnly from './FramesOnly';

import { useParams  } from "react-router-dom";

import AuthContext from '../../../context/auth-context';




const Form = ({productName, productDescription, productPrice}) => {

    const {initialState, setInitialState} = useContext(AuthContext)

    let {formId} = useParams()

    let formEditDetail = null

    const remove =   initialState.items.filter(el => el.id === formId)
        formEditDetail = remove


        // console.log(initialState.items[0].id, 'formId', formId)

    // useEffect(() => {
        

    //   console.log(remove, 'remove')
    // },[])


    const [selectedPrescriptionOption, setSelectedPrescriptionOption] = useState({value:null});
    
    let formDetail = null


    console.log(formEditDetail[0]?.prescriptionType, 'edit')
    


    if(selectedPrescriptionOption.value === 'Single Vision'){
        formDetail = <SingleVision productName={productName} productDescription={productDescription} productPrice={productPrice}/>
        
         
    }else if(selectedPrescriptionOption.value === 'Bifocal(with line)'){
        formDetail = <Bifocal productName={productName} productDescription={productDescription} productPrice={productPrice}/>
        
    }else if(selectedPrescriptionOption.value === 'Progressive'){
        formDetail = <Progressive productName={productName} productDescription={productDescription} productPrice={productPrice}/>
        
    }else if(selectedPrescriptionOption.value === 'Non Prescription'){
        formDetail = <NonPrescriptional productName={productName} productDescription={productDescription} productPrice={productPrice}/>
        

    }else if(selectedPrescriptionOption.value === 'Frames Only'){
        formDetail = <FramesOnly/>

    }else if(formEditDetail[0]?.prescriptionType === 'Single Vision'){
        formDetail = <SingleVision productName={productName} productDescription={productDescription} productPrice={productPrice} data={formEditDetail[0]}/>

    }else if(formEditDetail[0]?.prescriptionType === 'Bifocal(with line)'){
        formDetail = <Bifocal productName={productName} productDescription={productDescription} productPrice={productPrice} data={formEditDetail[0]}/>

    }else if(formEditDetail[0]?.prescriptionType === 'Progressive'){
        formDetail = <Progressive productName={productName} productDescription={productDescription} productPrice={productPrice} data={formEditDetail[0]}/>

    }else if(formEditDetail[0]?.prescriptionType === 'Non Prescriptional'){
        
        formDetail = <NonPrescriptional productName={productName} productDescription={productDescription} productPrice={productPrice} data={formEditDetail[0]}/>
    }else if(formEditDetail[0]?.prescriptionType === 'Frames Only'){
        formDetail = <FramesOnly/>
    }
    
    
    return(
        <div className="mx-3 md:mx-16">
            <div className="flex text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
                <FontAwesomeIcon icon={faEdit} className="text-orange-400 mr-2 text-2xl"/>
                <h1 className="text-white">Add a Prescription</h1>
            </div>
            {formEditDetail ? <div className="px-3 border-2 py-3">
                <Select
                    placeholder={formEditDetail[0]?.prescriptionType}
                    defaultValue={formEditDetail[0]?.prescriptionType}
                    onChange={setSelectedPrescriptionOption}
                    options={category}
                />
            </div>:<div className="px-3 border-2 py-3">
                <Select
                    placeholder={"--- Please Select --"}
                    defaultValue={selectedPrescriptionOption.value}
                    onChange={setSelectedPrescriptionOption}
                    options={category}
                />
            </div>}
            {formDetail}
            
        </div>
    )
}
export default Form;

