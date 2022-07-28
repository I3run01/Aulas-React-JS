import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import themeReduce from "./reducers/themeReduce";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReduce
    }
})

export type RootState = ReturnType<typeof store.getState>