import ParallaxImage from "./ParallaxImage"
import { Row , Col} from 'antd'
import { UsergroupAddOutlined , ApiOutlined, CopyrightOutlined , HeartFilled} from "@ant-design/icons"
const Footer = () => (
    <ParallaxImage url = '/images/prlx.jpg'>
        <Row>
        <Col span ={8} style={{ textAlign: 'center' }}>
                <ApiOutlined style={{ fontSize: 80}} />
                <br/><br/>
                Built on MERN  
            </Col>
            <Col span ={8} style={{ textAlign: 'center' }}>
                <UsergroupAddOutlined style={{ fontSize: 80}} />
                <br/><br/>
                Made with <HeartFilled /> by Nikhil Reddy
            </Col>
            <Col span ={8} style={{ textAlign: 'center' }}>
                <CopyrightOutlined style={{ fontSize: 80}} />
                <br/><br/>
                Copyright {new Date().getFullYear()} &copy; All rights reserved.
            </Col>
        </Row>

    </ParallaxImage>
)

export default Footer
