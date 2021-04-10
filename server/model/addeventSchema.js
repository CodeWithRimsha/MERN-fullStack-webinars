const mongoose= require('mongoose');
const addeventSchema= new mongoose.Schema(
    {
        eventimg: { data: Buffer, contentType: String},
        name:{contentType:String, required:true},
        category:{contentType:String, required:true},
        description:{contentType:String,required:true},
        date:{contentType:String,required:true},
        time:{contentType:String,required:true},
    }
)


const addEventdata= mongoose.model('addEventdata', addeventSchema);
module.exports=addEventdata;