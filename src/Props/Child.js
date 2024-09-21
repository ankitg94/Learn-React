import React from 'react'

const Child = ({children}) => {
  return (
    <>
       {/* header*/}
      <h1>This is the children in props</h1>
      {children}
      {/* footer*/}
    </>
  )
}
export default Child
