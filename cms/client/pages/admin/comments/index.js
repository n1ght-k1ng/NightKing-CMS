import axios from 'axios';
import { useEffect , useState , useContext} from 'react';
// import { commentsContext } from '../../../context/comments';
import { Button , Row , Col, List , Input  } from "antd";
import AdminLayout from "../../../components/layout/adminLayout";
import Link  from 'next/link'
import { useRouter } from 'next/router';
import dayjs from 'dayjs'
import { BorderHorizontalOutlined, PlusOutlined } from "@ant-design/icons";

import { AuthContext } from '../../../context/auth';
import Search from 'antd/lib/transfer/search';
import localizedFormat  from "dayjs/plugin/localizedFormat"

dayjs.extend(localizedFormat)
// const {Content , Sider} = Layout;



function Comments () {


    const router = useRouter()
    const [keyword , setKeyword] = useState('')
    const [ page , setPage] = useState(1)
    const [ comments ,setComments] = useState([])
    const [ total , setTotal] = useState(0)
    const [loading , setLoading] = useState(false)

    const [ auth, setAuth ] = useContext(AuthContext)
    
    useEffect(() => {

        if(auth?.token) {
            fetchcomments()
        getTotal()
    }

    },[auth?.token])

    useEffect(() => {
        if(page === 1) return ;
        if(auth?.token) fetchcomments()
    },[page])

    const fetchcomments = async () => {
        try{
             const { data } = await axios.get(`/comments/${page}`)
            setComments([...comments, ...data]) // updating the previous pre
        }
        catch(err)
        {   
            console.log(err)  
        }   
}
 
const getTotal = async () => {
    try{
        const { data } = await axios.get("/comment-count")
        setTotal(data)
    }



catch(err){ console.log(err)}
}
const filteredComments = comments?.filter((comment) => comment.content.toLowerCase().includes(keyword))

   
    const handleDelete = async (comment) => {

        try{
            const answer = window.confirm("Are you sure you want to delete this comment?")
            if(!answer) return ; 

            const { data } = await axios.delete(`/comment/${comment._id}`);

            if(data?.ok)
            {
                setComments(comments.filter((c)=> c._id !== comment._id))
                setTotal(total-1)
                toast.success("Comment deleted successfully");
                    } 
            }
    
            
           

        
        catch(err)  { console.log(err) }
        console.log("Delete" , comments)

    
    }



    return(
        <AdminLayout>

        <Row>
            <Col span = {24}>
            

                <h1 style ={{marginTop: 15 }}> {comments?.length} Comments </h1>

                <Input placeholder = "Search" type= 'search' value={keyword} onChange={e => setKeyword(e.target.value.toLowerCase())}/>

                <List
                itemLayout='horizontal'
                dataSource={filteredComments}
                renderItem= {(item) => (
                    <List.Item actions = {[

                        <Link href = {`/post/${item?.postId?.slug}#${item._id}`}>
                        view
                        </Link>,
                        <a onClick ={ () => handleDelete(item)}> delete</a>
                    ]}> 
                        <List.Item.Meta title = {item.content} description = { `On ${item?.postId?.title} | ${item?.postedBy?.name} | ${dayjs(item.createdAt).format("L LT")}` }
                         />
                    </List.Item>
                )}
                    />
            </Col>
        </Row>
        {page * 6 < total && ( 
        <Row>
            <Col span={24} style = {{textAlign: "center"}}>
                <Button size = "large" type="primary" loading={loading} onClick={() => setPage(page+1)}> Load More</Button>
            </Col>
        </Row>)}
       

        </AdminLayout>
        
          
    )
}

export default Comments;