import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        toastDefault: {
            position: toast.POSITION.TOP_RIGHT,
            className: 'foo-bar font-semibold text-sm',
            theme: window.localStorage?.getItem("theme") === "dark" ? 'dark' : null,
            autoClose: 3000,
            // transition:Zoom
        },
    },
    reducers: {
        toastOn: (state, action) => {
            const { type, message } = action.payload
            // console.log(type)
            // const notify = () => {
            if (type === "success") {
                toast.success(message, state.toastDefault)
            }
            else if (type === "danger") {
                toast.error(message, state.toastDefault)
            }
            // }
        },
    },
})

export const { toastOn } = toastSlice.actions

// export default authSlice.reducer