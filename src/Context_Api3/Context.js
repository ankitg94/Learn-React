import {createContext,useState} from "react";
const MyContext = createContext() //create context 
export const MyContextProvider =({children})=>{ //Provider {children}

const [user,setUser] =useState(null) 

return(

<MyContext.Provider value={{user,setUser}}>

    {children}

</MyContext.Provider>

)}
export default MyContext;      //export context