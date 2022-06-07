import Select from 'react-select';


const DoublePdForm = ({firstPd, secondPd, setFirstPd, setSecondPd, options}) => {

    return(
        <div className="md:flex justify-between">
            <div className="w-64">
                <Select
                    placeholder={"--- Please Select ---"}
                    defaultValue={firstPd}
                    onChange={setFirstPd}
                    options={options}
                />
            </div>
            <div className="w-64">
                <Select
                    placeholder={"--- Please Select ---"}
                    defaultValue={secondPd}
                    onChange={setSecondPd}
                    options={options}
                />
            </div>
        </div>
    )
}

export default DoublePdForm