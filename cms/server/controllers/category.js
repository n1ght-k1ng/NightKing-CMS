export const create = async(req , res ) =>{

    try{
        console.log('create category' , req.body)

    }
    catch(err){
        console.error(err);
    }
}