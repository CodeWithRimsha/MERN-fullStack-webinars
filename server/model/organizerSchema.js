const mongoose= require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken');
const organizerSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        confirmpassword:{
            type: String,
            required: true
        },
        interest:{
            type: String,
            required: true
        },
       

        phoneno:{
            type: Number,
            required: true
        },
        accountno:{
            type: Number,
            required: false
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