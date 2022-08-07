import {Button , Row , Col} from "antd"
import AuthorLayout from "../../components/layout/authorLayout";



import ToggleTheme from "../../components/ToggleTheme";
import UserComments from "../../components/comments/UserComments";
// const {Content , Sider} = Layout;

function Admin () {
    return(
        <AuthorLayout>
            <UserComments/>
        
        

        </AuthorLayout>
        
          
    )
}

export default Admin;