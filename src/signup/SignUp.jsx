import React from "react";
import "./SignUp.css";



function SignUp()
{
  return(
    <>
      <div className="container">
    <section>
   <div className="ContentBox">
   <div className="formBox">
<form>
<h2>SIGN UP</h2>
{/*INPUT USERNAME*/}
  <div className="inputBox">
    <span>Email</span>
    <input type="text" name=" "/>
  </div>
  {/**INPUT PASSWORD*/}
  <div className="inputBox">
    <span>Password</span>
    <input type="password" name=" "/>
  </div>
  {/**INPUT PASSWORD*/}
  <div className="inputBox">
    <span>Confirm Password</span>
    <input type="password" name=" "/>
  </div>
   {/*Remember me
   <div className="remember">
     <label><input type="checkbox"/>Remember me</label>
   </div>*/}
    {/**SIGN UP BUTTON*/}
  <div className="inputBox">
    <input type="submit" value="Sign Up" name=" "/>
  </div>
  {/*Have account or not*/}
  <div className="inputBox">
      <p>Already a member? <a href="#">Sign In</a></p>
  </div>
  </form>
         </div>
       </div>
       <div className="imagebox">
       <img src="./images/img4.jpg" alt="signinimage" />
       </div>
      </section>
      </div>
    </>
  );
}
     

export default SignUp;
