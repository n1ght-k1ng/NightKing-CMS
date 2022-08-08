import express from 'express';
const router = express.Router();

import { website } from "../controllers/website"

router.post('/contact/' , website);


export default router