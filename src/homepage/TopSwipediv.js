import React from 'react'
import img1 from '/Users/apple/webinars/src/homepage/o.jpeg'
function TopSwipediv() {
    return (
       
        <div className="top-slider">
           <div className="img-top">
               <img src={img1} alt="" className="web-img"/>
               </div>
               <div className="top-des">
                   <h5>Webinar Name</h5>
                   <p>Price: 300-/   12/12/12 at 12pm</p>
               </div>
               <a href="/" className="btn btn-outline-success">Book Now</a>
        </div>
       
     
    )
}

export default TopSwipediv
