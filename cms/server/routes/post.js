import express from "express";
import { requireSignIn , isAdmin } from "../middlewares";


const router = express.Router();




// controllers

import {uploadImage} from "../controllers/post"

 
router.post('/post',requireSignIn,isAdmin,uploadImage)

export default router