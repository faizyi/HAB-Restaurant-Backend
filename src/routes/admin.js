import { Router } from "express";
import { adminLogin, adminSignup } from "../controllers/admin.js";

const router = Router();

router.post("/signup", adminSignup);
router.post("/login", adminLogin);

export default router;

