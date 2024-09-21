import React from "react";

const Profile=({name,study,Profession,dob,wine="yes"})=>{
    return(
        <>
        <p>Passing data in Components by using props</p>
        <h3>Name:{name}</h3>
        <h3>Study:{study}</h3>
        <h3>Profession:{Profession}</h3>
        <h3>Date-of-birth:{dob}</h3>
        <h4>Drink:{wine}</h4>
        
        </>
    )
}
export default Profile;