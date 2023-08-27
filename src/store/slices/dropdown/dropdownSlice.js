import { createSlice } from '@reduxjs/toolkit'

export const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {
        status: false
    },
    reducers: {
        dropdownOn: (state, _) => {
            state.status = true
        },
        dropdownOff: (state, _) => {
            if (state.status) {
                state.status = false
            }
        },
        dropdownToggle: (state, _) => {
            state.status = !state.status
        },
    },
})

export const { dropdownOn, dropdownOff, dropdownToggle } = dropdownSlice.actions