
import axios from 'axios'
import { Row , Col , Card , Typography} from 'antd'

import dayjs from 'dayjs'
import {Editor} from '@tinymce/tinymce-react'
import Head from 'next/head'

import Link  from 'next/link'

// import { categories } from '../../../server/controllers/category'
 const { Meta } = Card  
 const { Title} = Typography

export const SinglePost = ({ post}) => {
    return (
        <>
        <Head>
            <title> {post.title} </title>
            {/* <meta description={post.content.substring(0,160)}/>  */}
        </Head>
        <Row gutter = {12}>

            <Col xm={24} xl ={16}>
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
                       
                        
                    
                </Card>
                
                <Editor 
                        
                        apiKey = "g7wekghh9n4a5vw9pjog2yglr9kgert1sy9zlxcxvnyj0o9n"
                        init={{ selector: 'textarea',
                        plugins: [' powerpaste'],
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:40px }',
                        skin:'oxide-dark',
                        toolbar: false,
                        menubar: false,
                        inline: true,
                        readonly: true
                    }}
                       
                        initialValue={post.text}/>
            
            </Col>
            <Col xm={24} xl ={4}>
                Sidebar
                </Col> 


        </Row>
        </>
        
        
        
    )
}

export async function getServerSideProps({params}){

    const { data } = await axios.get(`${process.env.API}/post/${params.slug}`)

    return {
        props:{
            post:data
        }
    }

}

export default SinglePost 


// import { useContext } from "react";
// import axios from "axios";
// import { Row, Col, Card, Typography } from "antd";
// import Head from "next/head";
// import Link from "next/link";
// import dayjs from "dayjs";
// import Editor from "@tinymce/tinymce-react";
// import { ThemeContext } from "../../context/theme";

// const { Title } = Typography;

// const { Meta } = Card;

// export const SinglePost = ({ post }) => {
//   const [theme, setTheme] = useContext(ThemeContext);

//   return (
//     <>
//       <Head>
//         <title>{post.title}</title>
//         {/* <meta description={post.content.substring(0, 160)} /> */}
//       </Head>
//       <Row gutter={12}>
//         <Col xm={24} xl={16}>
//           <Card
//             cover={
//               <img
//                 src={post?.featuredImage?.url || "/images/default.jpeg"}
//                 alt={post.title}
//               />
//             }
//           >
//             <Title>{post.title}</Title>
//             <p>
//               {dayjs(post.createdAt).format("MMMM D, YYYY h:mm A")} / 0 Comments
//               / in{" "}
//               {post?.categories.map((c) => (
//                 <span key={c._id}>
//                   <Link href={`/category/${c.slug}`}>
//                     <a>{c.name} </a>
//                   </Link>
//                 </span>
//               ))}
//             </p>

//             <Editor
//               initialValue={post.initialValuee}
//               dark={theme === "light" ? false : true}
//             />
//           </Card>
//         </Col>

//         <Col xm={24} xl={8}>
//           Sidebar
//         </Col>
//       </Row>
//     </>
//   );
// };

// export async function getServerSideProps({ params }) {
//   const { data } = await axios.get(`${process.env.API}/post/${params.slug}`);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export default SinglePost;