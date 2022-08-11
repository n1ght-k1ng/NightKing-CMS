const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

import Website from '../models/website'

export const website = async (req, res) => {
    try{
        const { Name , Email , Message} = req.body 
        const emailData ={
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_FROM,
            subject: " Email received from contact form",
            html:`<h3> Contact Form Message</h3>
            <p><u>Name</u></p>
            <p> ${Name} </p>
            <p><u>Email</u></p>
            <p> ${Email} </p>
            <p><u>Message</u></p>
            <p> ${Message} </p>`,}
            console.log(emailData)
            try{
                const data = await sgMail.send(emailData)
                res.json({ok: true})    
            }
            catch(err){ console.log(err)}
        }
        catch(err){ console.log(err) }
}

export const createpage = async (req, res) => {
    try{
        const { page } = req.body
        const found = await Website.findOne({ page })
        if(found){
            const updated = await Website.findOneAndUpdate({ page } , req.body , {
                new: true
            })
            return res.json(updated)

        } else {
            const created = await new Website(req.body).save()
            return res.json(created)
        }
    }
    catch(err){ console.log(err) }
}

export const getpage = async (req, res) => {
    try{
        const { page } = req.params;
        const found = await Website.findOne({ page }).populate("fullWidthImage")
        return res.json(found)

    }
    catch(err){ console.log(err) }
}

