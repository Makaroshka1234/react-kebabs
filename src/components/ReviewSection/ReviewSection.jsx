import React, { useState } from 'react'

import './style.css'
import review from './review'

const ReviewSection = () => {

    const [userReview, setUserReview] = useState(review)
    const [activeIndex, setActiveIndex] = useState(0)
    console.log(userReview);






    return (
        <section className='review'>
            <div className="container">
                <div className="review__inner">
                    <div className="slider">
                        li.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection
