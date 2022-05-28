import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';// <-- import styles to be used

const options = [
    { value: 'Single Vision', label: 'Single Vision' },
    { value: 'Bifocal(with line)', label: 'Bifocal(with line)' },
    { value: 'Progressive', label: 'Progressive' },
    { value: 'Non Prescription', label: 'Non Prescription' },
    { value: 'Frames Only', label: 'Frames Only' },
  ];


const Form = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    return(
        <form className="mx-3 md:mx-16">
            <div className="flex text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
                <FontAwesomeIcon icon={faEdit} className="text-orange-400 mr-2 text-2xl"/>
                <h1 className="text-white">Add a Prescription</h1>
            </div>
            <div className="px-3 border-2 py-3">
                <Select
                    placeholder={"--- Please Select --"}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div className="my-4">
                <div className="px-3 border-2 py-3">
                    <p className="text-red-500 text-xs">*Please pay attention to the signs of the values, positive(+) and negative(-) values, positive(+) and negative(-) values are different</p>
                </div>
                <div className="px-3 border-2 py-3">
                    <div className="my-4">
                        <h1>Right(OD)</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full">
                            <label>Sphere</label>
                            <Select
                                placeholder={"0.00"}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                        <div className="mx-2 w-full">
                            <label>Cylinder</label>
                            <Select
                                placeholder={"0.00"}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                        <div className="w-full">
                            <label>Axis</label>
                            <Select
                                placeholder={"0.00"}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-3 border-2 py-3">
                    <div className="my-4">
                        <h1>Left(OD)</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full">
                            <label>Sphere</label>
                            <Select
                                placeholder={"0.00"}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                        <div className="mx-2 w-full">
                            <label>Cylinder</label>
                            <Select
                                placeholder={"0.00"}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                        <div className="w-full">
                            <label>Axis</label>
                            <Select
                                placeholder={"0.00"}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-3 border-2 py-3">
                    <label>PD*</label>
                    <div>
                        <Select
                            placeholder={"--- Please Select ---"}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                </div>
                <div className="px-3 border-2 py-3">
                    <div className="px-3 border-2 py-3">
                        <div className="flex  border-b-2 py-3">
                            <input type="checkbox" className="m-2"/>
                            <label>i have 2 single PDS</label>
                        </div>
                        <div className="flex border-t-2 border-b-2 py-3">
                            <input type="checkbox" className="m-2"/>
                            <label>i have Prism <span className="text-red-500">+#3000</span></label>
                        </div>
                    </div>
                </div>
                <div className="px-3 border-2 py-3">
                    <label>Usage*</label>
                    <div>
                        <Select
                            placeholder={"--- Please Select ---"}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                    <div className="my-8">
                        <label className="">Remark*</label>
                        <textarea className="h-24 w-full border-2 border-slate-400 outline-none my-2 rounded-sm p-2"/>
                    </div>
                </div>
                <div className="px-3 border-2 py-3">
                    <label>Prescription Paper(Optional)</label><br/>
                    <input type="file" className="my-3"/>
                    <p className="text-red-500 text-xs">Supported File Types:jpeg, jpeg, .gif, png, pdf</p>
                    <p className="text-red-500 text-xs">Max file size:16M</p>
                    <p className="text-xs my-2">Although it's optional, we highly suggest you uploading the prescription paper for double checking.</p>
                    <button className="my-6 border-2  py-2 px-6  rounded">
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Form;

