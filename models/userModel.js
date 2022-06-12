import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
    
    
},{
    timestamps:true
})

userSchema.methods.matchPassword = async function(enteredPassword){
       return await bcrypt.compare(enteredPassword,this.password);
}

//hashing the passWord
userSchema.pre('save',async function(next){

    //just check that if the password is modified or not.Otherwise when to update te name and email at that time automatic user has been created.
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})  

const User = mongoose.model('User',userSchema)

export default User;