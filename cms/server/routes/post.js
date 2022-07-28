import express from "express";
import { requireSignIn , isAdmin } from "../middlewares";
import formidable from "express-formidable"


const router = express.Router();




// controllers

import {uploadImage , createPost , posts, uploadImageFile , media, removeMedia , SinglePost , removePost , updatePost} from "../controllers/post"


 
router.post('/post',requireSignIn,isAdmin,uploadImage)
router.post("/upload-image-file" , formidable(), requireSignIn,isAdmin,uploadImageFile) 
router.post("/create-post",requireSignIn,isAdmin, createPost)
router.get("/posts", posts)
router.get('/media' , requireSignIn,isAdmin,media)
router.get('/post/:slug',SinglePost)
router.delete("/media/:id" , requireSignIn,isAdmin, removeMedia)
router.delete('/post/:postId', requireSignIn,isAdmin, removePost)
router.put(`/edit-post/:postId`, requireSignIn,isAdmin, updatePost)

export default router