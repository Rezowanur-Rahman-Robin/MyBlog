import express from 'express';
import path from 'path';
import blogRoutes from './routes/blogRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import userRoutes from './routes/userRoutes.js';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';



dotenv.config()

connectDB();




const app = express();


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

//allow us to post json data on the body.

const port = process.env.PORT || 5009;

app.use('/api/posts',blogRoutes)
app.use('/api/users',userRoutes)
app.use('/api/upload',uploadRoutes)


//for making the upload folder static
const __dirname = path.resolve()

// console.log(path.join(__dirname,'../uploads'))

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

// app.get('/',(req,res)=>{
//     res.send(`Api is running properly on port:${port}`)
// })


if(process.env.NODE_ENV ==="production"){
    app.use(express.static('/frontend/build'))
//     app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
}

app.use(notFound)//middleware

app.use(errorHandler)


app.listen(port, console.log(`Server running: ${port}`))