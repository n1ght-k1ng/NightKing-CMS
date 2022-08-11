import express from 'express';
const router = express.Router();
import  {requireSignIn , isAdmin} from '../middlewares'
import { website , createpage , getpage } from "../controllers/website"

router.post('/contact/' , website);
router.post('/page' ,  requireSignIn, isAdmin , createpage )
router.get('/page/:page' , getpage )
export default router