import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isActive: false,

}


export const SideMenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setIsActive: (state, action) => {
            state.isActive = !action.payload
            console.log(state.isActive, 'activ or not');

        }
    },
})

export const { setIsActive } = SideMenuSlice.actions

export default SideMenuSlice.reducer