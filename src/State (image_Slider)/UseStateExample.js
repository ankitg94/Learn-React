import React, { useState } from 'react'
import { Data } from './Data' 
const UseStateExample = () => {
    const [index,setIndex]=useState(0)
    const [showMore,setShowMore]=useState(false)
    function handlePrev(){
        setIndex(index-1)
   }
  function handleNext(){
    setIndex(index+1)
  }
  function handleShow(){
    setShowMore(!showMore)
  }
    const myData =Data[index]
    return (
    <>
    {/* {Data.map((user)=>
        <div key={user.id}>
         <h1>{user.name}</h1> 
         <h2>{user.title}</h2>
         <h3>{user.Desc}</h3>
        </div>
    )} */}
    
    <h1>{myData.name}</h1>
    <h3>{myData.title}</h3>
    <h5>{showMore && myData.Desc}</h5>

    {index > 0 && <button onClick={handlePrev}>Prev</button>}
    {index <Data.length-1 && <button onClick={handleNext}>Next</button>}
    <button onClick={handleShow}>{showMore ?"hide":"show"}</button>


    </>
  )
}

export default UseStateExample
