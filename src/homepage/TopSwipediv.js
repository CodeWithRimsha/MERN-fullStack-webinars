import React from 'react'
import img1 from '/Users/apple/webinars/src/homepage/o.jpeg'
function TopSwipediv() {
    return (
       
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="" className="card-img-top"/>
            </div>

        <div className="card-body text-dark">
 <h4 className="card-title"> Webinar  Name </h4>
 <p className="card-text text-secondary">
     Ticket Price: XXXX
     date: XXXXX

Organizer Name
 </p>
   

   <a href="/" className="btn btn-outline-success">Book Yourself Now</a>

            </div>
        </div>
       
     
    )
}

export default TopSwipediv
