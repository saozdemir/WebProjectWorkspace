import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slice/themeSlice.ts';
/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 28 Jul 2025
 * <p>
 * @description:
 */
export const store= configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;