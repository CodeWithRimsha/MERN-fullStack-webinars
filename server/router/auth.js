const express= require('express');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
//const { findOne } = require('../model/organizerSchema');
const router= express.Router();
require('../db/conn');      //dbconnection file
const Organizerdata= require('../model/organizerSchema');

router.get('/',(req, res)=>{
    res.send (` hello from auth file`);
});

router.get('/contact',(req, res)=>{
    res.send (`Contact`);
});
//whatever user write on front will be accept here
/*router.post('/register',(req, res)=>{

const{name, username, email, password, confirmpassword, interest, phoneno, accountno}= req.body;

if(!name|| !username||!email||!password||!confirmpassword||!interest||!phoneno||!accountno)
{
 return res.status(422).json({error:"empty"})   
}
Organizerdata.findOne({email:email}).then((userExist)=>{
    if(userExist){
        return res.status(422).json({error: "already exist"})
    }

    const organizerdata= new Organizerdata({name, username, email, password, confirmpassword, interest, phoneno, accountno})
    organizerdata.save().then(()=>{
        res.status(201).json({message:"Organizer Registered Successfully"});
    }).catch((err)=> res.status(500).json({error:"Failed while registration"}));
}).catch(err=>{
    console.log(err);
});
    //console.log(req.body);
    //res.json({message:req.body})
    //res.send('my register page')
});*/

router.get('/register',(req, res)=>{
    res.send (` hello from register`);
});


//now using with async await method
router.post('/register', async(req, res)=>{
const{name, username, email, password, confirmpassword, phoneno, profession, dob, interest}= req.body;
    

if(!name||!username||!email||!password||!confirmpassword||!phoneno||!profession||!dob||!interest)
{
    return res.status(422).json({error:"Please fill all the field properly"});
}
try{
    const userExist=await Organizerdata.findOne({email:email});
    if(userExist){
        return res.status(422).json({error:"Organizer Already Exist"})
    }
    else if(password != confirmpassword){
        return res.status(422).json({error:"Password is not matching"})
    }
    else{
    const organizerdata= new Organizerdata({name, username, email, password, confirmpassword,phoneno, profession, dob, interest })
   // const Organizerregister= await organizerdata.save();
   await organizerdata.save();
  //if(Organizerregister){
      res.status(203).json({message:"Organizer has been registered successfully"});
    //  console.log("Organizer Registered")
 // }else{
      //res.status(500).json({error:"Failed to Register"})
    }//else end
  }
catch(err){
    console.log(err);
}

})



//Now for login 
router.post('/signin', async (req, res)=>{


    try{
        let token;
        const{email,password}=req.body;


        if(!email || !password) {
            return res.status(400).json({error:"please fill all data"});
        } 
         else{
        const organizerLogin= await Organizerdata.findOne({email:email});

       if(organizerLogin){
     const isMatch = await bcrypt.compare(password, organizerLogin.password);
     token= await organizerLogin.generateAuthToken();
     console.log(token);


     //now add the cookies
     res.cookie("jwtoken",token,{
         expires:new Date(Date.now()+2589200000),
         httpOnly:true
     });
      
     if(isMatch){
        res.json({message:" login successfull"});
        }
        else { res.json({error:"cant login"}) }
       
       }

       else{
           res.status(400).json({error:"Can't find Organizer"});
       }
    }
    
    }catch(err){
        console.log(err);
    }
});













module.exports=router;
