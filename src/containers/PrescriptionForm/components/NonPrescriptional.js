import React, { useState } from 'react';
import Select from 'react-select';
import { Pd, rightOd, leftOd,  rightAxis, rightCylinder, leftAxis, leftCylinder, usage, RightADD, LeftADD  } from '../options/options';
import DoublePdForm from './DoublePdForm';
import RightOd from './otherVision/RightOd';
import LeftOd from './otherVision/LeftOd';
import LensForm from './LensForm';

const NonPrescriptional = () => {
    const [selectedRightOdOption, setSelectedRightOdOption] = useState(null);
    const [selectedRightAxisOption, setSelectedRightAxisOdOption] = useState(null);
    const [selectedRightCylinderOption, setSelectedRightCylinderOption] = useState(null)


    const [selectedLeftOdOption, setSelectedLeftOdOption] = useState(null);
    const [selectedLeftAxisOption, setSelectedLeftAxisOdOption] = useState(null);
    const [selectedLeftCylinderOption, setSelectedLeftCylinderOption] = useState(null)


    const [pD, setPd] = useState(null)
    const [usageOption, setUsageOption] = useState(null)

    const [selectedRightADD, setSelectedRightADD] = useState(null)

    const [selectedLeftADD, setSelectedLeftADD] = useState(null)

    return(
        <>
        <LensForm/>
        </>
    )

}
export default NonPrescriptional;