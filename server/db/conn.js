const mongoose= require ('mongoose');
const express= require('express');
const dotenv= require('dotenv');


const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(
    ()=>{
        console.log (`connection build`)
    }

).catch((err)=>console.log(`connection fail`))


//module.exports= conn;