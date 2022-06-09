import Select from 'react-select';

const SinglePdForm = ({
    singlePD,
    onChange,
    options,
    singlePDValidationError
}) => {

        return(
            <div className="">
                <Select
                    placeholder={"--- Please Select ---"}
                    defaultValue={singlePD}
                    onChange={onChange}
                    options={options}
                />
                {singlePDValidationError && <p className="text-red-500 text-xs my-2 font-semibold">This field is required</p>}
            </div>
        )
}

export default SinglePdForm