import { configureStore } from "@reduxjs/toolkit";
// // import { increment } from "./counter";
// // import { decrement } from "./counter";
import { countReducers } from "./counter";

export const store = configureStore({
    reducer:{
        // increment,
        // decrement
    }
})