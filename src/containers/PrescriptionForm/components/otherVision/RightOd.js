import Select from 'react-select';

const RightOd = ({
    selectedRightOdOption,
    selectedRightAxisOption,
    selectedRightCylinderOption,
    setSelectedRightAxisOption,
    setSelectedRightOdOption,
    selectedRightADD,
    setSelectedRightADD,

    rightOd,
    setSelectedRightCylinderOption,
    rightCylinder,
    rightAxis,
    rightAdd,
    

    selectedRightOdOptionValidationError,
    selectedRightAxisOptionValidationError,
    selectedRightCylinderOptionValidationError,
    selectedRightADDValidationError
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
                    {selectedRightAxisOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
                </div>
                <div className="mx-2 w-full">
                    <label>Axis</label>
                    <Select
                        placeholder={selectedRightAxisOption || '0.00'}
                        defaultValue={selectedRightAxisOption}
                        onChange={setSelectedRightAxisOption}
                        options={rightAxis}
                    />
                    {selectedRightCylinderOptionValidationError&& <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
                </div>
                <div className="w-full">
                    <label>ADD</label>
                    <Select
                        placeholder={selectedRightADD || "0.00"}
                        defaultValue={selectedRightADD}
                        onChange={setSelectedRightADD}
                        options={rightAdd}
                    />
                    {selectedRightADDValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
                </div>     
            </div>
        )
}

export default RightOd