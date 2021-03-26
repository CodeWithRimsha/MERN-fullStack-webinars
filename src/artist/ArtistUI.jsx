import React from 'react'
//import Navbar from '../Components/Navbar'
import './art-style.css'
import '../App.css'
const ArtistUI= props=>{
    return(
        <>
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="" className="card-img-top"/>
            </div>

            <div className="card-body text-dark">
 <h4 className="card-title"> Artist Name </h4>
 <p className="card-text text-secondary">
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatum id officiis assumenda laborum enim ut, provident architecto quis exercitationem.

 </p>
   

   <a href="/" className="btn btn-outline-success">Check Events</a>

            </div>
        </div>
        </>
    );
}

export default ArtistUI
