import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/CartSlice'
import menu from './slices/SideMenu'

export const store = configureStore({
    reducer: {
        cart,
        menu,
    },
})