import {useContext, useState ,useEffect } from 'react'
import { Row , Col , Input , Button , Image , Divider} from "antd"
import Media from '../../components/Media'
import { MediaContext } from '../../context/media'
import axios from 'axios'
import toast from 'react-hot-toast'
import AdminLayout from '../../components/layout/adminLayout'
import { useRouter } from "next/router";
import useHome from '../../hooks/useHome'
const Customise = () => {
    const [ media, setMedia] = useContext(MediaContext)
    const router = useRouter()
    // const [ title , setTitle] = useState('')
    // const [ subtitle, setSubtitle] = useState('')
    const [loading , setLoading] = useState(false)
    const {title , subtitle, fullWidthImage , setTitle, setSubtitle, setfullWidthImage} = useHome()
    // const [ fullWidthImage , setfullWidthImage] = useState('')


    const handleSave = async () => 
    {
        try{
            setLoading(true)
            const { data } = await axios.post('/page', {
                page: "home",
                title ,
                subtitle, 
                fullWidthImage: media?.selected?._id
            })
            console.log("Posted data" , data)
            setLoading(false)
            toast.success("Saved")
            router.push('/')
        }
        catch(err) 
        { 
        console.log(err) 
        setLoading(false)
     }

    }

    return (
    <AdminLayout>
        <Row>
            <Col span={24}>
                <Divider>
                    <h1> Customise Home Page </h1>
                    <p>
                        Set Background image , title and subtitle.
                    </p>
                </Divider>
            </Col>
            <Col span ={18}>
                <Media/>
                <Input 
                style = {{margin: '20px 0px 20px 0'}}
                size = 'large'
                placeholder="Give a title"
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <Input 
                style = {{margin: '20px 0px 20px 0'}}
                size = 'large'
                placeholder="Give a subtitle"
                value = {subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                />
                < Button 
                onClick= {handleSave}
                type='default'
                style = {{ margin: '10px 0px 10px 0px'}}
                loading= {loading}
                block> Save  </Button>
               
            </Col>
                <Col span={6}>
                    <div style={{margin: '40px 0px 0px 20px'}}>

                        {media?.selected ?(<Image width = "100%" src = {media?.selected.url}/> ): fullWidthImage ? <Image width="100%" src={fullWidthImage.url} /> : ''}
                        </div> 
                 </Col>
            
        </Row>
    </AdminLayout>
    )
         
}

export default Customise