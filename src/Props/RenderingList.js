import React from 'react'
import {people} from './Data'

const RenderingList = () => {
 const ListItem = people.map(number =>
    <li key={number.id}>,
    <h1>{number.name}</h1>
    </li>
 ) 
    return (
    <>
     {ListItem}
    </>
  )
}

export default RenderingList
