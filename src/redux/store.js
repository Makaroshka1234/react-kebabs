import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/CartSlice'


export const store = configureStore({
    reducer: {
        cart,
    },
})