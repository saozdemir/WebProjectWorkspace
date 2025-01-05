import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
}

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //* Seçilen ürünün tutulduğu state dir.
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        //* İstek işleniyorsa yabi bekleme modunda ise "loading = true" olarak state güncellendi.
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.loading = true;
        });

        //* İstek başarlı şekilde tamamlandığında "loading = false" yaparak yükleniyor işlemini sonlandır.
        //* Ürünlerin tutulacağı "products" state'ine sorgu ile gelen ürünleri set et.
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload; //! Buradaki "action" => "return response.data;" ile alınan değerdir.
        });
    }
})
export const {setSelectedProduct} = productSlice.actions

export default productSlice.reducer