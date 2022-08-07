import {Button , Row , Col} from "antd"
import UserComments from "../../components/comments/UserComments";
import SubscriberLayout from "../../components/layout/SubscriberLayout";


import ToggleTheme from "../../components/ToggleTheme";
// const {Content , Sider} = Layout;

function Comments () {
    return(
        <SubscriberLayout>

        <UserComments/>
        

        </SubscriberLayout>
        
          
    )
}

export default Comments;