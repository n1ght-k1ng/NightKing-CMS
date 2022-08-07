import expressJwt from 'express-jwt';
import Post from '../models/post';
import User from '../models/user';
import Media from '../models/media';
import Comment from '../models/comment'

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

export const isAuthor  = async (req, res ,next) => {

    try{
        const user = await User.findById(req.user._id);
        
        if(user.role != 'Author'){
            return res.status(403).send("Unauthorized") 
        

    }
    else {
        next()
    }
}
    catch(err){
        console.error(err);

    }
    
}

export const canCreateRead = async (req, res, next) => {
    try{
        const user  = await User.findById(req.user._id)
        switch(user.role){
            case "Admin":   
            next()
            break
            case "Author": 
            next()
            break
            default:
                res.status(403).send("Unauthorized")
        }

    }catch(err) { console.log(err)  }
}

export const canUpdateDeletePost = async (req, res, next) => {
    try{
        const user  = await User.findById(req.user._id)
        const post = await Post.findById(req.params.postId)

        switch(user.role){
            case 'Admin':
                next()
                break
            case "Author":
                if(post.postedBy.toString() !== user._id.toString())
                {
                    return res.status(403).send("Unauthorized")
                }
                else{
                    next()
                }
                break
            default:
                return res.status(403).send("Unauthorized")
        
    }
    }

    catch(err) 
    { console.log(err) }


}

export const canDeleteMedia = async (req, res, next) => {
    try{
        const user  = await User.findById(req.user._id)
        const media = await Media.findById(req.params.id)
        console.log("params " , media.postedBy.toString())
        console.log("user " , user._id.toString())
       
        switch(user.role){
            case "Admin":
                next()
                break
            case "Author":
                if(media.postedBy.toString() !== user._id.toString())
                {
                    return res.status(403).send("Unauthorized")
                }
                else{
                    next()
                }
                break



        }
    }
    catch(err) { console.log(err) }

}

export const canUpdateDeleteComment = async ( req, res, next ) => {
    try{
        const { commentId } = req.params
        const comment = await Comment.findById(commentId)
        const user = await User.findById(req.user._id)

        switch(user.role){
            case "Admin":
                next()
                break
            case "Author":
                if(comment.postedBy.toString() === req.user._id.toString()){
                    next()
                }
                break
            case "Subscriber":
                if(comment.postedBy.toString() === req.user._id.toString()){
                    next()
                }
                break
            default:
                return res.status(403).send("Unauthorized") 
        }
    }
    catch(err) { console.log(err) }
}