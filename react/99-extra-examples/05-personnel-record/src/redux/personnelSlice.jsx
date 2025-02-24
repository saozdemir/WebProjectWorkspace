import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    personnelList: [],
}

export const personnelSlice = createSlice({
    name: 'personnel',
    initialState,
    reducers: {
        savePersonnel: (state, action) => {
            state.personnelList = [...state.personnelList, action.payload];
        },
    },
    extraReducers: (builder) => {

    }
})

export const {savePersonnel} = personnelSlice.actions

export default personnelSlice.reducer