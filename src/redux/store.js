import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/cartSlice";

const store = configureStore({
    reducer:{
        cart :CartReducer
    }
})

export default store;