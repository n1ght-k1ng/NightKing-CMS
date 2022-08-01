import {Button} from "antd"
import AuthorLayout from "../../../components/layout/AuthorLayout";

import MediaLibrary from "../../../components/media/MediaLibrary";
// const {Content , Sider} = Layout;

function Lib () {
    return(
        <AuthorLayout>

            <MediaLibrary page = "author"/>

        </AuthorLayout>
        
          
    )
}

export default Lib;