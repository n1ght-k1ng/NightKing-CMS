import { Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import Link from 'next/link'
const FullWidthImage = () => (
    <>
        <img src ="/images/default.jpg" alt="CMS" style={{width: '100%' , height: "500px" , overFlow: "hidden" , objectFit: "cover"}}/>
        <div style={{
            fontStyle: "normal",
            textAlign: "center",
            marginTop: "-420px",
            fontSize: "60px",
            textShadow: "2px 2px 4px #000000"
        }}> 
        <h1> NightKing-CMS</h1>
        <p style={{fontSize: "18px", marginTop: "-70px"}}>Content Management System</p>
        <Link href ="/subscriber"><a><Button type='primary' size='large' icon={(<SendOutlined/>)}>Explore</Button></a></Link>
        </div>
    </>
)

export default FullWidthImage
