import EmailIcon from '@material-ui/icons/Email';
import UserLock from '@material-ui/icons/Lock';
//import './style.css'
import pic from "E:/Thapa/webinar/src/organize/contact.js";
import React from 'react'
function contact() {
//export default function audienceSignIn() {
    return (
        <div>
            <div>
            <h4 id="h">Contact Us</h4>
        <div>
        {/*<img src={pic} alt="" />*/}
 
              <div className="form-content-right">
           
        <form className="form just-content-left"    >
        {/*<img src={pic}   id="img1" className=" "/>*/}

                <div id="form-inputsingin">
                    <label htmlFor="name"
                    className="form-label" >
                        <UserLock className="icon "  />
                    </label>
                        <input
                        type="text"
                        name="Name"
                        className="form-input"
                        placeholder="Enter Your Name"required="true"
                       // value={values.password}
                      //  onChange={handleChange}
                        />
                     
                   
                </div>
                <div id="form-inputsingin">
                    <label htmlFor="email"
                    className="form-label">
                        <EmailIcon className="icon"/>
                    </label>
                        <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter Your Email"
                       // value={values.email}
                       // onChange={handleChange}
                       required="true"
                        />
               
                   
                </div>
                
                
                <div className="contact_form_text mt-5 ">
                        <textarea className="text_field contact_form_message" 
                        placeholder="Message" cols="30" rows="10"  required="true"></textarea>
                         
                    </div>
             
                <button className="form-input-btn" type="submit" id="btn-signIn"> Submit </button>
                
               

                </form>

        </div>
       
        </div></div>
        </div>

    )
}
export default contact