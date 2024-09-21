import React, {useState } from 'react'
import axios from "axios"
const GithubApi = () => {
  const [data,setData]=useState([])
  const [search,setSearch] =useState("")
  
  const fetchDataWithAxios=async()=>{
  try{
    const response = await  axios.get(`https://api.github.com/users/${search}`)
    setData(response.data)
    console.log(response.data)

 }catch(error){
       console.log("error in getting data from the axios")
       console.log(error)
    }
  }
// search functionality
function handleSearch(e){
  e.preventDefault()
  fetchDataWithAxios(search)
}
  
    return (
    <>
    <h1>Github Profiler</h1>
    
    <input 
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    placeholder='Search on github'
    >
    </input>
    <button onClick={handleSearch}>Search</button>
    

    {data ?(
    <> 
    <h2>Name : {data.name}</h2>
    <img src={data.avatar_url} alt={`${data.name}'s avatar`} width="100" height="100" />
    {/* <h4>Imge:{data.avatar_url}</h4> */}
    <h4>Bio  : {data.bio}</h4>
    <h4>Follower:{data.followers}</h4>
    <h4>Repositeries:{data.public_repos}</h4>
    {/* <h4>Github URl:{data.html_url}</h4> */}
    <h4>GitHub URL: <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.html_url}</a></h4>
    </>
     ):(<h3>Loading......</h3>)}
    </>
  )
}

export default GithubApi
