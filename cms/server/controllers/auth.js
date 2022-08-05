
import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import nanoid from "nanoid";
import validator from 'email-validator'

import toast  from "react-hot-toast"
// sendgrid
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

export const signup = async (req, res) => {
  console.log("HIT SIGNUP");
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      

      console.log("user saved ",user);
      
      const { password, ...rest } = user._doc;
      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        err: "No user found",
      });
    }

    
    // check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const forgotPassword = async (req, res) => {

  
  const { email } = req.body;
  console.log(email);
  // find user by email
  const user = await User.findOne({ email });
  console.log("USER ===> ", user);
  if (!user) {
    return res.json({ error: "User not found" });
  }
  // generate code
  const resetCode = nanoid(5).toUpperCase();
  // save to db
  user.resetCode = resetCode;
  user.save();
  // prepare email
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "Password reset code",
    html: `<h1>Your password  reset code is: ${resetCode}</h1>`
  };
  // send email
  try {
    const data = await sgMail.send(emailData);
    console.log(data);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.json({ ok: false });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, password, resetCode } = req.body;
    // find user based on email and resetCode
    const user = await User.findOne({ email, resetCode });
    // if user not found
    if (!user) {
      return res.json({ error: "Email or reset code is invalid" });
    }
    // if password is short
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.resetCode = "";
    user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {

  try{  
      const user = await User.findById(req.user._id)
      res.json({ok: true})
  }
  catch (err) {
    console.log(err);


  }
}

export const createUser = async (req, res) => {
  try{
      // console.log(req.body)
      const { name , email , password , role , checked , Website} = req.body
      if(!name){
        return res.json({
          error: "Name is required"
        })
      }
      if(!email || validator.validate({email})){
       return res.json({
          error: "Please enter a valid email address"
        })
      }
      if(!password || password.length < 6){
        return res.json({
          error: "Password must be at least 6 characters long"
        })
      }
      // if user exists
      const exist = await User.findOne({ email})
      if(exist){
        return res.json({error: "Email is taken already"}) 
      }
      const hashedPassword = await hashPassword(password)
      if(checked){
        //prepare
        const emailData ={
          to: email,
          from: process.env.EMAIL_FROM,
          subject: 'Account Created',
          html: `<h1> Welcome to NightKing-CMS ${name}</h1>
          <p> Your account has been created successfully! </p>
          <h3> Your login details  </h3>
          <p style = "color:red"> Email: ${email}</p>
          <p style = "color:red"> Password: ${password}</p>
          
          

          `
        }
        try{
          const data = await sgMail.send(emailData)
          console.log("email sent => ", data)
        }
        catch(err){ console.log(err)  }
     }
      try{
         const user = await new User({
         name , email ,password: hashedPassword , role , Website
         }).save()
        
         const { password, ...rest} = user._doc
         return res.json(rest)

      }
      catch(err){ console.log(err)  }
  }
  catch (err) { console.log(err)  }
}


export const users = async (req, res) => {

  try{
      const all  =  await User.find().select('-password -secret -resetCode')
      res.json(all)               
  }
  catch(err){ console.log(err) }
}

export const deleteUser = async (req, res) => {
  try{  
    const { userid } = req.params;

    if(userid === req.user._id){
      return
    }
    else{
      const del = await User.findByIdAndDelete(userid)
    }
    

    res.json({success: true})
    


  }
  catch(err){ console.log(err) }
}

export const currentUserProfile = async (req, res) => {
  try{
    const user = await User.findById(req.params.userid).populate('image')
    res.json(user)

  }
  catch(err){ console.log(err) }  
}

export const UpdateUserbyAdmin = async (req, res) => {
  try{
    const { id, name , email , password , Website , role , image } = req.body

    console.log("Request received " ,  req.body)

    const userFromDb = await User.findById(id)

    //check email / email taken ? / check password length
    if(!validator.validate(email)){
      return res.json({error: 'Invalid email'})
    }
    const exist = await User.findOne({ email })
    if(exist && exist._id.toString() !== userFromDb._id.toString())
    {
      return res.json({error: 'Email is taken'})

    }
    if(password && password.length < 6)
    {
      return res.json({error: 'Password must be at least 6 characters long'})
    }

    console.log('HERE WE ARE')
    
    const hashedPassword = password ? await hashPassword(password) : undefined
    console.log('HERE WE ARE', hashedPassword , password)
    const updated = await User.findByIdAndUpdate(
      id,
      {
      name : name || userFromDb.name,
      email: email || userFromDb.email,
      password: hashedPassword || userFromDb.password,
      website: Website || userFromDb.website,
      role: role || userFromDb.role,
      image: image || userFromDb.image,
    },
    {new: true}
    ).populate("image")

    res.json(updated)
  }

  catch(err){ console.log(err) }

}
export const UpdateUserbyUser = async (req, res) => {
  try{
    const { id, name , email , password , Website , role , image } = req.body

    console.log("Request received " ,  req.body)

    const userFromDb = await User.findById(id)

  //check if user is authenticated
  if(userFromDb._id.toString() !== req.user._id.toString()){
    return res.status(403).send("You are not allowed to update this user")
  }

    //check email / email taken ? / check password length
    if(!validator.validate(email)){
      return res.json({error: 'Invalid email'})
    }
    const exist = await User.findOne({ email })
    if(exist && exist._id.toString() !== userFromDb._id.toString())
    {
      return res.json({error: 'Email is taken'})

    }
    if(password && password.length < 6)
    {
      return res.json({error: 'Password must be at least 6 characters long'})
    }

    console.log('HERE WE ARE')
    
    const hashedPassword = password ? await hashPassword(password) : undefined
    console.log('HERE WE ARE', hashedPassword , password)
    const updated = await User.findByIdAndUpdate(
      id,
      {
      name : name || userFromDb.name,
      email: email || userFromDb.email,
      password: hashedPassword || userFromDb.password,
      website: Website || userFromDb.website,
      // role: role || userFromDb.role,
      image: image || userFromDb.image,
    },
    {new: true}
    ).populate("image")

    res.json(updated)
  }

  catch(err){ console.log(err) }

}