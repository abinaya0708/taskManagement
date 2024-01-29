import {configureStore} from "@reduxjs/toolkit"
import datas from "./Slice"
export const Store=configureStore({
    reducer:{
        data:datas
    }
})