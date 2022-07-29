import {Button,Row , Col ,Input , Select ,Modal, Image} from "antd"
// import AdminLayout from "../../../components/layout/adminLayout";
import { useContext ,useEffect } from "react";

import { Editor } from '@tinymce/tinymce-react';
import { useRef , useState } from "react";
import { ThemeContext } from "../../context/theme";
import axios from  'axios';
// import ToggleTheme from "../../../components/ToggleTheme";
import Resizer from 'react-image-file-resizer';

import { useRouter } from "next/router";
import toast from 'react-hot-toast'
import {UploadOutLined} from "@ant-design/icons"
import React from "react";
import Media from "../media/index"
import {MediaContext} from "../../context/media"

// const {Content , Sider} = Layout;

const { Option} = Select



const ResizeFile = (file) => 
    new Promise((resolve)=>{
        Resizer.imageFileResizer(
            file,
            7200,
            400,
            "JPEG",
            100,
            0,
            (uri) => {resolve(uri)},
            "base64",
        )

    })
// const handlePublish = async () => {

//     try{
//         const { data } = await axios.post("/create-post", {
//             title,
//             initialValuee,
//             categories,
//         })

//         if(data?.error)
//         {
//             toast.error(data?.error);

//         }

//         else{
//             console.log("POST PUBLISH RESS  =>", data )
//             toast.success("Post Created Successfully");
//             localStorage.removeItem("post-title");
//             localStorage.removeItem("post-content");
//             router.push("/admin/post")
//             setCategories([])
//         }

//     }
//     catch(err){   console.log(err) 
//     toast.error("Post Publish Failed")  }
// }

const uploadImage = async (file) => {

    try{
        const image = await ResizeFile(file);
        console.log("image b64" , image);
        
        const { data }  = await axios.post("/upload-image" , {image})
        console.log("Uploaded image: " + data)
        return data.url
    }
    catch(err) {   console.log(err) }


}

function NewPostComponent ({page = "admin"}) {

    const router = useRouter()


    const handlePublish = async () => {

        setLoading(true);

        try{
            const { data } = await axios.post("/create-post", {
                title,
                text,
                categories,
                featuredImage: media?.selected?._id
            })
    
            if(data?.error)
            {
                toast.error(data?.error);
                setLoading(false);
    
            }
    
            else{
                console.log("POST PUBLISH RESS  =>", data )
                toast.success("Post Created Successfully");
                localStorage.removeItem("post-title");
                setMedia({...media , selected: null})
                localStorage.removeItem("post-content");
                router.push(`/${page}/posts`)
                setCategories([])
                setLoading(false)
            }
    
        }
        catch(err){   
            
        console.log(err) 
        toast.error("Post Publish Failed")
        setLoading(false
            ) }
    }
    

    // load from local storage

    const saveTitle = () => {
        if(process.browser)
        {
            if(localStorage.getItem('post-title')){
                
                return (JSON.parse(localStorage.getItem('post-title')))
            }
        }
    }
    
    const saveContent = () => {
        if(process.browser)
        {
            if(localStorage.getItem('post-content')){
                return (JSON.parse(localStorage.getItem('post-content')));
            }
            else {
                return "This is your initial text"
            }
        }
    }
    const [initialValuee, setInitialValuee] = useState("Welcome to NightKing-CMS");

    useEffect(() => {
        if(process.browser)
        {
            if(localStorage.getItem('post-content'))
            {
                 setInitialValuee(JSON.parse(localStorage.getItem('post-content')))
            }

            else{
                setInitialValuee('<p> Welcome to NightKing-CMS </p>')
    
            }
        }
       
},[])
        

    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    const [ theme, setTheme] = useContext(ThemeContext)
    
const initialText = 'Welcome to NightKing-CMS';
const [media , setMedia] = useContext(MediaContext)
const [text, setText] = useState(saveContent());
const [title , setTitle] = useState(saveTitle());

const [ categories, setCategories] = useState([]);
const [loadedCategories, setLoadedCategories] = useState([]);
const [visible, setVisible] = useState(false);
const [ModalVisible , setModalVisible] = useState(false);
const [loading, setLoading] = useState(false);

useEffect(()=>{

    loadCategories()

},[])

const loadCategories = async () =>{
    try{
    const { data } = await axios.get('/categories');
    setLoadedCategories(data);

    }
    catch(err){   console.log(err); }
}
   
    
    return(
        

       
        <Row>
            <Col span ={14} offset= {1}>
            <h1> Create new post</h1>
            <br/>

            
            <Input value = {title}
            placeholder = "Give you Post a Title"
            onChange={e => {
                setTitle(e.target.value);
                localStorage.setItem('post-title', JSON.stringify(e.target.value))
            }}/>
            <br/><br/><br/>
            <Editor
        
        //  onInit={(evt, editor) =>{ 
        //     editorRef.current = editor
        // }}
         apiKey = "g7wekghh9n4a5vw9pjog2yglr9kgert1sy9zlxcxvnyj0o9n"
         
         init={{
           
            selector: 'textarea',  
            skin: `oxide-dark`,
            content_css: 'dark',
            menubar:true ,
        //    height: 500,
        //    width: 1000,
          
           plugins: [
            
             'advlist', 'autolink', 'lists', 'link' ,'image', 'charmap','preview', 'anchor',
             'searchreplace', 'visualblocks', 'code' ,'fullscreen',
             'insertdatetime' ,'media' ,'table', 'code' ,'help' ,'wordcount'
             
           ],
           toolbar: 'undo redo | link image | code | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' + 
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
           file_picker_types: "file image media",
        //    images_upload_url: `${uploadImage()}`,
        //    automatic_uploads: true,
           
           block_unsupported_drop: false,
        //    file_picker_callback: (callback, value, meta) => {
        //     // Provide file and text for the link dialog
        //     if (meta.filetype == 'file') {
        //       callback('mypage.html', { text: 'My text' });
        //     }
        
        //     // Provide image and alt text for the image dialog
        //     if (meta.filetype == 'image') {
        //       callback('myimage.jpg', { alt: 'My alt text' });
        //     }
        
        //     // Provide alternative source and posted for the media dialog
        //     if (meta.filetype == 'media') {
        //       callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
        //     }
        //   }
             }}
        initialValue={initialValuee}
         
         onEditorChange={(newText) => {
            
            setText(newText)
            localStorage.setItem('post-content' , JSON.stringify(newText))
         }}
        //  onInit={
        //     initialValue={initialValuee}
        //  }
         

       />
       
      

            </Col>
            <Col span={6} offset = {1}>
                
                <Button style={{margin: "10px 0px 10px 0px", width: "100%"}} onClick={()=> setVisible(true)}> Preview

                </Button>
                <h4> Categories </h4>
                <Select
                mode = 'multiple'
                allowClear ={true}
                placeholder = 'Select Categories'
                style={{width: "100%"}}
                onChange={(v) => setCategories(v)}
                >
                    {loadedCategories.map((item) => <Option key= {item.name}>{item.name}</Option>)}

                </Select>
                <br/>
                <br/>

                {media?.selected && (
                    <Image width = '100%' src= {media?.selected?.url}/>
                )}

                <Button style={{margin: "10px 0px 10px 0px", width: "100%"}} onClick = {() => setMedia({...media , showMediaModal: true})}  >

                     Featured Image

                </Button>

            <Modal title="Media"
            
            visible={media.showMediaModal}
            onOk={() => setMedia({...media, showMediaModal: false})}
            onCancel={() => setMedia({...media, showMediaModal: false})}
            footer = {null}
            width ={720}



            >
                <Media/>


            </Modal>

                <Button style={{margin: "10px 0px 10px 0px", width: "100%"}} type = "primary" loading = {loading} onClick={handlePublish}> Publish

                </Button>
            </Col>
            <Modal title="Preview"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer = {null}
            width ={720}



            >
                <h1> {title} </h1>
                <Editor
            init={{
            selector: 'textarea',  
            skin: `oxide-dark`,
            content_css: 'dark',
            menubar:false,
            readonly: true,
            }}
            toolbar = "false"
            initialValue = {text}
            

            >
                </Editor>
            </Modal>
                

           
        </Row>
       

        
        
          
    )
}


export default NewPostComponent;