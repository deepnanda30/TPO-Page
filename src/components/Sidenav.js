import React from 'react';
import  profile from "./dummy.png";
function Sidenav(){
    return(
        <div className="col-lg-2  col-sm-6 my-2 side ">
            <img src={profile} alt="profile" className="pic1" />
            <br/>           
            <h4>Name</h4> 
            <h4>Other</h4>    
        </div>
    );
}
export default Sidenav;