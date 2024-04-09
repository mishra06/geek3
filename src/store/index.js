import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "../slices/CryptoSlice";
const store = configureStore({
    reducer :{
        cryptoSlice,
    }
})

export default store;