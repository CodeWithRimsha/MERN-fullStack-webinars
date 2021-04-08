import React , {useState} from 'react'
import './OSU.css'


export default function OSU() {

    let name, value;


    const [user, setUser] =useState({name: "",username:"", email:"",password:"", confirmpassword:"",phoneno:"",profession:"", dob:"", interest:""})
    
    const handleChange=(e)=>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
    setUser({...user,[name]:value})
    
    }

const PostData=async (e)=>{
    e.preventDefault();
    const {name,username, email,password, confirmpassword,phoneno,profession, dob, interest}=user;
    const res= await fetch('/register', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,username, email,password, confirmpassword,phoneno,profession, dob, interest
        })
    });

    const data= await res.json();
    if(res.status=== 422 || !data ){
        window.alert("Failed");
        console.log("Failed");
    }
    else{
        window.alert("Success");
        console.log("Success");
    }

}

    return (
        <div className="back">

       <h2>Organizer</h2>
<form method="POST">

<input type ="text"  name ="name"placeholder="Name" value={user.name} onChange={handleChange}></input>
<input type ="text" name="username" placeholder="UserName" value={user.username} onChange={handleChange}></input>
<input type ="text" name="email" placeholder="Email" value={user.email} onChange={handleChange}></input>
<input type ="text" name="password" placeholder="Password" value={user.password} onChange={handleChange}></input>
<input type ="text"  name="confirmpassword"placeholder="Confirm Password" value={user.confirmpassword} onChange={handleChange}></input>
<input type ="text" name="phoneno"placeholder="Phone No" value={user.phoneno} onChange={handleChange}></input>
<input type="date" name="dob" placeholder="date of birth" value={user.dob} onChange={handleChange}></input>
<select name="profession" value={user.profession} onChange={handleChange}>

  <option vaue="Audit">Auditor</option>
  <option value="Scholar">Scholar</option>
  <option value="Teacher">Teacher</option>
  <option value="Singer">Singer</option>
  <option value="Speaker">Speaker</option>
  <option value="Web Developer">Web Developer</option>
</select>


<select  name="interest"value={user.interest} onChange={handleChange}>

  <option vaue="Motivational">Motivational</option>
  <option value="Religious">Religious</option>
  <option value="Educational">Educational</option>
  <option value="Entertainment">Entertainment</option>

</select>

<button className="form-input-btn" type="submit" onClick={PostData} > Sign Up </button>
</form>
</div>
    )
}
