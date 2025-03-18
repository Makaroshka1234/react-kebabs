import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    itemCount: 1,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const findItem = state.cartItems.find((cartItem) => cartItem.id === item.id)
            const count = state.itemCount

            if (findItem) {
                findItem.count += 1;
            } else {
                state.cartItems.push({ ...item, count: 1 });
            }




            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + Number(item.price) * item.count
            }, 0)

        },
        removeCount: (state, action) => {
            const item = action.payload
            const findItem = state.cartItems.find((cartItem) => cartItem.id === item.id)

            if (findItem) {
                findItem.count--
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + Number(item.price) * item.count
            }, 0)
        },
        addCount: (state, action) => {
            const item = action.payload
            const findItem = state.cartItems.find((cartItem) => cartItem.id === item.id)

            if (findItem) {
                findItem.count++
            }
            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + Number(item.price) * item.count
            }, 0)
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload)
            console.log('click close');
            state.totalPrice = state.cartItems.reduce((sum, obj) => sum + obj.count * obj.price, 0);
        }

    },
})

export const { addToCart, removeCount, removeItem, addCount } = cartSlice.actions

export default cartSlice.reducer