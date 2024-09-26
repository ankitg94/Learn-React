import { createSlice } from "@reduxjs/toolkit"
const FormData =createSlice({
      name:"FormData",
      initialState:{
        name:"",
        address:""
      },
      reducers:{
        setName:(state,action)=>{
         state.name =action.payload 
        },
        setAddress:(state,action)=>{
        state.address =action.payload 
        }
      },
})

export const {setName,setAddress} =FormData.actions
export default FormData.reducer