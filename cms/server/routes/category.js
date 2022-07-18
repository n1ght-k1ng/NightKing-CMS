import express from "express";
import { requireSignIn , isAdmin } from "../middlewares";


const router = express.Router();




// controllers

import {create } from "../controllers/category"
 
router.post('/category',requireSignIn,isAdmin,create)

// the fuction in the middle is called middleware , so when we call next() the code in 'create' will be executed

export default router