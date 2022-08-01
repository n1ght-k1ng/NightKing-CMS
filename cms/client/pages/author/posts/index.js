import axios from 'axios';
import { useEffect , useState , useContext} from 'react';
import { PostContext } from '../../../context/post';
import { Button , Row , Col, List  } from "antd";
import AuthorLayout from "../../../components/layout/authorLayout";
import Link  from 'next/link'
import { useRouter } from 'next/router';
import { BorderHorizontalOutlined, PlusOutlined } from "@ant-design/icons";
import PostsList from '../../../components/posts/PostsList';

// const {Content , Sider} = Layout;



function Posts () {

    const [post , setPost ] = useContext(PostContext) // Using the global state 
    const router = useRouter()
    const { posts } = post;
    console.log("posts from context" , post)
    useEffect(() => {

        fetchposts()

    },[])

    const fetchposts = async () => {
        try{
            
            
            const { data } = await axios.get('/posts-by-author')
            
            setPost((prev) =>   ( {...prev,posts:data}) ) // updating the previous pre
            

        }
        catch(err)
        {   
            console.log(err)  
        }   
    
    }

    const handleEdit = async (post) => {
       return router.push(`/author/posts/${post.slug}`)
         }
    const handleDelete = async (post) => {

        try{
            const answer = window.confirm("Are you sure you want to delete this post?")
            if(answer) {
            const { data } = await axios.delete(`/post/${post._id}`);
            if(data.ok){
                setPost((prev)=> ({...prev, 
                    posts: prev.posts.filter((p)=> (p._id !== post._id),
                    )} ))
            }
            }
            else{
                return
            }
           

        }
        catch(err)  { console.log(err) }
        console.log("Delete" , post)

    
    }



    return(
        <AuthorLayout>

        <Row>
            <Col span = {24}>
                <Button type ="primary" style={{ margin: "10px 0px 10px 0px"}}>
                        <Link href='/author/posts/new' >
                            <a>
                                <PlusOutlined/> Add new 
                            </a>

                        
                        </Link>
                </Button>

                <h1 style ={{marginTop: 15 }}> {posts?.length} Posts </h1>

                <PostsList posts = {posts} handleEdit = {handleEdit} handleDelete = {handleDelete} />
            </Col>
        </Row>

        </AuthorLayout>
        
          
    )
}

export default Posts;