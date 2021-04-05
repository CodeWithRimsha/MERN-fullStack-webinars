
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './style.css'
import pic from "/Users/apple/fyp-webinars/webinars/src/audience/login.png";
import React from 'react'

export default function audienceSignIn() {
    return (
        <div>
            <div>
            <h4 id="h"> Sign In Audience</h4>
        <div>
        <img src= {pic} alt="" id="imgsignin"></img>
 
              <div className="form-content-right">
           
        <form className="form" id="signin-form">
       { /*<div id="top">Sign Up as a Organizer</div>*/}
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
                        />
               
                   
                </div>


                <div id="form-inputsingin">
                    <label htmlFor="password"
                    className="form-label">
                        <LockIcon className="icon"/>
                    </label>
                        <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter Your Password"
                       // value={values.password}
                      //  onChange={handleChange}
                        />
                     
                   
                </div>
         
                
                 <p id="fp">Forgot Password </p>
             
                <button className="form-input-btn" type="submit" id="btn-signIn"> Sign In </button>
                <span className="form-input-login" id="back">
                    Don't have an account? <a href="http://localhost:3000/organizerSignUp">Create Now</a>
                </span>
               

                </form>

        </div>
       
        </div></div>
        </div>
    )
}
