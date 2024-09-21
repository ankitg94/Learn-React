import React, { useContext } from 'react'
import ThemeContext from './Themecontext'

const Theme = () => {
 const {theme,toggleTheme}=useContext(ThemeContext)

    return (
    <>
    <div style={{background:theme==="light" ?"#fff":"#333"}}>
     
     <button onClick={toggleTheme}>Switch</button>
     <p>Theme Color={theme}</p>
    </div>
      
    </>
  )
}

export default Theme
