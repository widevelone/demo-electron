import { configureStore } from "@reduxjs/toolkit";
// import { authApi, taskApi } from "./apis";
import { authSlice } from "./slices/auth/authSlice";
import { toastSlice } from "./slices/toast/toastSlice";
import { dropdownSlice } from "./slices/dropdown";

export const store = configureStore({
    reducer: {
        //slices
        login: authSlice.reducer,
        toast: toastSlice.reducer,
        dropdown: dropdownSlice.reducer,
        // [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // .concat(taskApi.middleware)
    // .concat(authApi.middleware)
})