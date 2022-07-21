import {Button,Row , Col ,Input , Select} from "antd"
import AdminLayout from "../../../components/layout/adminLayout";
import { useContext ,useEffect } from "react";

import { Editor } from '@tinymce/tinymce-react';
import { useRef , useState } from "react";
import { ThemeContext } from "../../../context/theme";
import axios from  'axios';
import ToggleTheme from "../../../components/ToggleTheme";
// const {Content , Sider} = Layout;

const { Option} = Select

function NewPost () {

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
        }
    }

    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    const [ theme, setTheme] = useContext(ThemeContext)
    
    const initialText = 'Welcome to NightKing-CMS';
const [text, setText] = useState(saveContent());
const [title , setTitle] = useState(saveTitle());

const [ categories, setCategories] = useState([]);
const [loadedCategories, setLoadedCategories] = useState([]);

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
        <AdminLayout>

       
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
            skin: `oxide-${theme}`,
            content_css: 'dark',
            menubar:true ,
        //    height: 500,
        //    width: 1000,
          
           plugins: [
            
             'advlist', 'autolink', 'lists', 'link' ,'image', 'charmap', 'print', 'preview', 'anchor',
             'searchreplace', 'visualblocks', 'code' ,'fullscreen',
             'insertdatetime' ,'media' ,'table', 'paste' ,'code' ,'help' ,'wordcount'
             
           ],
           toolbar: 'undo redo | link image | code | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' + 
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
           file_picker_types: 'file image media',
           images_upload_url: 'postAcceptor.php'
         }}
         initialValue={initialText}
         uplaodImage={(file) => console.log(file)}
         onEditorChange={(newText) => {
            
            setText(newText)
            localStorage.setItem('post-content' , JSON.stringify(newText))
         }}
         
       />
       
       <pre>{ JSON.stringify((loadedCategories), null ,4)}</pre>

            </Col>
            <Col span={6} offset = {1}>
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
            </Col>
        </Row>
       

        </AdminLayout>
        
          
    )
}

export default NewPost;