import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReviewDataService from '../firebase/services/reviews.services';
import ReviewMessage from './ReviewMessage';
const AllReviews = ({reviews}) => {

    const [allReviews, setAllReviews] = useState('')

    useEffect(() => {
        console.log('rev')
        getProductReviews()
    },[])


    const getProductReviews = async  () => {
        const data = await ReviewDataService.getReview(JSON.parse(localStorage.getItem('id')))
        console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})), 'revies')
        setAllReviews(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    

    

    return(
        <>{reviews && allReviews.map((item, index) => {
            return(
                <ReviewMessage
                    key={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    rating={item.rating}
                    review={item.review}
                />
            )
        })}
    </>
    )

}
export default AllReviews;