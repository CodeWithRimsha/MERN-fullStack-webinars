import React from 'react'

import EmailIcon from '@material-ui/icons/Email';

import LockIcon from '@material-ui/icons/Lock';
import './signin.css'
function SignIn() {
    return (
       <div id="organizerSignIn">
           <div id="heading"> <h3>Organizer sign In</h3></div>
           <form id="fos">
            <div className="fields">
                <EmailIcon className="icon"/>
           <input type ="text" name="email" placeholder="Email" ></input>
           </div>
        
           <div className="fields">
           <LockIcon className="icon"/>
           <input type ="text" name="password" placeholder="Password" ></input>
           </div>


          
          <input type="checkbox"/>Remember me 
          <a href="#"> forget password</a>
          <div id="downside">
           <button type="submit" > Sign In </button>
           <span>
                    Don't have an account? <a href="http://localhost:3000/organizerSignUp">Create Now</a>
                </span>
                </div>
           </form>
       </div>
    )
}

export default SignIn
