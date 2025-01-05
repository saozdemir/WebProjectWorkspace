import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from "react-redux";

//! Bu metot initialState den önce yazılmalıdır!!!
const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            //* Sepette aynı id'ye sahip ürün varsa bul.
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if(findProduct) {
                // Daha önceden eklenmiş
                //* Önce ürünü çıkardıp kalan diziyi buraya aktardık.
                const extractedProduct = state.products.filter((product) => product.id !== action.payload.id);
                //* Sepette bulunan ürün sayısına yeni eklenen ürünün sayısını ekledik ve adedi güncelledik.
                findProduct.count += action.payload.count;
                //* Filitreleyip sayısını güncellediğimiz ürünü tekrardan diziye ekledik.
                state.products = [...extractedProduct, findProduct];
                writeFromBasketToStorage(state.products)

            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        setDrawer: (state, action) => {
            state.drawer = !state.drawer;
        },
        calculateBasket: (state, action) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        },
        removeFromBasket: (state, action) => {
            const filteredProducts = state.products && state.products.filter((product) => product.id !== action.payload.id);
            state.products = [...filteredProducts];
            writeFromBasketToStorage(state.products);
        },
    },
    extraReducers: (builder) => {

    }
})


export const {addToBasket, setDrawer,calculateBasket, removeFromBasket} = basketSlice.actions

export default basketSlice.reducer