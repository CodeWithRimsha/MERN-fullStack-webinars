import React from "react";
import "./SignIn.css";



export default function SignIn()
{
  return(
    <>
      <section>
       <div className="imagebox">
       <img src="./images/img1.jpg" alt="signinimage" />
       </div>
       <div className="ContentBox">
       <div className="formBox">
<form>

{/*INPUT USERNAME*/}
  <div className="inputBox">
    <span>Username</span>
    <input type="text" name=" "/>
  </div>
  {/**INPUT PASSWORD*/}
  <div className="inputBox">
    <span>Password</span>
    <input type="password" name=" "/>
  </div>
   {/*Remember me*/}
   <div className="remember">
     <label><input type="checkbox"/>Remember me</label>
   </div>
    {/**SIGN IN BUTTON*/}
  <div className="inputBox">
    <input type="submit" value="Sign In" name=" "/>
  </div>
  {/*Have account or not*/}
  <div className="inputBox">
      <p>Don't have an account? <a href="#">Sign up</a></p>
  </div>
  </form>
           <h3>Login with social media</h3>
           <ul className="sci">
            <li><img src="./images/google.png" width="40px" height="40px"/></li>
             <li><img src="./images/facebook.png" width="40px" height="40px"/></li>
             <li><img src="./images/twitter.png " width="50px" height="50px"/> </li>
             <li><img src="./images/insta.png" width="40px" height="40px"/></li>
           </ul>
         </div>
       </div>
      </section>
    </>
  );
}
     

