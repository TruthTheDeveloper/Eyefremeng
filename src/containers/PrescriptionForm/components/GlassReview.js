import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Select from 'react-select';
import Modal from '../../../components/Modal';
import ReviewModal from '../../../components/ReviewModal';
import AllReviews from '../../../components/AllReviews';
const options = [
    { value: 'Excellent', label: 'Excellent' },
    { value: 'Very Good', label: 'Very Good' },
    { value: 'Good', label: 'Good' },
    { value: 'Fair', label: 'Fair' },
    { value: 'Poor', label: 'Poor' },
  ];

const GlassReview = () => {

    const [reviews, setReviews] = useState(false)
    const [openReview, setOpenReview] = useState(false)
    const [loginModal, setLoginModal] = useState(false)

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

    const reviewHandler = () => {
        if(JSON.parse(localStorage.getItem('token'))){
            setOpenReview(true)
        }else{
            setLoginModal(true)
        }

    }

    const submitReview = () => {
        
    }

    const loginModalHandler = () => {
        setLoginModal(prev => !prev)
    }

    const openReviewHandler = () => {
        setOpenReview(prev => !prev)
    }


    return(
        <div className="mx-3 md:mx-16">
            <div className="my-8">
                <button className="py-3 border-2 font-semibold px-5 text-lg rounded-md" onClick={() => setReviews(prev => !prev)}>Reviews</button>
            </div>
            <button className="border py-2 px-2 border-2 rounded-md" onClick={reviewHandler}>Write a review</button>
            <AllReviews reviews={reviews}/>
            <ReviewModal openReview={openReview} openReviewHandler={openReviewHandler}/>
            <Modal loginModal={loginModal} loginModalHandler={loginModalHandler}/>
        </div>

    )

}

export default GlassReview;