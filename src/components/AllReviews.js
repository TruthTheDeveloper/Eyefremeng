import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReviewDataService from '../firebase/services/reviews.services';
import ReviewMessage from './ReviewMessage';
import { TailSpin } from  'react-loader-spinner';
const AllReviews = ({reviews, relatedProductClick}) => {

    const [allReviews, setAllReviews] = useState([])
    const [loadData, setLoadData] = useState([1])

    useEffect(() => {
        console.log('rev')
        getProductReviews()
        console.log(loadData.length, 'length')
    },[reviews, relatedProductClick])


    const getProductReviews = async  () => {
        const data = await ReviewDataService.getReview(JSON.parse(localStorage.getItem('id')))
        setLoadData(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
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
        {reviews && allReviews.length === 0 && loadData.length >= 1 && <div className="mx-auto my-24 flex justify-center"><TailSpin color="#3730A3" height={80} width={80} /></div>}
        {reviews && loadData.length === 0 && <h1 className="text-2xl font-semibold">No Reviews</h1>}
    </>
    )

}
export default AllReviews;