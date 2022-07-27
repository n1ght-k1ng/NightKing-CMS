import axios from 'axios'
import { Row , Col , Card , Avatar} from 'antd'
import Head from 'next/head'


import Link  from 'next/link'
 const { Meta } = Card  

export const Posts = ({posts}) => {
    return (
        <>
        <Head>
            <title> Recent Blog Posts </title>
            <meta description="description"/>
        </Head>
        <Row gutter = {12}>
            
                {posts.map((post) => (
                    <Col xs = {24} xl={8} style={{marginTop: 5}}>
                   <Link href = {`/post/${post.slug}`} >
                        <a>

                        <Card hoverable
                     cover ={
                        <Avatar 
                        shape="square" 
                        style={{height: '200px'}} 
                        src = {post.featuredImage?.url || "/images/default.jpg"} 
                        alt = { post.title}
                        />
                    }
                    >
                        <Meta title={post.title}/>
                    </Card>
                        </a>

                   
                   </Link>
                    </Col>
                ))}

        </Row>
        </>
        
        
    )
}

export async function getServerSideProps(){

    const { data } = await axios.get(`${process.env.API}/posts`)

    return {
        props:{
            posts:data
        }
    }

}

export default Posts 

