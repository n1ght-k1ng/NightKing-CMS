import {Button} from "antd"
import AdminLayout from "../../../components/layout/adminLayout";

import Editor from 'rich-markdown-editor'

import ToggleTheme from "../../../components/ToggleTheme";
// const {Content , Sider} = Layout;

function NewPost () {
    return(
        <AdminLayout>

        <h1> create new post</h1>
        <Editor/>

        </AdminLayout>
        
          
    )
}

export default NewPost;