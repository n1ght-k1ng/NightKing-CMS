import axios from 'axios'
import { Card , Row , Col , Button ,Divider , Avatar , Typography} from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import useCategory from '../../hooks/useCategory'
import useLatestPosts from '../../hooks/useLatestPosts'


dayjs.extend(relativeTime)
const { Title } = Typography
const SingleCategory = ({posts, category}) =>


{
    const { categories } = useCategory()
    const { Latestposts } = useLatestPosts()
    return(
        <>
        <Head>
            <title>
                {category.name}
            </title>
            <meta name="description" content={ `Read posts on ${category.name}`}/>

        </Head>
        <Row gutter= {12}>
            <Col sm={24} lg={18} style= {{marginBotton: 12}}>
                <h1 style={{textAlign: 'center' , marginTop: 10}} > Posts in {category.name}</h1>
                <br/>
                {posts.map((post) =>(
                    <Card key = {post._id}>
                        <div style = {{display: 'flex'}}>
                            <Avatar shape = 'circle' size ={60} style={{marginRight: 15}} src={post.featuredImage?.url || "/images/default.jpg"} alt={post.title}/>
                            <div>
                                <Link href={`/post/${post.slug}`}>
                                <a>
                                    <h2 color= 'blue'>{post.title}</h2>
                                   
                                </a>
                                </Link>
                                <p>
                                    {dayjs(post.createdAt).format("On MMMM D, YYYY  h:mm A")} / {post?.postedBy?.name}
                                </p>
                            </div>

                        </div>
                    </Card>
                ))
                }
            </Col>
            <Col xs={24} xl ={6} >
                <Divider>Categories</Divider>
                {categories.map(c =>(
                    <Link href= {`/category/${c.slug}`} key={c.name}> 
                    <a>
                        <Button style ={{margin :2}}>{c.name}</Button>
                    </a></Link>
                ) )}

                <Divider> Latest Posts
                </Divider>
                {Latestposts.map((p) => (
                    <Link href={`/post/${p.slug}`} key={p.name}>
                        <a><h4>{p.title}</h4></a>
                    </Link>
                ))}
                    
                </Col> 

        </Row>
        
        </>
    )


}

export async function getServerSideProps({ params }){
    const { data } = await axios.get(`${process.env.API}/posts-by-category/${params.slug}`)
    return {
        props:{
            posts: data.posts,
            category: data.category,
        }
    }
}

export default SingleCategory