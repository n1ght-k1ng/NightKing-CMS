
require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import next from '../client/node_modules/next'
import authRoutes from "./routes/auth";

import  categoryRoutes from '../server/routes/category';

import postRoutes from "../server/routes/post"
import websiteRoutes from "../server/routes/website"

const morgan = require("morgan"); // middle ware to print details "POST /api/signup 200 375.101 ms - 380"

const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev")); 



// route middlewares
app.use("/api", authRoutes);
app.use("/api", categoryRoutes) 
app.use("/api", postRoutes)
app.use("/api", websiteRoutes)    // category routes are now part of the endpoints

app.listen(8000, () => console.log("Server running on port 8000"));
