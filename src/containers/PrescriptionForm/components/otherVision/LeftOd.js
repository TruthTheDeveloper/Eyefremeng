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
    leftADD,
    selectedLeftADD,
    setSelectedLeftADD,

    selectedLeftOdOptionValidationError,
    selectedLeftAxisOptionValidationError,
    selectedLeftCylinderOptioValidationError,
    selectedLeftADDValidationError,
}) => {

    console.log(selectedLeftADD, 'feftadd')

    return(
        <div className="md:flex justify-center">
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
            <div className="md:mx-2 my-1 md:my-0 w-full">
                <label>Cylinder</label>
                <Select
                    placeholder={selectedLeftCylinderOption || "0.00"}
                    defaultValue={selectedLeftCylinderOption}
                    onChange={setSelectedLeftCylinderOption}
                    options={leftCylinder}
                />
                {selectedLeftAxisOptionValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="md:mx-2 my-1 md:my-0 w-full">
                <label>Axis</label>
                <Select
                    placeholder={selectedLeftAxisOption || "0.00"}
                    defaultValue={selectedLeftAxisOption}
                    onChange={setSelectedLeftAxisOdOption}
                    options={leftAxis}
                />
                {selectedLeftCylinderOptioValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="w-full">
                <label>ADD</label>
                <Select
                    placeholder={selectedLeftADD || "0.00"}
                    defaultValue={selectedLeftADD}
                    onChange={setSelectedLeftADD}
                    options={leftADD}
                />
                {selectedLeftADDValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
        </div>
    )

}

export default LeftOd