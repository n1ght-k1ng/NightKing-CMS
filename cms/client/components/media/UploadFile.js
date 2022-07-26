import {Button} from "antd"
import { useContext } from "react";
import AdminLayout from "../layout/adminLayout";
import {Upload  , message} from "antd"
import {UploadOutlined} from "@ant-design/icons"

import { AuthContext } from "../../context/auth";
import React from "react"
import { MediaContext } from "../../context/media"



// const {Content , Sider} = Layout;

function UploadFile () {

    const [auth , setAuth] = useContext(AuthContext) 
    const [media, setMedia] = useContext(MediaContext)

    const props = {
        name: "file",
        action: `${process.env.NEXT_PUBLIC_API}upload-image-file`,
        headers: {
            Authorization:  `Bearer ${auth.token}`
        },

            onChange(info) {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(`${info.file.name} file uploaded successfully`);
                  setMedia({
                    images: [...media.images, info.file.response],
                    selected: info.file.response,
                    showMediaModal: false
                  } )
                  console.log("info.file =>" , info.file)
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              },

    }


    return(
        <Upload {...props} maxCount = {1}>
        <Button icon = {<UploadOutlined/>}>Click to Upload</Button>
        </Upload>
    )
}

export default UploadFile;