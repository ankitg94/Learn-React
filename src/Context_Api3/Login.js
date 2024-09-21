import { useContext, useState } from "react"
import MyContext from "./Context"

const Login =()=>{

 const [name,setName]=useState("")
 const [password,setPassword]=useState("")
 
 const {setUser} =useContext(MyContext)
 const HandleSubmit = (e)=>{
    e.preventDefault()
    setUser({name,password})
}

    return(
    <>
    <input
    placeholder="Enter your name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <input
    placeholder="Enter your Address"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button onClick={HandleSubmit}>Submit</button>
    </>
    )
}
export default Login
