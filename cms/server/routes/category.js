import express from "express";

const router = express.Router();



// controllers

import {create } from "../controllers/category"
 
router.post('/category',create)

// the fuction in the middle is called middleware , so when we call next() the code in 'create' will be executed

export default router