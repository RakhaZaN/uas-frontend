import { createSlice } from "@reduxjs/toolkit"
import data from "../../utils/constants/provinces"

const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        covid: data,
    },
    reducers: {
        updateCovid(state, action) {
            state.covid = action.payload
        },
    }
})

const { updateCovid } = covidSlice.actions
const covidReducer = covidSlice.reducer

export { updateCovid }
export default covidReducer