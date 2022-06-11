import Select from 'react-select';
const LeftOd = ({
    selectedLeftOdOption,
    setSelectedLeftAxisOdOption,
    setSelectedLeftCylinderOption,
    setSelectedLeftOdOption,
    selectedLeftCylinderOption,
    selectedLeftAxisOption,
    leftOd,
    leftCylinder,
    leftAxis,

    selectedLeftOdOptionValidationError,
    selectedLeftAxisOptionValidationError,
    selectedLeftCylinderOptioValidationError

}) => {

    return(
        <div className="flex justify-center">
            <div className="w-full">
                <label>Sphere</label>
                <Select
                    placeholder={selectedLeftOdOption || "0.00"}
                    defaultValue={selectedLeftOdOption}
                    onChange={setSelectedLeftOdOption}
                    options={leftOd}
                />
                {selectedLeftOdOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="mx-2 w-full">
                <label>Cylinder</label>
                <Select
                    placeholder={selectedLeftCylinderOption || "0.00"}
                    defaultValue={selectedLeftCylinderOption}
                    onChange={setSelectedLeftCylinderOption}
                    options={leftCylinder}
                />
                {selectedLeftAxisOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="w-full">
                <label>Axis</label>
                <Select
                    placeholder={selectedLeftAxisOption || "0.00"}
                    defaultValue={selectedLeftAxisOption}
                    onChange={setSelectedLeftAxisOdOption}
                    options={leftAxis}
                />
                {selectedLeftCylinderOptioValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
        </div>
    )

}

export default LeftOd