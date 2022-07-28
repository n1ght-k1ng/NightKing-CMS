import {Row , Col} from "antd"
import AdminLayout from "../../../components/layout/adminLayout";
import UploadFile from "../../../components/media/UploadFile";



// const {Content , Sider} = Layout;

function newMedia () {
    return(
        <AdminLayout>

            <Row>
                <Col span={24}>
                    <div style ={{padding: 100,
                    textAlign: 'center'}}>
                        <UploadFile redirectToLib = {true} />
                    </div>
                    </Col> 
            </Row>

        

        </AdminLayout>
        
          
    )
}

export default newMedia;