import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./reservation-slice";


const store = configureStore({
    reducer:{reservation:reservationSlice.reducer},
})

export default store;