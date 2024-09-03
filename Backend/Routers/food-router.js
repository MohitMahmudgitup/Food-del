import express from "express";
import { addFood , listFood, removeFood} from "../Controllers/food-controlle.js";
import multer from "multer";
const router = express.Router()

//Image Storage Engine


const storage = multer.diskStorage({
    destination: "uploads",
    filename: function (req, file, cb) {
      const uniqueSuffix = `${Date.now()}-${file.originalname}`
      cb(null, uniqueSuffix)
    }
  })
const upload = multer({storage})
  

router.post("/add", upload.single("image"), addFood);
router.get("/list" , listFood)
router.post("/remove" , removeFood)





export default router