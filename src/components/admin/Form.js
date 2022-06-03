import { useNavigate  } from "react-router-dom";
import Select from 'react-select';
import React, { useState } from 'react';


const options = [
    { value: 'Man Cartegory', label: 'Man Cartegory' },
    { value: 'Woman Category', label: 'Woman Category' },
    { value: 'Children Category', label: 'Children Category' },
  ];

const Form = ({formText}) => {

    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    return(

        <>
        <form className="xl:w-4/12 lg:w-5/12 md:w-6/12  mx-auto p-3 border border-slate-400 rounded-md">
            <div className=" my-4 ">
                <label>Product Name</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none p-2"/>
            </div>
            <div className=" my-4">
                <label>Product Price</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none p-2" type="number"/>
            </div>
            <div className=" my-4">
                <label>Select Category</label>
                <Select
                    placeholder={"--- Please Select --"}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div className=" my-4">
                <label>Product Image</label>
                <input type="file" className="mt-1"/>
            </div>
            <button className=" my-6 mx-auto flex px-8 py-2 rounded-md bg-indigo-800 text-white">{formText}</button>
        </form>
        <button className="py-2 px-12 rounded-md border border-slate-700  mx-auto flex my-5" onClick={() => navigate(-1)}>Back</button>
        </>
    )
}

export default Form;