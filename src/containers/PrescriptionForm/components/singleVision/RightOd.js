import Select from 'react-select';

const RightOd = ({
    selectedRightOdOption,
    selectedRightAxisOption,
    selectedRightCylinderOption,
    setSelectedRightAxisOption,
    setSelectedRightOdOption,
    rightOd,
    setSelectedRightCylinderOption,
    rightCylinder,
    rightAxis,

    selectedRightOdOptionValidationError,
    selectedRightAxisOptionValidationError,
    selectedRightCylinderOptionValidationError,


    }) => {

        

        return(
            <div className="flex justify-center">
            <div className="w-full">
                <label>Sphere</label>
                <Select
                    placeholder={selectedRightOdOption || '0.00'}
                    defaultValue={selectedRightOdOption}
                    onChange={setSelectedRightOdOption}
                    options={rightOd}
                />
                {selectedRightOdOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="mx-2 w-full">
                <label>Cylinder</label>
                <Select
                    placeholder={selectedRightCylinderOption || '0.00'}
                    defaultValue={selectedRightCylinderOption}
                    onChange={setSelectedRightCylinderOption}
                    options={rightCylinder}
                />
                {selectedRightCylinderOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="w-full">
                <label>Axis</label>
                <Select
                    placeholder={selectedRightAxisOption || '0.00'}
                    defaultValue={selectedRightAxisOption}
                    onChange={setSelectedRightAxisOption}
                    options={rightAxis}
                />
                {selectedRightAxisOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            
        </div>)
}

export default RightOd