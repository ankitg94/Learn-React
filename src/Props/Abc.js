import React from 'react'
function Profile({url,name,awards,discovery,imagesize}){
return(
<>
<h1>Name :{name}</h1>
<h3>Awards:{awards}</h3>
<h5>discovery:{discovery}</h5>
<img
  src={url}
  alt={name}
  height={imagesize}
  width={imagesize}
/>
</>
)
}

const Abc = () => {
  return (
    <div>
      <h1>Example of Props by passing throught components </h1>
      
        <Profile
          name="ankit gupta"
          awards={["as","py","oq"]}
          discovery="three book of life"
          
      />
        <Profile
          name="hitesh gupta"
          awards={["ashu","pyra","open"]}
          discovery="three book of life"
      />
        <Profile
          name="Pyarelal gupta"
          awards={["ashi","pyr","oqt"]}
          discovery="three book of life"
      />
    </div>
  )
}

export default Abc
