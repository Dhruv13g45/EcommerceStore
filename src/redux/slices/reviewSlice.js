import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: [
            {

            }
        ],
    },
    reducers: {
        addItems: (state, action) => {
            console.log(action.payload)
            try {

                const { review, reviewProductId } = action.payload || {}

                if (review && reviewProductId) {
                    state.reviews.push({ review, reviewProductId })
                }
            }
            catch (error) {
                console.log("undefined values are pushed")
            }
        }
    }
})


export const { addItems } = reviewSlice.actions;
export default reviewSlice.reducer;