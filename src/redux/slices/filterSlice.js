import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    activeSortItem: {nameValue: 'popular', sortBy: 'rating'},
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveCategory: (store, action) => {
            store.activeCategory = action.payload;
        },
        setSort: (store, action) => {
            store.activeSortItem = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setActiveCategory, setSort} = filterSlice.actions

export default filterSlice.reducer