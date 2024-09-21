import React, { useContext, useState } from 'react'
import FormContext from './FormContext.js'

const Form = () => {
     const [myname,setUserName] =useState(null)
     const [myaddress,setMyAddress]=useState(null)


    const{name,address,formData}=useContext(FormContext)
      function SubmitHandler(e){
        e.preventDefault()
        formData(myaddress,myname)
    }
console.log(name)
console.log(address)
  return (
    <>
     <input
     value={myname}
     onChange={(e)=>setUserName(e.target.value)}
     />
     <input 
     value={myaddress}
     onChange={(e)=>setMyAddress(e.target.value)}
     />
    <button onClick={SubmitHandler} >Submit</button>
    </>
  )
}

export default Form
