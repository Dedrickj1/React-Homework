import { createSlice } from "@reduxjs/toolkit"


const rootSlice = createSlice({
    name: "root",
    initialState: {
        year: "Year",
        make: "Make",
        model: "Model",
        name: "Name",
        phone_number: "Phone Number"
    },
    reducers:{
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseName: (state, action) => { state.name = action.payload },
        choosePhone: (state, action) => { state.phone_number = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, chooseName, choosePhone } =rootSlice.actions