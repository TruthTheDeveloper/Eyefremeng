import Select from 'react-select';
import { useEffect } from 'react';


const DoublePdForm = ({
        firstPd, 
        secondPd, 
        setFirstPd,
        setSecondPd,
        options,
        firstPdValidationError,
        secondPdValidationError
    }) => {



        const firstValueHandler = (e) => {
            setFirstPd({...firstPd, value:{first:e.value}})

        }

        const secondValueHandler = (e) => {
            setSecondPd({...secondPd, value:{second:e.value}})
        }
        
    return(
        <div className="md:flex justify-between">
            <div className="w-64">
                <Select
                    placeholder={firstPd || "--- Please Select ---"}
                    defaultValue={firstPd}
                    onChange={firstValueHandler}
                    options={options}
                />
                {firstPdValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
            <div className="w-64">
                <Select
                    placeholder={secondPd || "--- Please Select ---"}
                    defaultValue={secondPd}
                    onChange={secondValueHandler}
                    options={options}
                />
                {secondPdValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
        </div>
    )
}

export default DoublePdForm