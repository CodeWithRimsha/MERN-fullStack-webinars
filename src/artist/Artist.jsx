 import React from 'react'
 import ArtistUI from './ArtistUI'
 import img1 from './image1.jpeg'
 import img4 from './image5.jpeg'
 import img3 from './image3.jpeg'
 function Artist() {
     return (<>
<h2 className="heading">  Artist to Show up Next</h2>

         <div className="container-fluid d-flex justify-content-center">

             <div className="row">
                 <div className="col-md-4">
                     <ArtistUI imgsrc={img1}/>
                 </div>
                 <div className="col-md-4">
                     <ArtistUI imgsrc={img4}/>
                 </div>
                 <div className="col-md-4">
                     <ArtistUI imgsrc={img3}/>
                 </div>
                 <div className="col-md-4">
                     <ArtistUI imgsrc={img3}/>
                 </div>
                 <div className="col-md-4">
                     <ArtistUI imgsrc={img4}/>
                 </div>
                 <div className="col-md-4">
                     <ArtistUI imgsrc={img1}/>
                 </div>

                
             </div>


         
         </div>
         </>
     )
 }
 
 export default Artist
 