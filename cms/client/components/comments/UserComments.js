import axios from 'axios';
import { useEffect , useState , useContext} from 'react';
// import { commentsContext } from '../../../context/comments';
import { Button , Row , Col, List , Input , Modal} from "antd";

import Link  from 'next/link'
import { useRouter } from 'next/router';
import dayjs from 'dayjs'
import { BorderHorizontalOutlined, PlusOutlined } from "@ant-design/icons";

import { AuthContext } from '../../context/auth';
import Search from 'antd/lib/transfer/search';
import localizedFormat  from "dayjs/plugin/localizedFormat"
import CommentForm from "./CommentForm"

dayjs.extend(localizedFormat)
// const {Content , Sider} = Layout;



function UserComments () {


    const router = useRouter()
    const [keyword , setKeyword] = useState('')

    const [ comments ,setComments] = useState([])
   
    const [loading , setLoading] = useState(false)
    const [selectedComment ,setSelectedComment] = useState({})
    const [ content , setContent] = useState('')
    const [visible, setVisible] = useState(false)

    const [ auth, setAuth ] = useContext(AuthContext)
    
    useEffect(() => {

        if(auth?.token) {
            fetchcomments()
       
    }

    },[auth?.token])


    const fetchcomments = async () => {
        try{
             const { data } = await axios.get(`/user-comments`)
            setComments(data) // updating the previous pre
        }
        catch(err)
        {   
            console.log(err)  
        }   
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

    const handleSubmit =async () => {
        try{
            const { data } = await axios.put(`/comment/${selectedComment._id}` ,{content})
           
            let arr = comments
            const index = arr.findIndex((c) => c._id === selectedComment._id)
            arr[index].content = data.content
            setComments(arr)
            setVisible(false)
            setLoading(false)
            setSelectedComment('')
            toast.success("Comment edited");
        }
        catch(err){ console.log(err)
        setVisible(false)}
    }


    return(
        <>

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
                          
                          <a onClick = {() =>{
                            setSelectedComment(item)
                            setVisible(true)
                            setContent(item.content)
                          }}>edit</a>
                          ,

                        <a onClick ={ () => handleDelete(item)}> delete</a>
                    ]}> 
                        <List.Item.Meta title = {item.content} description = { `On ${item?.postId?.title} | ${item?.postedBy?.name} | ${dayjs(item.createdAt).format("L LT")}` }
                         />
                    </List.Item>
                )}
                    />
                   
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Modal
                visible={visible}
                title = "Update Comment"
                onOk = {() => setVisible(false)} 
                onCancel = {() => setVisible(false)}
                footer={null}>
                    <CommentForm handleSubmit={handleSubmit} comment = {content} setComment = {setContent}
                    loading={loading}/>


                </Modal>
            </Col>
        </Row>
       
       

        
        </>
          
    )
}

export default UserComments;