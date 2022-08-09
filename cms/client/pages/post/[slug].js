
import axios from 'axios'
import { Row , Col , Card , Typography ,List ,Avatar ,Divider ,Button } from 'antd'

import dayjs from 'dayjs'
import {Editor} from '@tinymce/tinymce-react'
import Head from 'next/head'
import CommentForm from "../../components/comments/CommentForm"
import { useState } from 'react'
import Link  from 'next/link'
import toast from 'react-hot-toast'
import { ShareSocial } from 'react-share-social'
import useCategory from '../../hooks/useCategory'
import useLatestPosts from '../../hooks/useLatestPosts'

import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

// import { categories } from '../../../server/controllers/category'
 const { Meta } = Card  
 const { Title} = Typography

export const SinglePost = ({ post , postComments}) => {
    const [ comment, setComment] = useState([])
    const [ comments, setComments ] = useState(postComments)
    const [ loading , setLoading] = useState(false)
    const { categories } = useCategory()
    const { posts } = useLatestPosts()
    const handleSubmit = async () => 
    {
        try{
            setLoading(true)
            const { data } = await axios.post(`/comment/${post._id}` , {comment})
            setComments([ data,...comments])
            setComment('')
            toast.success("Comment posted successfully")
            setLoading(false)


        }
        catch(err){ console.log(err)
        setLoading(false) }

    }
    return (
        <>
        <Head>
            <title> {post.title} </title>
            {/* <meta description={post.content.substring(0,160)}/>  */}
        </Head>
        <Row>

            <Col xs={24} xl ={16}>
                {/* <pre>{JSON.stringify(post,null,4)}</pre>  */}
                <Card
                cover = {
                    <img src={post?.featuredImage?.url || "/images/default.jpg"}/>
                }
                >
                    <Title>
                        {post.title}
                        </Title>
                        <p>{dayjs(post.createdAt).format("MMMM D , YYYY h:mm A")} / 0 Comments / in    
                         {post?.categories.map((c) => (<span key={c._id}>
                            <Link href = {`/category/${c.slug}`}>
                            <a >{c.name} </a>
                            </Link>

                        </span>))}</p>
                        <div style={{ marginTop: "-20px", marginBottom: "15px" }}>
                           
              <ShareSocial
                url={process.browser && window.location.href}
                socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
                style={{
                  height: "100px",
                  overflow: "hidden",
                  background: "none",
                }}
              />
            </div>
                
                      
                       
                        
                    
                
                <Editor 
                        
                        apiKey = "g7wekghh9n4a5vw9pjog2yglr9kgert1sy9zlxcxvnyj0o9n"
                        init={{ 
                            selector: 'textarea',  
                            skin: `oxide-dark`,
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:40px; font-weight:bold; }',
                        toolbar: false,
                        menubar: false,
                        inline: true,
                        noneditable_class: 'mceNonEditable',
                        readonly: true,
                        plugins: "noneditable template",
                        noneditable_noneditable_class: "is-locked",
                        
                    }}
                     

                        initialValue={post.text}
                        // contenteditable = "false"
                        />
                        <div></div>
                        <CommentForm 
                        comment = { comment} 
                        setComment = { setComment }
                        handleSubmit={handleSubmit}
                        loading = {loading}
                        />
                        <div style ={{ marginBottom: 50 }}>   </div>
                       
                       <List
                       itemLayout='horizontal' dataSource= { comments } renderItem= { item => (
                        <List.Item key = {item._id} id = {item._id}>
                            <List.Item.Meta avatar = {<Avatar>{item?.postedBy.name[0].charAt(0)}</Avatar>}
                            title= {item.postedBy.name} 
                            description= {`${item.content} - ${dayjs(item.createdAt).fromNow()}`}/>
                        </List.Item>

                       )}
                       />
                    
                       
                        </Card>

                
              
                    {/* <p class="mceNonEditable">{post.text}</p> */}
            

            
            </Col>
            <Col xs={22} xl ={6} offset={1}>
                <Divider>Categories</Divider>
                {categories.map(c =>(
                    <Link href= {`/category/${c.slug}`} key={c.name}> 
                    <a>
                        <Button style ={{margin :2}}>{c.name}</Button>
                    </a></Link>
                ) )}

                <Divider> Latest Posts
                </Divider>
                {posts.map((p) => (
                    <Link href={`/post/${p.slug}`} key={p.name}>
                        <a><h4>{p.title}</h4></a>
                    </Link>
                ))}
                    
                </Col> 


        </Row>
        </>
        
        
        
    )
}

export async function getServerSideProps({params}){

    const { data } = await axios.get(`${process.env.API}/post/${params.slug}`)

    return {
        props:{
            post:data.post,
            postComments: data.comments
        }
    }

}

export default SinglePost 


