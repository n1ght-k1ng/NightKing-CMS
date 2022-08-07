import { useContext, useState, useEffect } from "react";
import { Layout, Row, Col, Input, Select, Modal, Button, Image } from "antd";

// import Editor from "rich-markdown-editor";
import { Editor } from "@tinymce/tinymce-react";
import { ThemeContext } from "../../context/theme";
import axios from "axios";

import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { UploadOutlined } from "@ant-design/icons";
import Media from "../media";
import { MediaContext } from "../../context/media";

const { Option } = Select;


function EditPost({sentby = "admin"}) {
  // context
  const [theme, setTheme] = useContext(ThemeContext);
  const [media, setMedia] = useContext(MediaContext);
  // state
  const [postId, setPostId] = useState("");
  let inval 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]); // post's existing categories
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [featuredImage, setFeaturedImage] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  // media Modal
  // const [visibleMedia, setVisibleMedia] = useState(false);
  // hook
  const router = useRouter();

  useEffect(() => {
    loadPost();
  }, [router?.query?.slug]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadPost = async () => {
    try {
      const { data } = await axios.get(`/post/${router.query.slug}`);
      console.log("GOT POST FOR EDIT", data);
      setTitle(data.post.title);
      setContent(data.post.text);
      setFeaturedImage(data.post.featuredImage);
      setPostId(data.post._id);
      // push category names
      let arr =[]
      data.post.categories.map((c) => arr.push(c.name))
      setCategories(arr);

      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setLoadedCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/edit-post/${postId}`, {
        title,
        content,
        categories,
        featuredImage: media?.selected?._id ? 
        media?.selected?._id 
        : featuredImage?._id ?
         featuredImage._id : 
         undefined
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        // console.log("POST PUBLISHED RES => ", data);
        toast.success("Post Updated successfully");
        setMedia({ ...media, selected: null });
        router.push(`/${sentby}/posts`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Post update failed. Try again.");
      setLoading(false);
    }
  };

  return (
    
      <Row>
        <Col span={14} offset={1}>
          <h1>Edit post</h1>
          <Input
            size="large"
            value={title}
            placeholder="Give your post a title"
            onChange={(e) => {
              setTitle(e.target.value);
              localStorage.setItem(
                "post-title",
                JSON.stringify(e.target.value)
              );
            }}
          />
          <br />
          <br />
          {loading?(
            <div> Loading...</div>
          ):(

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
            initialValue={inval}
             
             onEditorChange={(content) => {
                
                setContent(content)
                let inval = content
                localStorage.setItem('post-content' , JSON.stringify(content))
             }}
            //  onInit={
            //     initialValue={initialValuee}
            //  }
             
    
           />
          )}
         
          {/* <div className="editor-scroll">
            {/* <Editor
              dark={theme === "light" ? false : true}
              defaultValue={content}
              onChange={(v) => {
                setContent(v());
                localStorage.setItem("post-content", JSON.stringify(v()));
              }}
              uploadImage={uploadImage}
            /> */}
          

          <br />
          <br />

          {/* <pre>{JSON.stringify(loadedCategories, null, 4)}</pre> */}
        </Col>

        <Col span={6} offset={1}>
          <Button
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            onClick={() => setVisible(true)}
          >
            Preview
          </Button>

          <Button
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            onClick={() => setMedia({ ...media, showMediaModal: true })}
          >
            <UploadOutlined /> Featured Image
          </Button>

          <h4>Categories</h4>

          <Select
            mode="multiple"
            allowClear={true}
            placeholder="Select categories"
            style={{ width: "100%" }}
            onChange={(v) => setCategories(v)}
            value = {[...categories]}
          >
            {loadedCategories.map((item) => (
              <Option key={item.name}>{item.name}</Option>
            ))}
          </Select>

          {media?.selected ? (
            <div style={{ marginTop: "15px" }}>
              <Image width="100%" src={media?.selected?.url} />
            </div>
          ): featuredImage?.url ? (  
          <div style={{ marginTop: "15px" }}>
          <Image width="100%" src={featuredImage?.url} />
        </div>) : (
            ""
        )

          }

          <Button
            loading={loading}
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            type="primary"
            onClick={handlePublish}
          >
            Publish
          </Button>
        </Col>
        {/* preview modal */}
        <Modal
          title="Preview"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={720}
          footer={null}
        >
          <h1>{title}</h1>
          <Editor
            dark={theme === "light" ? false : true}
            initialValue={content}
            init= {{
                readOnly: true
            }}
            
          />
        </Modal>
        {/* media modal */}
        <Modal
          visible={media.showMediaModal}
          title="Media"
          onOk={() => setMedia({ ...media, showMediaModal: false })}
          onCancel={() => setMedia({ ...media, showMediaModal: false })}
          width={720}
          footer={null}
        >
          <Media />
        </Modal>
      </Row>
    
  );
}

export default EditPost;