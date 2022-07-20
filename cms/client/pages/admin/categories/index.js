import {Button  } from "antd"
import AdminLayout from "../../../components/layout/adminLayout";
import { EditOutlined } from "@ant-design/icons";
import axios from 'axios'
import {toast} from 'react-hot-toast' 
import {useState , useEffect} from  'react'
// import ToggleTheme from "../../components/ToggleTheme";
// const {Content , Sider} = Layout;
import {Form , Input , Row , Col} from "antd"
import { categories } from "../../../../server/controllers/category";
function Categories () {

    const [loading,setLoading] = useState(false)
    
    const [form ] = Form.useForm()

    useEffect(async () => {
        try{
            const {data} = await axios.get('/categories')
            setCategories(data)
        }
        catch(error ){ 
             // TODO: handle error hereby    ?   :)                      
        console.error(error)    
    }
},[]);

    const onFinish = async(values) =>{
        console.log(values)

        try {
            setLoading(true)
            const {data } = await axios.post('/category' , values)
            console.log(data)
            toast.success("Category successfully created")
            setLoading(false)
            form.resetFields()


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
        form = {form}
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
            <pre>{JSON.stringify(categories,null,4)}</pre>
            </Col>
        </Row>
       

        </AdminLayout>
        
          
    )
}

export default Categories;