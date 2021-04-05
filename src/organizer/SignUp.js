import React from 'react'
import DnsIcon from '@material-ui/icons/Dns';
import EmailIcon from '@material-ui/icons/Email';
import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PhoneIcon from '@material-ui/icons/Phone';
import useForm from './useForm'
import { CastForEducation } from '@material-ui/icons';
import validate from './ValidateForm';
import './signup.css'
//import './new.css'
import sideimg from '/Users/apple/fyp-webinars/webinars/src/organizer/sideimg.png'
import '/Users/apple/fyp-webinars/webinars/src/header/bootstrap.min.css'


/*function ChangeColor() {
    var lableText = document.getElementById('rad2');
    lableText.style.color = "red";
}*/
function SignUp() {
    const { handleChange, handleSubmit, values, errors } = useForm(validate);
      
    return (<>
<div className="main">
<div className="sideview">
    <h5>JOIN WEBINARS</h5>
    <img src={sideimg} alt="image"></img>
  { /* <p>join as organizer to share your experience with people</p>*/}
   
</div>




        <div className="form-content-right" id="sigup">
        <form className="form" onSubmit={handleSubmit} >
     
                
                <div className="form-inputs">
                    <label htmlFor="name"
                    className="form-label">
                        <DnsIcon className="icon"/>
                    </label>
                        <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Enter Your Name"
                        value={values.name}
                        onChange={handleChange}

                        />
                        {errors.name && <p> {errors.name}</p>}

                    
                </div>

                <div className="form-inputs">
                    <label htmlFor="username"
                    className="form-label">
                        <FaceIcon className="icon"/>
                    </label>
                        <input
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter Your User Name"
                        value={values.username}
                        onChange={handleChange}
                        />
                             {errors.username && <p> {errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="email"
                    className="form-label">
                        <EmailIcon className="icon"/>
                    </label>
                        <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter Your Email"
                        value={values.email}
                        onChange={handleChange}
                        />
                         {errors.email && <p> {errors.email}</p>}
                   
                </div>


                <div className="form-inputs">
                    <label htmlFor="password"
                    className="form-label">
                        <LockIcon className="icon"/>
                    </label>
                        <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter Your Password"
                        value={values.password}
                        onChange={handleChange}
                        />
                         {errors.password && <p> {errors.password}</p>}
                   
                </div>

                <div className="form-inputs">
                    <label htmlFor="confirmpassword"
                    className="form-label">
                        <LockIcon className="icon"/>
                    </label>
                        <input
                        type="password"
                        name="confirmpassword"
                        className="form-input"
                        placeholder="Confirm your Password"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        />
                         {errors.confirmpassword && <p> {errors.confirmpassword}</p>}
                   
                </div>





                <div className="form-inputs">
                    <label htmlFor="phoneno"
                    className="form-label">
                        <PhoneIcon className="icon"/>
                    </label>
                        <input
                        type="text"
                        name="phoneNo"
                        className="form-input"
                        placeholder="Enter Your Phone Number"
                        value={values.phoneno}
                        onChange={handleChange}
                        />
                         {errors.phoneno && <p> {errors.phoneno}</p>}
                   </div>
                   <div className="form-inputs">
                    <label htmlFor=""
                    className="form-label">
                        <GroupWorkIcon className="icon"/>
                    </label>
                        <input
                        type="text"
                        name="profession"
                        className="form-input"
                        placeholder="Enter Your Profession"
                        value={values.profession}
                        onChange={handleChange}
                        
                        />
                         {errors.profession && <p> {errors.profession}</p>}
                        
                   </div>


  <br></br>

                <div className="form-inputs">
                    <label htmlFor="radio"
                    className="form-label">
           
                    </label>  &nbsp;
                        <input
                        type="radio"
                        name="interest"
                        className="form-radio"
                        value="Education"
                    
                      />
                <i class="fas fa-book-reader"></i>   Education
                &nbsp;

                        <input
                        type="radio"
                        name="interest"
                        className="form-radio"
                        value="Religious"
                      />
                    <i class="fas fa-pray"></i>     Religious

                    &nbsp;
                        <input
                        type="radio"
                        name="interest"
                        className="form-radio"
                        value="Motivational"
                      />
                   <i class="fas fa-microphone"></i>  Motivational
                   &nbsp;
                 <input
                        type="radio"
                        name="interest"
                        className="form-radio"
                        value="Entertainment"
                      />
                        <i class="fas fa-icons"></i>    Entertainment 

                     
                   
                </div>
                {errors.interest && <p> {errors.interest}</p>}
              
                <button className="form-input-btn" type="submit" id="btn"> Sign Up </button>
                <span className="form-input-login" >
                    Already have an account? <a href="http://localhost:3000/organizerSignIn">Sign In</a>
                </span>
            
            </form>
          
        </div>
        </div>
        </>
    )
}

export default SignUp
