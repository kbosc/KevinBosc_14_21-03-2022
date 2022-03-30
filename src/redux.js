import { createSlice, configureStore } from "@reduxjs/toolkit";
import api from "./api"

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        data: api,
    },
    reducers: {
        addEmployee: (state, action) => {
            console.log(action)
            state.data.push(action.payload)
        }
    }
})

export const { addEmployee } = employeeSlice.actions

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer
    },
})

