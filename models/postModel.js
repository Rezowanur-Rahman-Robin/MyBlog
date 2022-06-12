import mongoose from 'mongoose';



const commentSchema = mongoose.Schema(
    {
        name:{type:String , required:true },
        email : { type: String, required:true },
        commentContents : { type:String },
        like : { type:Number },
        date : { type : Date, default: Date.now }

        
    }
,{
    timestamps:true
})

const postSchema = mongoose.Schema({
    catagory:{
        type:String,
        required:true
    },

    language:{
        type:String,
    },

    pinnedPost:{
        type:Boolean,
        default: false
    },

    mainTitle:{
        type:String,
        required:true
    },

    subTitle:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    shortDesc:{
        type:String,
        required:true
    },

    postContents:{
        type:String,
        required:true
    },

    totalReading:{
        type:Number,
        required:true,
        default: 0,
    },

    comments:[commentSchema,{timestamps:true}],

    

    
    
},{
    timestamps:true
})

const Post = mongoose.model('Post',postSchema)

const Comment = mongoose.model('Comment',commentSchema)

export default Post

export {
   
    Comment,
} ;