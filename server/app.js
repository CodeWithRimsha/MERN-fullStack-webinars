

const express= require('express');
const dotenv= require('dotenv');
const mongoose= require ('mongoose');
const app=express();

dotenv.config({path: './config.env'});
require('./db/conn');
//to convert it into json to applicATION FORMAT
app.use(express.json());
//const route= require('./router/auth');
const router= require('./router/auth');

app.use(router);


//const organizer= require('./model/organizerSchema');


//we are using dot env to secure our password api keys
//const DB=process.env.DATABASE;
const PORT = process.env.PORT;

const middleware=(req, res, next)=>{
    console.log("My middleware");
 
}

middleware();


app.get('/', (req, res)=>{
    res.send(`hello this is res.send`)
})
app.get('/contact',(req, res)=>{
    res.cookie("test","rimsha");
    res.send(`hello contact page`);
})
app.get('/about',middleware,(req, res)=>{
    res.cookie("test","rimsha");
    res.send(`Middleware not about`)
    console.log("About")
})

app.listen(PORT,()=>{
    console.log(`server ${PORT} is here`)
    console.log("rimsha")
})