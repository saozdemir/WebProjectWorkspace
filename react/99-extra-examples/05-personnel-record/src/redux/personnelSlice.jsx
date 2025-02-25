import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const BASE_URL = "http://localhost:4000"

const initialState = {
    personnelList: [],
}

export const getAllPersonnel = createAsyncThunk("personnel", async () => {
    const response = await axios.get(`${BASE_URL}/personnelList`);
    console.log(response.data);
    return response.data;
})

export const addNewPersonnel = createAsyncThunk("personnel/add", async (newPersonnel) => {
    const response = await axios.post(`${BASE_URL}/personnelList`, newPersonnel);
    console.log("ADD: " + response.data);
    personnelList = [...personnelList, newPersonnel];
})

export const searchPersonnel = createAsyncThunk("personnel/search", async (id) => {
    const response = await axios.get(`${BASE_URL}/userList/${id}`)
    console.log("SEARCH: " + response.data);
})
export const personnelSlice = createSlice({
    name: 'personnel',
    initialState,
    reducers: {
        savePersonnel: (state, action) => {
            state.personnelList = [...state.personnelList, action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPersonnel.fulfilled, (state, action) => {
            state.personnelList = action.payload;
        })

        builder.addCase(searchPersonnel.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const {savePersonnel} = personnelSlice.actions

export default personnelSlice.reducer