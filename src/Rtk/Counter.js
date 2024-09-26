import React from 'react'
import { AddCounter,removeCounter } from './Slice'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
 const dispatch=useDispatch() //sending the data 
 const count=useSelector((state)=>state.mycounter.value) //getting the data

 
    return (
    <>
      {count}    
      <button onClick={()=>dispatch(AddCounter())}>Plus</button>
      <button onClick={()=>dispatch(removeCounter()) }>minus</button>
 
    </>
  )
}

export default Counter
