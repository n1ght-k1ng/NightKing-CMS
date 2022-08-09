import Category  from '../models/Category';
 
import slugify from 'slugify'
import Post from '../models/post';

export const create = async(req , res ) =>{

    try{

        const {name } = req.body

        const category = await new Category({
            name , 
            slug: slugify(name)
        }).save()

        console.log(' req user ' + JSON.stringify(req.user))

        console.log(' category ' + JSON.stringify(category)) 

        res.json(category) // to receive the category in client
        

        console.log('create category' , req.body)

    }
    catch(err){
        console.error(err);
    }
}

export const categories = async (req, res) => {
 try{
    const categories = await Category.find().sort({ createdAt: -1 })  // puts the latest category on the top of the list
    res.json(categories) // to receive the category in client

    }

catch (err) {
    console.error(err);
}
}

export const removeCategory = async (req , res ) => {
    try{
        const { slug } = req.params;  // slug destructured from request params
        const category = await Category.findOneAndDelete({ slug}) // func to find and delete the category
        res.json(category) // to receive the category in client

    }
    catch (err) {
        console.error(err);
    }
}


export const updateCategory = async (req , res ) => {
    try{

        const { slug } = req.params; // slug destructured from request params
        const { name } = req.body; // name destructured from request params
        const category = await Category.findOneAndUpdate(
            { slug },
            { name, slug: slugify(name)},
            {new : true }   // new updates the cateegory 
            ) // func to update    the category
    
        res.json(category)

    }
    catch (err) {   console.log(err); }
}

export const postsByCategory = async (req, res) => {
    try{
       const { slug } = req.params
       const category = await Category.findOne({ slug}) 
        
       const posts = await Post.find({categories: category._id}).populate(
        "featuredImage postedBy" 
       ).limit(20)
       res.json({posts , category})
    }   
    catch (err) { console.log(err); } 
}
