import express from "express";
import { requireSignIn , isAdmin } from "../middlewares";


const router = express.Router();




// controllers

import {uploadImage , createPost , posts} from "../controllers/post"

 
router.post('/post',requireSignIn,isAdmin,uploadImage)
router.post("/create-post",requireSignIn,isAdmin, createPost)
router.get("/post", posts)



export default router