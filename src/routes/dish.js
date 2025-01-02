import { Router } from "express";
import { addDish, getDishes } from "../controllers/dish.js";
import multer from "multer";

const router = Router();

// image
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        return cb(null, "./public/uploads")
    },
    filename: (req, file, cb)=>{
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1E9);
        console.log(uniqueName)
        return cb(null, `${uniqueName}-${file.originalname}`)
    }
})

const upload = multer({storage: storage});

router.post("/add-dish", upload.single("dishImage"), addDish)
router.get("/get-dishes", getDishes);


export default router;