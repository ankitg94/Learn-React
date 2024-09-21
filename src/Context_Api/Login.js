import React, { useContext, useState } from 'react'
import UserContext from './UserContext'

const Login = () => {
  const [username,setUSername]=useState(null)
  
  const {login}=useContext(UserContext)
  const formHandler=(e)=>{
     e.preventDefault()
      login(username)
  }

    return (
    <>
    <form onSubmit={formHandler}>
    <input 
    placeholder='please Enter your name'
    value={username}
    onChange={(e)=>setUSername(e.target.value)}
    /> 
    <button type='submit'>Login</button>
    </form>
      
    </>
  )
}

export default Login
