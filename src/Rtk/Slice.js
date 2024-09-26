import {createSlice} from "@reduxjs/toolkit"

const coutnerSlice =createSlice({
   name:"mycounter",
   initialState:{
    value:0
   },
   reducers:{
    AddCounter:(state)=>{
        state.value +=1
    },
    removeCounter:(state)=>{
        state.value -=1
    }
   }
})
export const {AddCounter,removeCounter} = coutnerSlice.actions
export default coutnerSlice.reducer