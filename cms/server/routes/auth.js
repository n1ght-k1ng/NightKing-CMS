
import express from "express";
import { requireSignIn , isAdmin} from "../middlewares";
import { currentUser } from "../controllers/auth"

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
export default router;
