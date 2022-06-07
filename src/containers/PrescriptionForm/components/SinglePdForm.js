import Select from 'react-select';
const SinglePdForm = ({defaultValue, onChange, options}) => {

        return(
            <div className="">
                <Select
                    placeholder={"--- Please Select ---"}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    options={options}
                />
            </div>
        )
}

export default SinglePdForm