import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    category: ['кебаб', 'комбо меню', 'страви', 'соуси', 'напої'],
    activeCategory: null,
    cities: ['Львів', 'Київ'],
    activeCity: 'Львів',
    categoryUrl: ['kebab', 'combo-menu', 'dishes', 'souses', 'drinks']


}


export const HeaderSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload
        },
        setActiveCity(state, action) {
            state.activeCity = action.payload
        },
    },
})

export const { setActiveCategory, setActiveCity } = HeaderSlice.actions

export default HeaderSlice.reducer