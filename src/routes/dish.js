import { Router } from "express";
import { addDish } from "../controllers/dish.js";
import multer from "multer";

const router = Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        return (cb, "./public/uploads");
    },
    filename: (req, file, cb)=>{
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueName}-${file.originalname}`)
    }
})

const upload = multer({storage})

router.post("/add-dish", upload.single('dishImage'), addDish)
// router.get("/", ())


export default router;