import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReviewDataService from '../firebase/services/reviews.services';
import ReviewMessage from './ReviewMessage';
import { TailSpin } from  'react-loader-spinner';
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
        <>{reviews ? allReviews.map((item, index) => {
            return(
                <ReviewMessage
                    key={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    rating={item.rating}
                    review={item.review}
                />
            )
        }) : <div className="mx-auto my-24 flex justify-center"><TailSpin color="#3730A3" height={80} width={80} /></div>}
    </>
    )

}
export default AllReviews;