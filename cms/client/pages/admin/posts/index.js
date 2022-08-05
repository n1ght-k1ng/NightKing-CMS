import axios from 'axios';
import { useEffect , useState , useContext} from 'react';
import { PostContext } from '../../../context/post';
import { Button , Row , Col, List , Input } from "antd";
import AdminLayout from "../../../components/layout/adminLayout";
import Link  from 'next/link'
import { useRouter } from 'next/router';
import { BorderHorizontalOutlined, PlusOutlined } from "@ant-design/icons";
import PostsList from '../../../components/posts/PostsList';
import { AuthContext } from '../../../context/auth';
import Search from 'antd/lib/transfer/search';
// const {Content , Sider} = Layout;



function Posts () {

    const [post , setPost ] = useContext(PostContext) // Using the global state 
    const router = useRouter()
    const [keyword , setKeyword] = useState('')
    const { posts } = post;
    const [ auth, setAuth ] = useContext(AuthContext)
    console.log("posts from context" , post)
    useEffect(() => {

        if(auth?.token) fetchposts()

    },[auth?.token])

    const fetchposts = async () => {
        try{
            
            
            const { data } = await axios.get('/posts-for-admin')
            
            setPost((prev) =>   ( {...prev,posts:data}) ) // updating the previous pre
            

        }
        catch(err)
        {   
            console.log(err)  
        }   
    
    }

    const handleEdit = async (post) => {
       return router.push(`/admin/posts/${post.slug}`)
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
        <AdminLayout>

        <Row>
            <Col span = {24}>
                <Button type ="primary" style={{ margin: "10px 0px 10px 0px"}}>
                        <Link href='/admin/posts/new' >
                            <a>
                                <PlusOutlined/> Add new 
                            </a>

                        
                        </Link>
                </Button>

                <h1 style ={{marginTop: 15 }}> {posts?.length} Posts </h1>

                <Input placeholder = "Search" type= 'search' value={keyword} onChange={e => setKeyword(e.target.value.toLowerCase())}/>

                <PostsList posts = {posts.filter((p) => p.title.toLowerCase().includes(keyword))} handleEdit = {handleEdit} handleDelete = {handleDelete} />
            </Col>
        </Row>

        </AdminLayout>
        
          
    )
}

export default Posts;