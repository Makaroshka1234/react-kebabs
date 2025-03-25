import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/CartSlice'
import menu from './slices/SideMenu'
import header from './slices/HeaderSlice'
export const store = configureStore({
    reducer: {
        cart,
        menu,
        header,
    },
})