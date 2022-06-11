import Select from 'react-select';


const DoublePdForm = ({
        firstPd, 
        secondPd, 
        setFirstPd,
        setSecondPd,
        options,
        firstPdValidationError,
        secondPdValidationError
    }) => {

    return(
        <div className="md:flex justify-between">
            <div className="w-64">
                <Select
                    placeholder={firstPd || "--- Please Select ---"}
                    defaultValue={firstPd}
                    onChange={setFirstPd}
                    options={options}
                />
                {firstPdValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="w-64">
                <Select
                    placeholder={secondPd || "--- Please Select ---"}
                    defaultValue={secondPd}
                    onChange={setSecondPd}
                    options={options}
                />
                {secondPdValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
        </div>
    )
}

export default DoublePdForm