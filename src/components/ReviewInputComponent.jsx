import React from 'react'


const ReviewInputComponent = ({ handleReviewChange, submitReview, currentReview }) => {


  return (
    <div className='w-full flex gap-3 lg:justify-around justify-between items-center mt-3'>
      <h1 className='text-sm sm:text-xl lg:text-2xl'>Add Your Review</h1>
      <input type="text"
        name="reviewMessage"
        id="reviewMessage"
        className='w-[50%] h-[3rem] p-3 border border-black rounded-lg' placeholder='Write your Review'
        onChange={(e) => handleReviewChange(e)}
        value={currentReview}
      />

      <button className=' w-[30%] sm:w-[20%] font-bold p-1 lg:p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150 text-sm sm:text-md lg:text-xl' onClick={submitReview}>Submit Review</button>
    </div >
  )
}

export default ReviewInputComponent
