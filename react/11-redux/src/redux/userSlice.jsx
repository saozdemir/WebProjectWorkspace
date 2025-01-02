import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//* state
const initialState = {
    users: [], loading: false
}
//* action
export const getAllUsers = createAsyncThunk("users", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    return response.data;
})
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //! Http isteği olmazsa fonksiyonlar için burası kullanılacak.
    },
    extraReducers: (builder) => {
        //! Http isteklerinde kullanılır.
        //* Http isteklerinde state güncelleme işlemi burada yapılıyor
        //* getAllUsers fonk. çağrıldığında ve fullfilled olduğunda, response.data ile dönen değeri doldur.
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})
export const {} = userSlice.actions; //!Bu export sadece reducers altında tanımlanan fonksiyonlar içindir.
export default userSlice.reducer;