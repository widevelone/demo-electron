import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'authGeneral',
    initialState: {
        log: false,
        userDetail: null,
        rols: [],
        menus: []
    },
    reducers: {
        loginOn: (state) => {
            state.log = true
        },
        loginOut: (state) => {
            state.log = false
        },
        saveToken: (_, action) => {
            localStorage.setItem("token", action.payload)
        },
        removeToken: () => {
            localStorage.removeItem("token")
        },
        saveUserDetail: (state, action) => {
            state.userDetail = action.payload
            state.rols = action.payload?.rols
        }
    },
})

export const {
    loginOn,
    loginOut,
    saveToken,
    removeToken,
    saveUserDetail,
} = authSlice.actions