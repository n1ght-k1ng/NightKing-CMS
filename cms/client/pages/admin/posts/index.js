
import { Button , Row , Col  } from "antd";
import AdminLayout from "../../../components/layout/adminLayout";
import Link  from 'next/link'
import { PlusOutlined } from "@ant-design/icons";

// const {Content , Sider} = Layout;

function Posts () {
    return(
        <AdminLayout>

        <Row>
            <Col span = {24}>
                <Button type ="primary" style={{ margin: "10px 0px 10px 0px"}}>
                        <Link href='/admin/posts/new' >
                            <a>
                                <PlusOutlined/> Add new 
                            </a>

                        
                        </Link>
                </Button>

                <h1> Posts</h1>
            </Col>
        </Row>

        </AdminLayout>
        
          
    )
}

export default Posts;