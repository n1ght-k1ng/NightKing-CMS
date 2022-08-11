import { useContext , useState , useEffect} from "react";
import { Row , Col ,Divider, Button } from 'antd'
import { ThunderboltFilled } from "@ant-design/icons";
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
import ParallaxImage from '../components/pages/ParallaxImage'
import Footer from '../components/pages/Footer'
import axios from 'axios'
 
function Home (){

    const [auth , setAuth] = useContext(AuthContext); 
    //gives us the value of AuthContext 
    const [ title , setTitle] = useState('')
    const [ subtitle, setSubtitle] = useState('')
    
    const [ fullWidthImage , setfullWidthImage] = useState('')

    const { numbers } = useNumbers()
    const { Latestposts } = useLatestPosts()
    const { categories } = useCategory()

    
    useEffect(() => {
        loadHomepage()
    },[])

    const loadHomepage = async () => {
        try{
            const { data}  = await axios.get("/page/home")
            setTitle(data.title)
            setSubtitle(data.subtitle)
            setfullWidthImage(data.fullWidthImage)
            console.log("get data" ,data)
        }
        catch(err){ console.log(err)    }
    }
    return(

       <>
       <Head>
        <title>
            NightKing-CMS
        </title>
        <meta name="description" content="NightKing-CMS Nikhil Reddy"></meta>
       </Head>
       
        <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
    
      </div>
       {/* <div style={{marginBottom: 15}}></div> */}

        
            <FullWidthImage title={title} subtitle={subtitle} fullWidthImage={fullWidthImage?.url}/>
            <br/>
            <Row style ={{marginTop: 40 }}>
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
            <Row style ={{marginTop: 40 }}>
                <Col span={24}> 
                <ParallaxImage>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: "74px",
                    textShadow: "2px 2px 4px #000000",
                    color : "#fff"
                }}>Latest Posts</h2> 
                <Divider>
                <ThunderboltFilled/>
                </Divider>

                <div style={{ textAlign: 'center' }}>
                 {Latestposts.map((post) =>( <Link href= {`/post/${post.slug}`} key = {post._id}><a><h3>{post.title}</h3></a></Link>)) }
                    </div>
                </ParallaxImage>
               
                </Col>
            </Row>
            <Row>
                <Col span={24} textAlign="center" style= {{ marginTop: 80 , marginBottom: 80 }}>
                <Divider>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: "30px",
                    textShadow: "2px 2px 4px #000000",
                    color : "#fff"
                }}>Categories</h2> 
                </Divider>
                <div style={{ textAlign: 'center' }}>
                 {categories.map((c) =>( <Link href= {`/category/${c.slug}`} key = {c._id}><a><Button style ={{margin: 2}}>{c.name}</Button></a></Link>)) }
                    </div>
                </Col>
            </Row>
            
                  <Footer/>
            
            
        </>
    )
} 
export default Home;