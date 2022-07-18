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