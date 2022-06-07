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
    leftAxis
}) => {

    return(
        <div className="flex justify-center">
            <div className="w-full">
                <label>Sphere</label>
                <Select
                    placeholder={"0.00"}
                    defaultValue={selectedLeftOdOption}
                    onChange={setSelectedLeftOdOption}
                    options={leftOd}
                />
            </div>
            <div className="mx-2 w-full">
                <label>Cylinder</label>
                <Select
                    placeholder={"0.00"}
                    defaultValue={selectedLeftCylinderOption}
                    onChange={setSelectedLeftCylinderOption}
                    options={leftCylinder}
                />
            </div>
            <div className="w-full">
                <label>Axis</label>
                <Select
                    placeholder={"0.00"}
                    defaultValue={selectedLeftAxisOption}
                    onChange={setSelectedLeftAxisOdOption}
                    options={leftAxis}
                />
            </div>
        </div>
    )

}

export default LeftOd