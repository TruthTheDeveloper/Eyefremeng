import Select from 'react-select';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const options = [
    { value: 'Excellent', label: 'Excellent' },
    { value: 'Very Good', label: 'Very Good' },
    { value: 'Good', label: 'Good' },
    { value: 'Fair', label: 'Fair' },
    { value: 'Poor', label: 'Poor' },
  ];
const ReviewModal = ({openReview, openReviewHandler}) => {

    const [category, setCategory] = useState(null);

    let rating = <div>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
    </div>

    if(category?.value === 'Excellent'){
        rating = <div>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        </div>
    }else if(category?.value === 'Very Good'){
        rating = <div>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
            <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        </div>
    }else if(category?.value === 'Good'){
        rating = <div>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
    </div>
    }else if(category?.value === 'Fair'){
        rating = <div>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
    </div>
    }else if(category?.value === 'Poor'){
        rating = <div>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"/>
    </div>
    }

    const submit = () => {
        
    }

    

    return(
        <>{openReview && <section className=" fixed top-0 left-0 h-screen w-full z-50 overflow-y-hidden" style={{backgroundColor:'rgba(0, 0, 0, 0.774)'}}>
        <form className="bg-white w-96 mx-auto mt-44 p-5 rounded-md relative">
            <h1 className="text-slate-700 my-2 text-xl font-semibold">Overall Rating</h1>
            <FontAwesomeIcon icon={faClose} className="md:mr-2 text-gray-500 font-bold pt-1 md:pt-0 lg:text-2xl cursor-pointer absolute top-0 right-0 mt-2" onClick={openReviewHandler}/>
            {rating}
            <div className="my-3 ">
                <label>Your Review</label><br/>
                <input className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300"/>
            </div>
            <div className="my-3 ">
            <label>Rate</label><br/>
                <div className=" w-full h-10  outline-none my-2 rounded-md border-slate-300">
                <Select
                    placeholder={"--- Please Select --"}
                    defaultValue={category}
                    onChange={setCategory}
                    options={options}
                />
                </div>
            </div>
            <div className="my-3">
                <label>Review</label><br/>
                <textarea className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300 h-12"/>
            </div>
            <div className="my-3">
                <button className="bg-indigo-800  text-white w-full text-lg py-2 rounded-md" onClick={submit}>Submit Review</button>
            </div>
        </form>
    </section>}</>
    )

}
export default ReviewModal;