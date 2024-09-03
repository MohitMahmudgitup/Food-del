import express from "express";
import { loginUser , registerUser } from "../Controllers/user-controlle.js";

const userRouter = express.Router()

userRouter.post("/register" , registerUser)
userRouter.post("/login" , loginUser)
// userRouter.post("/editUser" , editUser)
// userRouter.post("/deleteUser" , deleteUser)



export default userRouter
