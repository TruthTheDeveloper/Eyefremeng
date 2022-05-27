import React, { useState } from 'react';
import Select from 'react-select';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


const Form = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    return(
        <form>
            <div>
                <h1>Add a Prescription</h1>
            </div>
            <div>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            </div>
        </form>
    )
}
export default Form;

