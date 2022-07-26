
import axios from 'axios'
import { Row , Col , Card , Avatar} from 'antd'
import Head from 'next/document'
import Title from 'antd/lib/skeleton/Title'
import Link  from 'next/link'
 const { Meta } = Card  

export const SinglePost = ({ post}) => {
    return (
        <>
        <Head>
            <Title> Recent Blog Posts </Title>
            <meta description="description"/>
        </Head>
        <Row gutter = {12}>
            <Col xm={24} xl ={16}>
                <pre>{JSON.stringify(post,null,4)}</pre> 
            Post
            </Col>
            <Col xm={24} xl ={16}>
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
