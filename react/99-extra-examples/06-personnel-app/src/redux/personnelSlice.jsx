import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    personnel: [],
    status: 'idle',
    error: null,
};

export const fetchPersonnel = createAsyncThunk('personnel/fetchPersonnel', async (query) => {
    const response = await axios.get(`http://localhost:5000/personnel?${query}`);
    return response.data;
});

export const addPersonnel = createAsyncThunk('personnel/addPersonnel', async (newPersonnel) => {
    const response = await axios.post('http://localhost:5000/personnel', newPersonnel);
    return response.data;
});

export const updatePersonnel = createAsyncThunk('personnel/updatePersonnel', async (updatedPersonnel) => {
    const response = await axios.put(`http://localhost:5000/personnel/${updatedPersonnel.id}`, updatedPersonnel);
    return response.data;
});

export const deletePersonnel = createAsyncThunk('personnel/deletePersonnel', async (id) => {
    await axios.delete(`http://localhost:5000/personnel/${id}`);
    return id;
});

const personnelSlice = createSlice({
    name: 'personnel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonnel.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPersonnel.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.personnel = action.payload;
            })
            .addCase(fetchPersonnel.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPersonnel.fulfilled, (state, action) => {
                state.personnel.push(action.payload);
            })
            .addCase(updatePersonnel.fulfilled, (state, action) => {
                const index = state.personnel.findIndex((person) => person.id === action.payload.id);
                state.personnel[index] = action.payload;
            })
            .addCase(deletePersonnel.fulfilled, (state, action) => {
                state.personnel = state.personnel.filter((person) => person.id !== action.payload);
            });
    },
});

export default personnelSlice.reducer;