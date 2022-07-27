import axios from 'axios';
import { useEffect , useState , useContext} from 'react';
import { PostContext } from '../../../context/post';
import { Button , Row , Col, List  } from "antd";
import AdminLayout from "../../../components/layout/adminLayout";
import Link  from 'next/link'
import { BorderHorizontalOutlined, PlusOutlined } from "@ant-design/icons";

// const {Content , Sider} = Layout;



function Posts () {

    const [post , setPost ] = useContext(PostContext) // Using the global state 

    const { posts } = post;
    console.log("posts from context" , post)
    useEffect(() => {

        fetchposts()

    },[])

    const fetchposts = async () => {
        try{
            const { data } = await axios.get('/posts')
            setPost((prev) =>   ( {...prev,posts:data}) ) // updating the previous pre
            

        }
        catch(err)
        {   
            console.log(err)  
        }   
    
    }

    const handleEdit = async (post) => {
        console.log("Edit",post)


    }
    const handleDelete = async (post) => {
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

                <List 
                itemLayout = "horizontal"
                dataSource ={posts}
                renderItem = {(item) => (
                    <List.Item actions = {[
                        <a onClick ={() => handleEdit(item)}> edit </a>,
                        <a onClick = {() => handleDelete(item)}> delete </a>
                    ]}>
                        
                            <List.Item.Meta title = {item.title} />


                    </List.Item>
                    
                        
                    
                    

    )}



                />
            </Col>
        </Row>

        </AdminLayout>
        
          
    )
}

export default Posts;