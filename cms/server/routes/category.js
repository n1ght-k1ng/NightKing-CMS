import express from "express";
import { requireSignIn , isAdmin } from "../middlewares";


const router = express.Router();




// controllers

import {create , categories , removeCategory , updateCategory} from "../controllers/category"

 
router.post('/category',requireSignIn,isAdmin,create)
router.get("/categories",categories) 
router.delete('/category/:slug' ,requireSignIn , isAdmin, removeCategory) 
router.put("/category/:slug",requireSignIn,isAdmin, updateCategory)
// the fuction in the middle is called middleware , so when we call next() the code in 'create' will be executed

export default router