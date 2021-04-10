
const express= require('express');
const router= express.Router();
require('../db/conn');    
const addEventdata= require('../model/addeventSchema');
router.post('/addeventform', async (req, res)=>{

    const{eventimg,name,category,description,date,time}=req.body;
    if(!eventimg ||!name||!category||!description||!date||!time){
        return res.status(422).json({error:"Please fill all the field properly"});
    }try{

        const Eventdata= new addEventdata({eventimg,name,category,description,date,time})
        await Eventdata.save();
        res.status(203).json({message:"Event has been added successfully"});
   
    }catch(err){
    console.log(err);
}

})
module.exports=router;