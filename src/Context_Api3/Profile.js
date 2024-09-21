import { useContext } from "react"
import MyContext from "./Context"

const Profile = ()=>{
const {user} = useContext(MyContext)
return (
    <>
    {!user?(
     <>
     <h2>Please Login!</h2>
     </>   
    ):(
        <>
        <h4>Welcome ! {user.name}</h4>
        </>
    )}
    
    </>
)

}
export default Profile