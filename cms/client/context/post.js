import { useState , createContext} from 'react'

const PostContext = createContext();

const PostProvider = (props) => {
    //
    const[post, setPost] = useState(   // Using the same variable name everywhere is needed
         {
            posts: [],
            categories: []

        }
    );
 ;

    return(
        <PostContext.Provider value={[post,setPost]}>
            {props.children}
        </PostContext.Provider>

    );
} 

export {PostContext , PostProvider};