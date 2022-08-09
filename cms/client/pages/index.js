import { useContext } from "react";
import { Row , Col } from 'antd'
import ToggleTheme from "../components/ToggleTheme";
import {AuthContext} from "../context/auth"
import Head from 'next/head'
import Title from "antd/lib/skeleton/Title";
import FullWidthImage from '../components/pages/FullWidthImage'
import useNumbers from "../hooks/useNumbers";
import RenderProgress from "../components/posts/RenderProgress"
import  useLatestPosts from "../hooks/useLatestPosts"
import  useCategories  from "../hooks/useCategory"
import useCategory from "../hooks/useCategory";
import Link from 'next/link'
 
function Home (){

    const [auth , setAuth] = useContext(AuthContext); //gives us the value of AuthContext 
    const { numbers } = useNumbers()
    const { Latestposts } = useLatestPosts()
    const { categories } = useCategory()
    return(

       <>
       <Head>
        <title>
            NightKing-CMS
        </title>
        <meta name="description" content="NightKing-CMS Nikhil Reddy"></meta>
       </Head>
       {/* <div style={{marginBottom: 15}}></div> */}
            <FullWidthImage/>
            <br/>
            <Row style ={{marginTop: 40}}>
            <Col span ={6} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.posts} name = "Posts" link = '/admin/posts'/>
                </Col>
                <Col span ={6} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.comments} name = "Comments" link = '/admin/comments'/>
                </Col>
                <Col span ={6} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.categories} name = "Categories" link = '/admin/categories'/>
                </Col>
                <Col span ={6} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.users} name = "Users" link = '/admin/users'/>
                </Col>
            </Row>
            <Row>
                <Col span={24}> 
                <p> para img</p>
                <h2>Latest Posts</h2> 

                <div style={{ textAlign: 'center' }}>
                    {Latestposts.map((post) =>( <Link href= {`/post/${post.slug}`}><a>{post.title}</a></Link>)) }
                </div>
                </Col>
            </Row>
            
        </>
    )
} 
export default Home;