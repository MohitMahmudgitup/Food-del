import express from "express";
import { addToCart , removeFromCart , getCart} from "../Controllers/cart-controlle.js";
import authMiddleware from "../Middlewares/auth-middleware.js";

const cartRouter = express.Router()

cartRouter.post("/add" ,authMiddleware , addToCart);
cartRouter.post("/remove" ,authMiddleware , removeFromCart);
cartRouter.post("/getC" ,authMiddleware , getCart);

export default cartRouter