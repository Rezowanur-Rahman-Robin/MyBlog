import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import blogRoutes from "./routes/blogRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//allow us to post json data on the body.

const port = process.env.PORT || 5009;

app.use("/api/posts", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

//for making the upload folder static
const __dirname = path.resolve();

// console.log(path.join(__dirname,'../uploads'))

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get('/',(req,res)=>{
    res.send(`Api is running properly on port:${port}`)
})
// console.log(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
// console.log(express.static(path.join(__dirname, '/frontend/build')))

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// }
//app.use(express.static(__dirname + '/public'));

app.use(notFound); //middleware

app.use(errorHandler);

app.listen(port, console.log(`Server running: ${port}`));
