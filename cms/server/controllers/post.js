import cloudinary from 'cloudinary'
import Post from '../models/post'
import slugify from 'slugify'
import Category from '../models/category'

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


export const createPost = async (req ,res) =>{
    try{
        
        const {title,initialValuee,categories} = req.body



        const alreadyExist = await Post.findOne({slug: slugify(title.toLowerCase())})

        if(alreadyExist) {
            return res.json({error : " Title already exists"})
        }


        // get Categories ID from category array

        let ids = []


        for(let i =0 ; i< categories.length; i++) {
            Category.findOne({
                name: categories[i]
                        }).exec((err,data)=>{
                            if(err) return console.error(err);
                            ids.push(data._id);
                        })  // e
                // ids.push(Category.id)

        }

        setTimeout(async() => {
            try
            { 
                
                const post = await new Post({
                title,
                slug: slugify(title),
                initialValuee,
                categories: ids,
                postedBy: req.user._id,
            }).save()

            return res.json(post)

        }
        catch(err) {console.log(err); }

           
            
             
            
        },1000)



    }
    catch(err) { console.log(err) }
}