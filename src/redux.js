import { createSlice, configureStore } from "@reduxjs/toolkit";
// import api from "./api"

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        data: 
        [
            {
                firstName: "John",
                lastName: "Doe",
                startDate: "22/03/2021",
                department: "Sales",
                dateOfBirth: "03/07/1984",
                street: "111 8th Ave",
                city: "New York",
            },
            {
                firstName: "Johnie",
                lastName: "Doe",
                startDate: "22/03/2021",
                department: "Sales",
                dateOfBirth: "03/07/1984",
                street: "111 8th Ave",
                city: "New York",
            },
            {
                firstName: "Johna",
                lastName: "Doe",
                startDate: "22/03/2021",
                department: "Sales",
                dateOfBirth: "03/07/1984",
                street: "111 8th Ave",
                city: "New York",
            },
            {
                firstName: "Johnu",
                lastName: "Doe",
                startDate: "22/03/2021",
                department: "Sales",
                dateOfBirth: "03/07/1984",
                street: "111 8th Ave",
                city: "New York",
            },
            {
                firstName: "Johny",
                lastName: "Doe",
                startDate: "22/03/2021",
                department: "Sales",
                dateOfBirth: "03/07/1984",
                street: "111 8th Ave",
                city: "New York",
            },
        ],
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