import React from 'react'
const People=["ashu","ankit","bhai","behn","hero","natu"]
const List = () => {

    let list =People.map((number) =>number)
  return (
    <>
      {list}
    </>
  )
}

export default List
