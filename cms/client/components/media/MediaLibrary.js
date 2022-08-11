
import React from "react";
import { useContext , useEffect ,useState } from "react";
import {Upload  , message , Image , Badge} from "antd"
import {CloseCircleOutlined, InboxOutlined} from "@ant-design/icons"
import { AuthContext } from "../../context/auth";
import { MediaContext } from "../../context/media"
import axios from "axios";
import {toast } from "react-hot-toast"

// const {Content , Sider} = Layout;

function MediaLibrary ({ page = "admin"}) {

    const {Dragger} = Upload

    const [auth , setAuth] = useContext(AuthContext) 
    const [media, setMedia] = useContext(MediaContext)
    const [showPreview, setshowPreview] = useState(false)
    useEffect(() => {
      const fetchMedia = async () => {
        try{
            const { data } = await axios.get("/media")
            setMedia((prev) => ({ ...prev, images: data }))
        }

        catch(err) { console.log(err) }
 
      }
      fetchMedia()
    },[]);

    const props = {
        name: "file",
        action: `${process.env.NEXT_PUBLIC_API}upload-image-file`,
        multiple: true,
        headers: {
            Authorization:  `Bearer ${auth.token}`
        },

            onChange(info) {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(`${info.file.name} file uploaded successfully`);
                  // console.log("info.file =>" , info.file)
                  setMedia({
                    images: [...media.images, info.file.response],
                    selected: info.file.response,
                    showMediaModal: false
                  } )
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              },
              onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
              },


    }


    const handleImageDelete = async(imageID)=>
    {
      try{

        const { data } = await axios.delete(`/media/${imageID}`);
        console.log(data)
        if(data.ok){
          setMedia({
            ...media,
            images: media.images.filter((image) => image._id != imageID),  // updates the images array context
            selected: null,
          })
        }
        toast.error("Image Deleted successfully");

      }
      catch(err) { 
        console.log(err)
        // toast.error("Cant delete image")
    }
  }
    return(
      <div>
        <div>
        <Dragger {...props} accept="image/*">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text" style={{ height: "85px" }}>Click or drag file to this area to upload</p>
        {/* <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p> */}
      </Dragger>
      <br/>
        </div>

      <div style = {{textAlign: 'center'}}> 
        {media?.images?.map((image) =>(
          <Badge>

          <Image 
          onClick = {()=> setMedia({...media , selected: image})}
          preview={showPreview} 
          style={{paddingTop: 5 ,
          paddingRight: 5 , 
          paddingTop: 5 ,
          
          marginBottom: 50 ,
          height: '100px' ,
          width: '100px' , 
          objectFit: 'cover',
          cursor: 'pointer'
        }} 
          src = {image.url}
         
           />
           <br/>

            {page === "author" && image?.postedBy?._id == auth?.user?._id ? (
              <CloseCircleOutlined onClick={()=> handleImageDelete(image._id)} style = {{ color: '#f5222d '}}/>
            ) : page === "admin" ? (
              <CloseCircleOutlined onClick={()=> handleImageDelete(image._id)} style = {{ color: '#f5222d '}}/>
            ) : ("")}
          

           </Badge>
           ))}

        <br/>
        


        </div>
        </div>
     


      
        
        
          
    )
}

export default MediaLibrary 