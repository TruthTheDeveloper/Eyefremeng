import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const GlassReview = () => {

    const [reviews, setReviews] = useState(false)


    return(
        <div className="mx-3 md:mx-16">
            <div className="my-8">
                <button className="py-3 border-2 font-semibold px-5 text-lg rounded-md" onClick={() => setReviews(prev => !prev)}>Reviews</button>
            </div>
            <button className="border py-2 px-2 border-2 rounded-md">Write a review</button>
            {reviews && <>
                <div className="my-5">
                    <div>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <span className="mx-2">Excellent</span>
                    </div>
                    <div>
                        <p>As my first time ordering my glasses online i am very happy with my purchase. Thanks tendaglasses, pleasure doing business with you. Outstanding. I will be telling everybody to go here if they want new glasses.</p>

                        <p className="text-slate-500 text-sm my-3 font-semibold">Micheal-</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <span className="mx-2">Very good</span>
                    </div>
                    <div>
                        <p>As my first time ordering my glasses online i am very happy with my purchase. Thanks tendaglasses, pleasure doing business with you. Outstanding. I will be telling everybody to go here if they want new glasses.</p>

                        <p className="text-slate-500 text-sm my-3 font-semibold">Micheal-</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <span className="mx-2">Good</span>
                    </div>
                    <div>
                        <p>As my first time ordering my glasses online i am very happy with my purchase. Thanks tendaglasses, pleasure doing business with you. Outstanding. I will be telling everybody to go here if they want new glasses.</p>

                        <p className="text-slate-500 text-sm my-3 font-semibold">Micheal-</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <span className="mx-2">Fair</span>
                    </div>
                    <div>
                        <p>As my first time ordering my glasses online i am very happy with my purchase. Thanks tendaglasses, pleasure doing business with you. Outstanding. I will be telling everybody to go here if they want new glasses.</p>

                        <p className="text-slate-500 text-sm my-3 font-semibold">Micheal-</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <FontAwesomeIcon icon={faStar} className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"/>
                        <span className="mx-2">Poor</span>
                    </div>
                    <div>
                        <p>As my first time ordering my glasses online i am very happy with my purchase. Thanks tendaglasses, pleasure doing business with you. Outstanding. I will be telling everybody to go here if they want new glasses.</p>

                        <p className="text-slate-500 text-sm my-3 font-semibold">Micheal-</p>
                    </div>
                </div>
            </>}
        </div>

    )

}

export default GlassReview;