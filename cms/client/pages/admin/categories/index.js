import {Button } from "antd"
import AdminLayout from "../../../components/layout/adminLayout";
import { EditOutlined } from "@ant-design/icons";
import axios from 'axios'
import {toast} from 'react-hot-toast' 
import {useState } from  'react'
// import ToggleTheme from "../../components/ToggleTheme";
// const {Content , Sider} = Layout;
import {Form , Input , Row , Col} from "antd"
function Categories () {

    const [loading,setLoading] = useState(false)


    const onFinish = async(values) =>{
        console.log(values)

        try {
            setLoading(true)
            const {data } = await axios.post('/category' , values)
            console.log(data)
            toast.success("Category successfully created")
            setLoading(false)


        }
        catch(err) {
            console.log(err)
            toast.error("Category creation failed")
            setLoading(false)
    }
}

    return(
        <AdminLayout>
        <Row>
            <Col span={12}>
                {/* first column */}
            <h1>Categories</h1>
        <p> Add new Category</p>

        <Form
        onFinish ={onFinish}
        >
       
    
        
        <Form.Item name="name">
          <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="Enter Category Name" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form>
            </Col>
            {/* second column */}
            <Col>
            <p> Show Categories</p>
            </Col>
        </Row>
       

        </AdminLayout>
        
          
    )
}

export default Categories;