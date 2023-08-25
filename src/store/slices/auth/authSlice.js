import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'authGeneral',
    initialState: {
        log: false,
        userDetail: null,
        currentRol: null,
        currentMenu: null
    },
    reducers: {
        loginOn: (state) => {
            state.log = true
        },
        loginOut: (state) => {
            state.log = false
        },
        saveToken: (state, action) => {
            localStorage.setItem("token", action.payload)
        },
        removeToken: (state) => {
            localStorage.removeItem("token")
        },
        saveUserDetail: (state, action) => {
            state.userDetail = action.payload
        },
        addCurrentRol: (state, action) => {
            state.currentRol = action.payload
            if (action.payload !== null) {
                sessionStorage.setItem("currentRol", action.payload.nombre)
            }
            else {
                sessionStorage.removeItem("currentRol")
                sessionStorage.removeItem("currentMenu")
            }
        },
        addCurrentMenu: (state, action) => {
            state.currentMenu = action.payload
            if (action.payload !== null) {
                sessionStorage.setItem("currentMenu", action.payload.nombre)
            }
            else {
                sessionStorage.removeItem("currentMenu")
            }
        }
    },
})

export const {
    loginOn,
    loginOut,
    saveToken,
    removeToken,
    saveUserDetail,
    addCurrentRol,
    addCurrentMenu
} = authSlice.actions

// export default authSlice.reducer