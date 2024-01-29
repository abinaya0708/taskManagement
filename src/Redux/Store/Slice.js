import { createSlice } from "@reduxjs/toolkit";
// import Details from "./Details.json"
export const Slice=createSlice({
    name:"slice",
    initialState:{
        arr:[],
        isAuth:false,
        arr2:[]
    },
    reducers:{
        update:(state,action)=>{
            state.arr=action.payload
        },
        forAuth:(state,action)=>{
            state.isAuth=action.payload
        },
        update2:(state,action)=>{
            state.arr2=action.payload
        }
        
    }
})

export default Slice.reducer
export const {update}=Slice.actions
export const{forAuth}=Slice.actions
export const {update2}=Slice.actions
