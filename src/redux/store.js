import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./slices/reviewSlice"
import wishListReducer from "./slices/wishListSlice"
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
    reducer: {
        reviews: reviewReducer,
        wishList: wishListReducer,
        cart: cartReducer,
    }
})