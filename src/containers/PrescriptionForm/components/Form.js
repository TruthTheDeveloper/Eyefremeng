import React, { useState } from 'react';
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




const Form = () => {
    const [selectedPrescriptionOption, setSelectedPrescriptionOption] = useState({value:null});
    
    let formDetail = null


    if(selectedPrescriptionOption.value === 'Single Vision'){
        formDetail = <SingleVision/>
    }else if(selectedPrescriptionOption.value === 'Bifocal(with line)'){
        formDetail = <Bifocal/>
    }else if(selectedPrescriptionOption.value === 'Progressive'){
        formDetail = <Progressive/>
    }else if(selectedPrescriptionOption.value === 'Non Prescription'){
        formDetail = <NonPrescriptional/>

    }else if(selectedPrescriptionOption.value === 'Frames Only'){
        formDetail= <FramesOnly/>
    }
    
    
    return(
        <form className="mx-3 md:mx-16">
            <div className="flex text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
                <FontAwesomeIcon icon={faEdit} className="text-orange-400 mr-2 text-2xl"/>
                <h1 className="text-white">Add a Prescription</h1>
            </div>
            <div className="px-3 border-2 py-3">
                <Select
                    placeholder={"--- Please Select --"}
                    defaultValue={selectedPrescriptionOption.value}
                    onChange={setSelectedPrescriptionOption}
                    options={category}
                />
            </div>
            {formDetail}
            
        </form>
    )
}
export default Form;

