/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 31 Jul 2025
 * <p>
 * @description:
 */
import type {ProductType} from "../types/Types.tsx";
import {createSlice} from "@reduxjs/toolkit";

export interface BasketSliceType{
    basket: ProductType[],
}

const initialState: BasketSliceType = {
    basket: [],
}

const basketSlice = createSlice ({
    name: "basket",
    initialState,
    reducers: {
        setBasket: (state: BasketSliceType, action) => {
            state.basket = action.payload;
        },
        addProductToBasket: (state: BasketSliceType, action) => {
            if(state.basket.length == 0) {
                state.basket.push(action.payload);
            }else{
                const findProduct = state.basket.find((product: ProductType) => product.id === action.payload.id);
                if(findProduct) {
                    if(findProduct.count && action.payload.count) {
                        findProduct.count = findProduct.count + action.payload.count;
                        /** basket içini tek tek dolan ve eski listedeki product ile findProduct'u değiştir. */
                        state.basket = [...state.basket.map((product: ProductType) => product.id === findProduct.id ? findProduct : product)];
                    }
                }else {
                    state.basket = [...state.basket, action.payload];
                }
            }
            localStorage.setItem("basket", JSON.stringify(state.basket));
        }
    }
});

export const { setBasket, addProductToBasket } = basketSlice.actions;
export default basketSlice.reducer;