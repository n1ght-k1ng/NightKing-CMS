"use strict";
exports.id = 5889;
exports.ids = [5889];
exports.modules = {

/***/ 5030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UploadFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3456);
/* harmony import */ var _MediaLibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1974);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UploadFile__WEBPACK_IMPORTED_MODULE_2__, _MediaLibrary__WEBPACK_IMPORTED_MODULE_3__]);
([_UploadFile__WEBPACK_IMPORTED_MODULE_2__, _MediaLibrary__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { TabPane  } = antd__WEBPACK_IMPORTED_MODULE_4__.Tabs;
const Media = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
                tab: "Upload File",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadFile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }, "1"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
                tab: "Media Library",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaLibrary__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }, "2")
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6451);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1364);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1398);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _media_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5030);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4657);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, _media_index__WEBPACK_IMPORTED_MODULE_10__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, _media_index__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import AdminLayout from "../../../components/layout/adminLayout";





// import ToggleTheme from "../../../components/ToggleTheme";







// const {Content , Sider} = Layout;
const { Option  } = antd__WEBPACK_IMPORTED_MODULE_1__.Select;
const ResizeFile = (file)=>new Promise((resolve)=>{
        Resizer.imageFileResizer(file, 7200, 400, "JPEG", 100, 0, (uri)=>{
            resolve(uri);
        }, "base64");
    });
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
const uploadImage = async (file)=>{
    try {
        const image = await ResizeFile(file);
        console.log("image b64", image);
        const { data  } = await axios.post("/upload-image", {
            image
        });
        console.log("Uploaded image: " + data);
        return data.url;
    } catch (err) {
        console.log(err);
    }
};
function NewPostComponent({ page ="admin"  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handlePublish = async ()=>{
        setLoading(true);
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().post("/create-post", {
                title,
                text,
                categories,
                featuredImage: media?.selected?._id
            });
            if (data?.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].error(data?.error);
                setLoading(false);
            } else {
                console.log("POST PUBLISH RESS  =>", data);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].success("Post Created Successfully");
                localStorage.removeItem("post-title");
                setMedia({
                    ...media,
                    selected: null
                });
                localStorage.removeItem("post-content");
                setCategories([]);
                setLoading(false);
                router.push(`/${page}/posts`);
            }
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].error("Post Publish Failed");
            setLoading(false);
        }
    };
    // load from local storage
    const saveTitle = ()=>{
        if (false) {}
    };
    const saveContent = ()=>{
        if (false) {}
    };
    const { 0: initialValuee , 1: setInitialValuee  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Welcome to NightKing-CMS");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (false) {}
    }, []);
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const log = ()=>{
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    const initialText = "Welcome to NightKing-CMS";
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_11__/* .MediaContext */ .Y);
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(saveContent());
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(saveTitle());
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loadedCategories , 1: setLoadedCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: ModalVisible , 1: setModalVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        loadCategories();
    }, []);
    const loadCategories = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get("/categories");
            setLoadedCategories(data);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 14,
                offset: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        children: " Create New Post"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        value: title,
                        placeholder: "Give you Post a Title",
                        onChange: (e)=>{
                            setTitle(e.target.value);
                            localStorage.setItem("post-title", JSON.stringify(e.target.value));
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
                        //  onInit={(evt, editor) =>{ 
                        //     editorRef.current = editor
                        // }}
                        apiKey: "g7wekghh9n4a5vw9pjog2yglr9kgert1sy9zlxcxvnyj0o9n",
                        init: {
                            selector: "textarea",
                            skin: `oxide-dark`,
                            content_css: "dark",
                            menubar: true,
                            //    height: 500,
                            //    width: 1000,
                            plugins: [
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount"
                            ],
                            toolbar: "undo redo | link image | code | formatselect | " + "bold italic backcolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent | " + "removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            file_picker_types: "file image media",
                            //    images_upload_url: `${uploadImage()}`,
                            //    automatic_uploads: true,
                            block_unsupported_drop: false
                        },
                        initialValue: initialValuee,
                        onEditorChange: (newText)=>{
                            setText(newText);
                            localStorage.setItem("post-content", JSON.stringify(newText));
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 6,
                offset: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        onClick: ()=>setVisible(true),
                        children: " Preview"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: " Categories "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                        mode: "multiple",
                        allowClear: true,
                        placeholder: "Select Categories",
                        style: {
                            width: "100%"
                        },
                        onChange: (v)=>setCategories(v),
                        children: loadedCategories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                children: item.name
                            }, item.name))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    media?.selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        width: "100%",
                        src: media?.selected?.url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        onClick: ()=>setMedia({
                                ...media,
                                showMediaModal: true
                            }),
                        children: "Featured Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                        title: "Media",
                        visible: media.showMediaModal,
                        onOk: ()=>setMedia({
                                ...media,
                                showMediaModal: false
                            }),
                        onCancel: ()=>setMedia({
                                ...media,
                                showMediaModal: false
                            }),
                        footer: null,
                        width: 720,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        type: "primary",
                        loading: loading,
                        onClick: handlePublish,
                        children: " Publish"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                title: "Preview",
                centered: true,
                visible: visible,
                onOk: ()=>setVisible(false),
                onCancel: ()=>setVisible(false),
                footer: null,
                width: 720,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        children: [
                            " ",
                            title,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
                        init: {
                            selector: "textarea",
                            skin: `oxide-dark`,
                            content_css: "dark",
                            menubar: false,
                            readonly: true
                        },
                        toolbar: "false",
                        initialValue: text
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPostComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;