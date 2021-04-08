const mongoose= require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken');
const organizerSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
           // minlength: 3,
            //maxlength: 50
        },
        username:{
            type: String,
            required: true,
          //  minlength: 5,
          //  maxlength: 255,
            unique: true
        },
        email:{
            type: String,
            required: true,
           // minlength: 7,
           // maxlength: 255,
            unique: true
        },
        password:{
            type: String,
            required: true,
          //  minlength: 5,
           // maxlength: 1024
        },
        confirmpassword:{
            type: String,
            required: true,
          //  minlength: 5,
          //  maxlength: 1024
        },

        phoneno:{
            type: Number,
            required: true,
           // minlength: 11
        },

       profession:{
           type:  String,
           required: true
       },
       dob:{
           type: String,
           requires: true
       },
    
       interest:{
        type: String,
        required: true
    },

        tokens:[
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    }
)





organizerSchema.pre('save', async function(next){

//agar user ny password field mein kuch type kiya
//to tab hi ye hash hoga warna koi farak nhi

if(this.isModified('password')){
    //this.password=bcrypt.hash(this.password,12);
  //this.confirmpassword=bcrypt.hash(this.confirmpassword,12);

  this.password= await bcrypt.hash(this.password,12);
  this.confirmpassword= await bcrypt.hash(this.confirmpassword,12);

}
next();
});

//save password cookies

organizerSchema.methods.generateAuthToken= async function(){
    try{
//how to generate token
let token=jwt.sign( {_id: this._id}, process.env.SECRET_KEY);
this.tokens=this.tokens.concat({token: token});
await this.save();
return token; 

    }catch(err){
        console.log(err);
    }
}

const Organizerdata= mongoose.model('Organizerdata', organizerSchema);
module.exports=Organizerdata;