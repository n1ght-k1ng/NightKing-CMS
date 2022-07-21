import {Button  } from "antd"
import AdminLayout from "../../../components/layout/adminLayout";
import { EditOutlined } from "@ant-design/icons";
import axios from 'axios'
import {toast} from 'react-hot-toast' 

import {useState , useEffect} from  'react'
// import ToggleTheme from "../../components/ToggleTheme";
// const {Content , Sider} = Layout;
import CategoryUpdateModal from "../../../components/modal/CategoryUpdateModal";
import {Form , Input , Row , Col , List , Modal } from "antd"
import Item from "antd/lib/list/Item";
// import { categories } from "../../../../server/controllers/category";
// import { get } from "mongoose";
function Categories () {

    const [loading,setLoading] = useState(false)
    
    const [form ] = Form.useForm()

    const [categories , setCategories] = useState([])
    
    const [updatingCategory , SetUpdatingCategory] = useState({})

    const [visible , setVisible] = useState(false)
    useEffect(() => {
        getCategories()
},[]);


    const getCategories = async function () {
        try{
            const { data } = await axios.get('/categories')
            setCategories(data)
        
        }
        catch(err) {
            console.error(err)

    }
}
    const handledelete = async (item ) => {
            try{
                const { data } = await axios.delete(`/category/${item.slug}`)
                setCategories(categories.filter((cat) => cat._id != data._id)) // function gets access to each category and compares each id and removes it from the category list
                toast.success("Category deleted successfully")     
            }
            catch(err)  {
                console.error(err)
                toast.error(err)

    }
}
    const handleEdit = async (item) => {

        SetUpdatingCategory(item)
        setVisible(true)
    }

    const handleUpdate = async (values) => {

       
        
        try{
            const { data } = await axios.put(`/category/${updatingCategory.slug}` , values)
            const newCategories = categories.map((cat) => {
                if(cat._id === data._id){
                    return data;
                }

                return cat

            }) 

            setCategories(newCategories)
            toast.success("category updated successfully")
            setVisible(false)
            SetUpdatingCategory({})
        }

        catch(err) {   console.log(err) }

    }




    const onFinish = async(values) =>{
        console.log(values)

        try {
            setLoading(true)
            const {data } = await axios.post('/category' , values)
            console.log(data)
            toast.success("Category successfully created")
            setCategories([ data, ...categories])
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
            <Col xs ={22} sm={22} lg ={10} offset ={1} >
            <List
            itemLayout="horizontal"
            bordered

            dataSource={categories}
            renderItem ={(item) =>(
                <List.Item
                    actions={[
                        <a onClick = {() => handleEdit(item)}> edit  </a>,
                        <a onClick={() => handledelete(item)}>delete </a> 
                    ]}>
                    <List.Item.Meta title={item.name }/>   
                </List.Item>
            )}/>
                    
            
                
                 
            </Col>
                    <CategoryUpdateModal visible={visible} setVisible = {setVisible} handleUpdate = {handleUpdate}  updatingCategory = {updatingCategory}/>
           
        </Row>
       

        </AdminLayout>
        
          
    )
}

export default Categories