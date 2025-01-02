import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    countries:[]
}

export const getAllCountries = createAsyncThunk("countries", async () => {
    const response = await axios.get("https://restcountries.com/v3.1/region/europe");
    console.log(response.data);
    return response.data;
})

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.countries = action.payload;
        })
    }
})

export default countrySlice.reducer;