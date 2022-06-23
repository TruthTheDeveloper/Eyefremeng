import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import Modal from '../../../components/Modal';
import ReviewModal from '../../../components/ReviewModal';
import AllReviews from '../../../components/AllReviews';
import UserDataService from '../../../firebase/services/auth.services';

const options = [
    { value: 'Excellent', label: 'Excellent' },
    { value: 'Very Good', label: 'Very Good' },
    { value: 'Good', label: 'Good' },
    { value: 'Fair', label: 'Fair' },
    { value: 'Poor', label: 'Poor' },
  ];

const GlassReview = ({relatedProductClick}) => {

    const [reviews, setReviews] = useState(false)
    const [openReview, setOpenReview] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        if(relatedProductClick && reviews){
            setReviews(prev => !prev)
        }
    },[relatedProductClick])


    const reviewHandler = async () => {
        if(localStorage.getItem('token')){
            setOpenReview(true)
           const userData = await UserDataService.getUser(JSON.parse(localStorage.getItem('uid')))
           console.log(userData.data(), 'data------')
           setFirstName(userData.data().firstName)
           setLastName(userData.data().lastName)
            

        }else{
            setLoginModal(true)
        }

    }

    const backdropHandler = () => {
        setLoginModal(prev => !prev)
    }


    const loginModalHandler = () => {
        setLoginModal(prev => !prev)
    }

    const openReviewHandler = () => {
        setOpenReview(prev => !prev)
    }

    const showReview = () => {
        
        setReviews(prev => !prev)
        
    }


    return(
        <div className="mx-3 md:mx-16">
            <div className="my-8">
                <button className="py-3 border-2 font-semibold px-5 text-lg rounded-md" onClick={showReview}>Reviews</button>
            </div>
            <button className="border py-2 px-2 border-2 rounded-md" onClick={reviewHandler}>Write a review</button>
            <AllReviews reviews={reviews} />
            <ReviewModal firstName={firstName} lastName={lastName} openReview={openReview} openReviewHandler={openReviewHandler}/>
            <Modal backdropHandler={backdropHandler}  loginModal={loginModal} loginModalHandler={loginModalHandler}/>
        </div>

    )

}

export default GlassReview;