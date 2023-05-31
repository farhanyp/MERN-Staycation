import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
    name:'reducer',
    initialState: {
        landingPage: {},
        detailPage:{}
    },
    reducers:{
        showLandingPage: (state, action) => {
            state.hello = action.payload
        }
    }
})

export const {showHello} = Reducer.actions
export default Reducer.reducer