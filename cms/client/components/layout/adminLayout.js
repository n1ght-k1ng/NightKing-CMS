import {Button} from "antd"
import {Layout} from "antd"
import AdminNav from "../../components/nav/AdminNav"

import ToggleTheme from "../../components/ToggleTheme";
const {Content } = Layout;

function AdminLayout (props) {
    return(
        <Layout>
            
        <Layout>
        <AdminNav/>
            <Content style ={{padding: '10px'}}>

            {props.children}

            </Content>

        
            </Layout>
        </Layout>
        
          
    )
}

export default AdminLayout