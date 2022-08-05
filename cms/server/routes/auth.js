
import express from "express";
import { requireSignIn , isAdmin , isAuthor} from "../middlewares";
import { currentUser , createUser ,users, deleteUser, currentUserProfile , UpdateUserbyAdmin,UpdateUserbyUser} from "../controllers/auth"

const router = express.Router();



// controllers


const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get('/current-admin',requireSignIn,isAdmin,currentUser)
router.get('/current-author',requireSignIn,isAuthor,currentUser)
router.post("/create-user",requireSignIn,isAdmin,createUser);
router.get('/current-subscriber',requireSignIn,currentUser)
router.get('/users', requireSignIn,isAdmin , users)
router.delete("/user/:userid", requireSignIn,isAdmin,deleteUser);
router.get('/user/:userid', requireSignIn , currentUserProfile) 
router.put('/update-user-by-admin', requireSignIn, isAdmin, UpdateUserbyAdmin)
router.put('/update-user-by-user', requireSignIn, UpdateUserbyUser)
export default router;
