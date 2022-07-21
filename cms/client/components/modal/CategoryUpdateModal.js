import {Modal , Form, Input , Button} from 'antd'
import { EditOutlined } from '@ant-design/icons'

const CategoryUpdateModal = ({visible , setVisible , handleUpdate ,updatingCategory }) =>{



    return (
        <Modal title = "Update Category " visible = {visible} footer = {null } onCancel ={() =>setVisible(false) }  >

    <Form
        onFinish ={handleUpdate}
        fields={[{ name: ["name"], value: updatingCategory.name }]}
        
        >
       
    
        
        <Form.Item name="name">
           
          <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="Enter Category Name" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
                        
        </Modal>
    )
}

export default CategoryUpdateModal