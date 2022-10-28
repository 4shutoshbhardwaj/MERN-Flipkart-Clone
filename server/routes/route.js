import express from "express";
import { userSingup,userLogin } from "../controller/user-controller.js";

const router=express.Router();

router.post("/signup",userSingup);
router.post("/login",userLogin);
// router.get("/products",getProducts);

export default router;