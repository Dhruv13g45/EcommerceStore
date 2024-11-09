import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        orderHistory: [],
    },
    reducers: {
        addItemsToCart: (state, action) => {
            const { productImage, productId, productTitle, productPrice, productCount } = action.payload || {}
            if (productImage && productId && productTitle && productPrice && productCount) {
                state.cartItems.push({ productImage, productId, productTitle, productPrice, productCount })
            }
        },
        removeItemsToCart: (state, action) => {
            const { productId } = action.payload || {}
            if (productId) {
                state.cartItems = state.cartItems.filter((cartItem) => (cartItem.productId !== productId));
            }
        },
        removeAllItemsToCart: (state) => {
            localStorage.setItem('orderHistory', JSON.stringify(state.cartItems));
            state.cartItems = []
        },
        increamentProductCount: (state, action) => {
            const { productId } = action.payload || {}

            if (productId) {
                state.cartItems = state.cartItems.map((item) => item.productId == productId ? { ...item, productCount: Number(item.productCount += 1) } : item)
            }
        },
        decreamentProductCount: (state, action) => {
            const { productId } = action.payload || {}

            const index = state.cartItems.findIndex(item => item.productId === productId);

            if (index !== -1) {
                const item = state.cartItems[index];
                if (item.productCount <= 1) {
                    state.cartItems.splice(index, 1);
                } else {
                    item.productCount -= 1;
                }
            }
        },
        retriveOrderHistory: (state) => {
            const orderHistoryList = JSON.parse(localStorage.getItem('orderHistory'));
            console.log(orderHistoryList)
            if (orderHistoryList) {
                state.orderHistory = orderHistoryList
            }
        },
        removeOrderHistory: (state) => {
            localStorage.removeItem('orderHistory')
            return {
                ...state,
                orderHistory: [],
            };
        }
    },
})

export const { addItemsToCart, removeItemsToCart, removeAllItemsToCart, increamentProductCount, decreamentProductCount, retriveOrderHistory, removeOrderHistory } = cartSlice.actions

export default cartSlice.reducer;
