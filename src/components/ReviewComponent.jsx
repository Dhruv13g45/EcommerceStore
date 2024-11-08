import React from 'react'
import ReviewInputComponent from "./ReviewInputComponent"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from "../redux/slices/reviewSlice"
import Avatar from "../assets/Avatar.png"
import toast, { Toaster } from 'react-hot-toast'

const ReviewComponent = ({ singleProductId }) => {


    const submittedReviewNotification = () => toast('Submitted Review');
    const [currentReview, setCurrentReview] = useState("")
    const reviewArray = useSelector((state) => state.reviews.reviews);
    const addReview = useDispatch();
    console.log(reviewArray)
    const handleReviewChange = (e) => {
        setCurrentReview(e.target.value);
    }


    const submitReview = (e) => {
        e.preventDefault();
        addReview(addItems({ review: currentReview, reviewProductId: singleProductId }))
        setCurrentReview("")
        submittedReviewNotification()
    }



    return (
        <div className='w-full mt-5'>
            <h1 className='text-center font-bold text-4xl'>Product Reviews</h1>
            <ReviewInputComponent submitReview={submitReview} handleReviewChange={handleReviewChange} currentReview={currentReview} />
            <div className='mt-5'>
                {
                    reviewArray.length > 0 ?
                        reviewArray.map((review) => (
                            <div className='w-full' key={review.review}>
                                {review.reviewProductId == singleProductId ?


                                    <div className='flex flex-col sm:flex-row justify-start items-center gap-5 mx-3 my-5 rounded-xl shadow-xl p-3'>
                                        <img src={Avatar} alt="avatar photo" className=' rounded-[50%] w-[30px] sm:w-[70px]' />
                                        <p className='lg:font-bold text-md lg:text-lg '>Review :{review.review}</p>
                                    </div>

                                    :

                                    <>
                                    </>
                                }

                            </div>
                        ))
                        :
                        <>
                        </>
                }
            </div>
        </div>
    )
}

export default ReviewComponent
