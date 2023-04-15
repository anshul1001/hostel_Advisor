import express from 'express';
import  cors  from 'cors' 
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app=express();
app.use(cors({
    origin:["http://localhost:3000"],
    method: ["GET","POST"],
    credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.json());

app.use("/server/posts",postRoutes) 
app.use("/server/users",userRoutes) 
app.use("/server/auth",authRoutes) 

app.listen(3001,()=>{
    console.log("listening......");
});
