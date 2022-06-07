import Select from 'react-select';

const RightOd = ({
    selectedRightOdOption,
    selectedRightAxisOption,
    selectedRightCylinderOption,
    setSelectedRightAxisOdOption,
    setSelectedRightOdOption,
    rightOd,
    setSelectedRightCylinderOption,
    leftCylinder,
    rightAxis
    }) => {

        return(
            <div className="flex justify-center">
                <div className="w-full">
                    <label>Sphere</label>
                    <Select
                        placeholder={"0.00"}
                        defaultValue={selectedRightOdOption}
                        onChange={setSelectedRightOdOption}
                        options={rightOd}
                    />
                </div>
                <div className="mx-2 w-full">
                    <label>Cylinder</label>
                    <Select
                        placeholder={"0.00"}
                        defaultValue={selectedRightCylinderOption}
                        onChange={setSelectedRightCylinderOption}
                        options={leftCylinder}
                    />
                </div>
                <div className="mx-2 w-full">
                    <label>Axis</label>
                    <Select
                        placeholder={"0.00"}
                        defaultValue={selectedRightAxisOption}
                        onChange={setSelectedRightAxisOdOption}
                        options={rightAxis}
                    />
                </div>
                <div className="w-full">
                    <label>ADD</label>
                    <Select
                        placeholder={"0.00"}
                        defaultValue={selectedRightAxisOption}
                        onChange={setSelectedRightAxisOdOption}
                        options={rightAxis}
                    />
                </div>     
            </div>
        )
}

export default RightOd