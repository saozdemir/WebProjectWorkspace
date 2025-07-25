/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Jul 2025
 * <p>
 * @description: Tüm uygulagenelindeki ortak sclicelar
 */
import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {ProductType, UserType} from "../types/Types.tsx";

export interface AppSliceType {
    currentUser: UserType | null,
    loading: boolean,
    products: ProductType[],
}

const initialState: AppSliceType = {
    currentUser: null,
    loading: false,
    products: [],
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading:(state:AppSliceType, action:PayloadAction<boolean>)=>{
            state.loading = action.payload;
        },
        setCurrentUser: (state: AppSliceType, action: PayloadAction<UserType | null>) => {
            state.currentUser = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
        loadCurrentUser: (state: AppSliceType) => {
            const user = localStorage.getItem("currentUser");
            if (user) {
                state.currentUser = JSON.parse(user) as UserType;
            } else {
                state.currentUser = null;
            }
        },
        removeCurrentUser: (state: AppSliceType) => {
          if(state.currentUser){
            state.currentUser = null;
            localStorage.removeItem("currentUser");
          }
        },
        setProducts: (state: AppSliceType, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
    }
});

export const { setLoading ,setCurrentUser, loadCurrentUser, removeCurrentUser, setProducts} = appSlice.actions;
export default appSlice.reducer;