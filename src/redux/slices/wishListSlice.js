import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        products: [],
    },
    reducers: {
        addProductInWishList: (state, action) => {
            //addedInWishList is a state true or false
            const { productImage, productTitle, productId } = action.payload || {}

            if (productImage && productTitle && productId) {
                state.products.push({ productImage, productTitle, productId })
            }


        },
        removeProductInWishList: (state, action) => {
            const { productId } = action.payload || {}

            if (productId) {
                state.products = state.products.filter((product) => (product.productId !== productId))
            }

        },
        removeAllProductsInWishList: (state) => {
            state.products = []
        }
    }
})

export const { addProductInWishList, removeProductInWishList, removeAllProductsInWishList } = wishListSlice.actions
export default wishListSlice.reducer