import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice"
import formReducer from "./FormSlice"
export const Store = configureStore({

    reducer:{
        mycounter:counterReducer,
        FormData:formReducer
    }

})