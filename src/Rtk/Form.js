import React from 'react'
import { setAddress, setName } from './FormSlice'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
    const dispatch =useDispatch() 
    const name =useSelector((state)=>state.FormData.name)
    const address =useSelector((state)=>state.FormData.address)
   const setmyName=(e)=>{
    e.preventDefault()
    dispatch(setName(e.target.value))
   }
   const setmyAddress=(e)=>{
    e.preventDefault()
    dispatch(setAddress(e.target.value))
   }
   const formSubmission=(e)=>{
     e.preventDefault()
     console.log("name and address",name,address)
   }

    return (
    <>
   <input
   placeholder='name'
   value={name}
   onChange={setmyName}
   />
   <input
   placeholder='address'
   value={address}
   onChange={setmyAddress}
   />
   <button onClick={formSubmission}>submit</button>
    </>
  )
}

export default Form
