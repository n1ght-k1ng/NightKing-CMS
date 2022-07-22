import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
    
})

export const uploadImage = async(req, res) => {
    try {   
        const result = await cloudinary.uploader.upload(req.body.image)
        res.json({url: result.secure_url})


    }
    catch(err) {   console.log(err)}
}


