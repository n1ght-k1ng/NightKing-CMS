import { Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import Link from 'next/link'
const FullWidthImage = ({ title='NightKing-CMS' , subtitle="Get in lad", fullWidthImage = "/images/default.jpg"}) => (
    <>
        <img src ={fullWidthImage} alt="CMS" style={{width: '100%' , height: "500px" , overFlow: "hidden" , objectFit: "cover"}}/>
        <div style={{
            fontStyle: "normal",
            textAlign: "center",
            marginTop: "-420px",
            fontSize: "60px",
            textShadow: "2px 2px 4px #000000"
        }}> 
        <h1>{title}</h1>
        <p style={{fontSize: "18px", marginTop: "-70px"}}>{subtitle}</p>
        <Link href ="/subscriber"><a><Button type='primary' size='large' icon={(<SendOutlined/>)}>Explore</Button></a></Link>
        </div>
    </>
)

export default FullWidthImage
