import { createContext, useState } from "react";


const FormContext = createContext()

export const FormContextProvider =({children})=>{
const [name,setName]=useState('')
const [address,setAddress]=useState('')

const formData=(myname,myaddress)=>{
    setName({myname})
    setAddress({myaddress})
}
return(
  <FormContext.Provider value={{name,address,formData}}>
     {children}
  </FormContext.Provider>
)
}
export default FormContext;