import mongoose from 'mongoose'
import dotenv from 'dotenv'
import posts from './data/post.js'
import Post from './models/postModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async ()=>{

    try{
        await Post.deleteMany()

        await Post.insertMany(posts)

        console.log('Data Imported!')
        process.exit()

    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

importData()

