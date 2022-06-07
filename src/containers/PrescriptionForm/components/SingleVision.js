import React, { useState } from 'react';
import Select from 'react-select';
import { Pd,doublePD, rightOd, leftOd,  rightAxis, rightCylinder, leftAxis, leftCylinder, usage, RightADD, LeftADD  } from '../options/options'; 
import RightOd from './singleVision/RightOd';
import LeftOd from './singleVision/LeftOd';
import SinglePdForm from './SinglePdForm';
import DoublePdForm from './DoublePdForm';
import LensForm from './LensForm';
const SingleVision = () => {

    const [selectedRightOdOption, setSelectedRightOdOption] = useState(null);
    const [selectedRightAxisOption, setSelectedRightAxisOdOption] = useState(null);
    const [selectedRightCylinderOption, setSelectedRightCylinderOption] = useState(null)


    const [selectedLeftOdOption, setSelectedLeftOdOption] = useState(null);
    const [selectedLeftAxisOption, setSelectedLeftAxisOdOption] = useState(null);
    const [selectedLeftCylinderOption, setSelectedLeftCylinderOption] = useState(null)


    const [singlePD, setSinglePd] = useState(null)
    const [firstPd, setFirstPd] = useState(null)
    const [secondPd, setSecondPd] = useState(null)
    const [usageOption, setUsageOption] = useState(null)

    const [selectedRightADD, setSelectedRightADD] = useState(null)

    const [selectedLeftADD, setSelectedLeftADD] = useState(null)

    const [twoSinglePD, setTwoSinglePd] = useState(false)

    return(
        <>
            <div className="my-4">
                <div className="px-3 border-2 py-3">
                    <p className="text-red-500 text-xs">*Please pay attention to the signs of the values, positive(+) and negative(-) values, positive(+) and negative(-) values are different</p>
                </div>
                <div className="px-3 border-2 py-3">
                    <div className="my-4">
                        <h1>Right(OD)</h1>
                    </div>
                    <RightOd selectedRightOdOption={selectedRightOdOption}
                        selectedRightAxisOption={selectedRightAxisOption}
                        selectedRightCylinderOption={selectedRightCylinderOption}
                        setSelectedRightAxisOdOption={setSelectedRightAxisOdOption}
                        setSelectedRightOdOption={setSelectedRightOdOption}
                        rightOd={rightOd}
                        setSelectedRightCylinderOption={setSelectedRightCylinderOption}
                        rightCylinder={rightCylinder}
                        rightAxis={rightAxis}
                        rightADD={RightADD}
                        selectedRightADD={selectedRightADD}
                        setSelectedRightADD={setSelectedRightADD}

                        />
                </div>
                <div className="px-3 border-2 py-3">
                    <div className="my-4">
                        <h1>Left(OD)</h1>
                    </div>
                    <LeftOd selectedLeftOdOption={selectedLeftOdOption}
                        selectedLeftAxisOption={selectedLeftAxisOption}
                        selectedLeftCylinderOption={selectedLeftCylinderOption}
                        setSelectedLeftAxisOdOption={setSelectedLeftAxisOdOption}
                        setSelectedLeftOdOption={setSelectedLeftOdOption}
                        leftOd={leftOd}
                        setSelectedLeftCylinderOption={setSelectedLeftCylinderOption}
                        leftCylinder={leftCylinder}
                        leftAxis={leftAxis}
                        leftADD={LeftADD}
                        selectedLeftADD={selectedLeftADD}
                        setSelectedLeftADD={setSelectedLeftADD}
                        
                        />
                </div>
                <div className="px-3 border-2 py-3">
                    <label>PD*</label>
                    {twoSinglePD ? <DoublePdForm firstPd={firstPd} secondPd={secondPd} setFirstPd={setFirstPd} setSecondPd={setSecondPd} options={doublePD} /> : <SinglePdForm defaultValue={singlePD} options={Pd} onChange={setSinglePd}/>}
                    {/* <DoublePdForm defaultValue={pD} options={Pd} onChange={setPd}/> */}
                    
                </div>
                <div className="px-3 border-2 py-3">
                    <div className="px-3 border-2 py-3">
                        <div className="flex  border-b-2 py-3">
                            <input type="checkbox" className="m-2" onChange={() => setTwoSinglePd(prev => !prev)}/>
                            <label>i have 2 single PDS</label>
                        </div>
                    </div>
                </div>
                <div className="px-3 border-2 py-3">
                    <label>Usage*</label>
                    <div>
                        <Select
                            placeholder={"--- Please Select ---"}
                            defaultValue={usageOption}
                            onChange={setUsageOption}
                            options={usage}
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
            <LensForm/>
        </>
    )

}
export default SingleVision;