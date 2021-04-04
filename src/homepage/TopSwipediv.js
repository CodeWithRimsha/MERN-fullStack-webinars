import React from 'react'
import img1 from '/Users/apple/fyp-webinars/webinars/src/homepage/o.jpeg'
function TopSwipediv() {
    return (
       
        <div className="card text-center" id="topcard">
            <div className="overflow">
                <img src={img1} alt="" className="card-img-top"/>
            </div>

        <div className="card-body text-dark">
 <h4 className="card-title" id="title"> Webinar  Name </h4>
 <p className="card-text text-secondary">
     Ticket Price: XXXX
     date: XXXXX

Organizer Name
 </p>
   

   <a href="/" className="btn btn-outline-success" id="tb">Book Ticket</a>

            </div>
        </div>
       
     
    )
}

export default TopSwipediv
