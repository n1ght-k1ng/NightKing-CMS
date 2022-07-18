import expressJwt from 'express-jwt';
import User from '../models/user';

require("dotenv").config();


export const requireSignIn  = expressJwt({


     secret: process.env.JWT_SECRET ,
    algorithms: ["HS256"] 
})


export const isAdmin  = async (req, res ,next) => {

    try{
        const user = await User.findById(req.user._id);
        
        if(user.role != 'Admin'){
            return res.status(403).send("Access Denied, Be an Admin First") 
        

    }
    else {
        next()
    }
}
    catch(err){
        console.error(err);

    }
    
}
