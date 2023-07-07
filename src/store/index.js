import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../feature/covidSlice";

const store = configureStore({
    reducer: {
        covid: covidReducer,
    },
})

export default store