import { createContext, useState } from "react";
import ThemeContext from "./Themecontext";

const UserContext =createContext()

export const USeRContextProvider =({children})=>{
  const [user,setUser] =useState(null)
  const login=(username)=>{
    setUser({username})
  } 
 const logout =()=>{
    setUser(null)
 } 
 return(
    <>
    <ThemeContext.Provider value={{user,login,logout}}> 
        {children}
    </ThemeContext.Provider>
    </>
 )

}

export default UserContext ;

