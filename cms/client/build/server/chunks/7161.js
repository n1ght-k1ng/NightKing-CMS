"use strict";
exports.id = 7161;
exports.ids = [7161];
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

/***/ 7161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6451);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1364);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5030);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4657);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _media__WEBPACK_IMPORTED_MODULE_9__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _media__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import Editor from "rich-markdown-editor";








const { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__.Select;
function EditPost({ sentby ="admin"  }) {
    // context
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_10__/* .MediaContext */ .Y);
    // state
    const { 0: postId , 1: setPostId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let inval;
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // post's existing categories
    const { 0: loadedCategories , 1: setLoadedCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: featuredImage , 1: setFeaturedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // media Modal
    // const [visibleMedia, setVisibleMedia] = useState(false);
    // hook
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadPost();
    }, [
        router?.query?.slug
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCategories();
    }, []);
    const loadPost = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/post/${router.query.slug}`);
            console.log("GOT POST FOR EDIT", data);
            setTitle(data.post.title);
            setContent(data.post.text);
            setFeaturedImage(data.post.featuredImage);
            setPostId(data.post._id);
            // push category names
            let arr = [];
            data.post.categories.map((c)=>arr.push(c.name));
            setCategories(arr);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    const loadCategories = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get("/categories");
            setLoadedCategories(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handlePublish = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().put(`/edit-post/${postId}`, {
                title,
                content,
                categories,
                featuredImage: media?.selected?._id ? media?.selected?._id : featuredImage?._id ? featuredImage._id : undefined
            });
            if (data?.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(data?.error);
                setLoading(false);
            } else {
                // console.log("POST PUBLISHED RES => ", data);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success("Post Updated successfully");
                setMedia({
                    ...media,
                    selected: null
                });
                router.push(`/${sentby}/posts`);
            }
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Post update failed. Try again.");
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                span: 14,
                offset: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Edit post"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                        size: "large",
                        value: title,
                        placeholder: "Give your post a title",
                        onChange: (e)=>{
                            setTitle(e.target.value);
                            localStorage.setItem("post-title", JSON.stringify(e.target.value));
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: " Loading..."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
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
                        initialValue: "Welcome to NightKing-CMS... Start Bloggin !!",
                        onEditorChange: (content)=>{
                            setContent(content);
                            let inval = content;
                            localStorage.setItem("post-content", JSON.stringify(content));
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                span: 6,
                offset: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        onClick: ()=>setVisible(true),
                        children: "Preview"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        onClick: ()=>setMedia({
                                ...media,
                                showMediaModal: true
                            }),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UploadOutlined, {}),
                            " Featured Image"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                        mode: "multiple",
                        allowClear: true,
                        placeholder: "Select categories",
                        style: {
                            width: "100%"
                        },
                        onChange: (v)=>setCategories(v),
                        value: [
                            ...categories
                        ],
                        children: loadedCategories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                children: item.name
                            }, item.name))
                    }),
                    media?.selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginTop: "15px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            width: "100%",
                            src: media?.selected?.url
                        })
                    }) : featuredImage?.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginTop: "15px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            width: "100%",
                            src: featuredImage?.url
                        })
                    }) : "",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        loading: loading,
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        type: "primary",
                        onClick: handlePublish,
                        children: "Publish"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                title: "Preview",
                centered: true,
                visible: visible,
                onOk: ()=>setVisible(false),
                onCancel: ()=>setVisible(false),
                width: 720,
                footer: null,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
                        dark: theme === "light" ? false : true,
                        initialValue: content,
                        init: {
                            readOnly: true
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                visible: media.showMediaModal,
                title: "Media",
                onOk: ()=>setMedia({
                        ...media,
                        showMediaModal: false
                    }),
                onCancel: ()=>setMedia({
                        ...media,
                        showMediaModal: false
                    }),
                width: 720,
                footer: null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;