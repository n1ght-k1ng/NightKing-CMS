import Category  from '../models/Category';
 
import slugify from 'slugify'

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
