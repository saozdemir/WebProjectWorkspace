/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Mar 2025
 * <p>
 * @description: Kelime slice bileşeni
 */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    word: [{id: 1, word: 'test'}, {id: 2, word: 'test2'}, {id: 3, word: 'test3'}],
    searchedWord: [],
    selectedWord:[],
};

const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        addWordFromDictionary: (state, action) => {
            console.log(action.payload);
            state.word.push(action.payload);
            console.log("Kelimeler: " + state.word);
        },
        removeWordFromDictionary: (state, action) => {
            state.word = state.word.filter((word) => word.id !== action.payload.id);
        },
        findWordFromDictionary: (state, action) => {
            state.searchedWord = state.word.filter((word) => word.word === action.payload.word);
        },
        selectWordFromDictionary: (state, action) => {
            state.selectedWord = action.payload;
            console.log("Selected Word: ", state.selectedWord);
        }
    },
    extraReducers: (builder) => {
        builder
        // .addCase(fetchWord.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(fetchWord.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.word = action.payload;
        // })
        // .addCase(fetchWord.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // })
    },
});
export const {addWordFromDictionary, removeWordFromDictionary, findWordFromDictionary,selectWordFromDictionary} = wordSlice.actions;
export default wordSlice.reducer;