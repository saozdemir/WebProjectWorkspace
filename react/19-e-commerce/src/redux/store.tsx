/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Jul 2025
 * <p>
 * @description:
 */
import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./appSlice.tsx";
import basketReducer from "./basketSlice.ts";

export const store = configureStore({
    reducer: {
        app: appReducer,
        basket: basketReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch