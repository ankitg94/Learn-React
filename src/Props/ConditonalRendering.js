function Item({name,isloggin}){
    if(isloggin){
        return <h1>name :{name} Login</h1>
    }
    return <h4>name:{name} Logout</h4>
}

function ITem2({name,isloggin}){
    return(
        <h1>{isloggin?name+"yes":name}</h1>
       
    ) 
}
function Drink ({name}){
    let part,age;
    if(name==="tea"){
        part="leaf";
        age=25 ;
    }
    else if(name === "coffee"){
        part = "cafine";
        age = 43;
    }
    return(
        <>
          <h1>name:{name}</h1>  
          <h4>part:{part}</h4>
          <h6>Age :{age}</h6>
          </>
    )
}
const ConditonalRendering = () => {
  return (
    <>
      <Item
      name="ankit"
      isloggin={false}
      />
      <ITem2
      name="babu"
      isloggin={true}
      />
      <Drink name="tea"/>
    </>
  )
}

export default ConditonalRendering
