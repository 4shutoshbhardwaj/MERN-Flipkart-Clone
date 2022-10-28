import express from "express";
import { userSingup,userLogin } from "../controller/user-controller.js";
import { getProducts } from "../controller/product-controller.js";

const router=express.Router();

router.post("/signup",userSingup);
router.post("/login",userLogin);
router.get("/products",getProducts);

export default router;