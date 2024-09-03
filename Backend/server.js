import express from "express";
import cors from "cors";
import {connectDB} from "./Config/mongodb-connect.js"
import dotenv from 'dotenv';
import router from "./Routers/food-router.js";
import userRouter from "./Routers/user-router.js";
import cartRouter from "./Routers/cart-router.js";



//app config
const app = express();
const post = 3000;

//middleware
app.use(express.json());
app.use(cors());
dotenv.config();

//MongoDB Connect
connectDB();

//API in points
app.use("/api/food",router)
app.use("/image", express.static("uploads"))
app.use("/user",userRouter)
app.use("/api/cart" , cartRouter)

app.get ("/",(req,res)=>{
    res.send("hello world")
})
app.listen(post,()=>{
    console.log(`Server is runing http://localhost:${post}`)
})

