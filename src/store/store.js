import { configureStore } from "@reduxjs/toolkit";
// import { authApi, taskApi } from "./apis";
import { authSlice } from "./slices/auth/authSlice";
import { toastSlice } from "./slices/toast/toastSlice";

export const store = configureStore({
    reducer: {
        //slices
        login: authSlice.reducer,
        toast: toastSlice.reducer,
        // [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // .concat(taskApi.middleware)
    // .concat(authApi.middleware)
})