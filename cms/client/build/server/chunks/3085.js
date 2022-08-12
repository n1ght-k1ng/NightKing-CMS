"use strict";
exports.id = 3085;
exports.ids = [3085];
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

/***/ 3085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4657);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5030);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _media__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _media__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ProfileUpdate = ({ page ="admin"  })=>{
    console.log("Enter Function");
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .V);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_7__/* .MediaContext */ .Y);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: Website , 1: setWebsite  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: role , 1: setRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [checked , setChecked] = useState('')
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const currentuser = async ()=>{
            try {
                if (router?.query?.id === "62f46bff3715daa70c0d5849" || router?.query?.id === "62e82a1525ce0b00c334926e" || router?.query?.id === "62f46c3d3715daa70c0d5853") {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error("You cant edit this user");
                    router.push("/");
                }
                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/user/${router?.query?.id}`);
                setId(data._id);
                setName(data.name);
                setEmail(data.email);
                setWebsite(data.website);
                setRole(data.role);
                setImage(data.image);
            } catch (err) {
                console.log(err);
            }
        };
        if (auth?.token) {
            currentuser();
        }
    }, [
        auth,
        router?.query?.id
    ]);
    // function to request a new user in backend
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4___default().put(`/update-user-by-${page}`, {
                id,
                name,
                email,
                Website,
                password,
                role,
                // make sure to use .populate('image') in controller currentUser response
                image: media?.selected?._id ? media.selected._id : image?._id ? image._id : undefined
            });
            if (data?.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(data.error);
            } else {
                if (auth?.user?._id === data._id) {
                    setAuth({
                        ...auth,
                        user: data
                    });
                    let fromLocalStorage = JSON.parse(localStorage.getItem("auth"));
                    fromLocalStorage.user = data;
                    localStorage.setItem("auth", JSON.stringify(fromLocalStorage));
                }
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success("User updated successfully");
            }
        // console.log("updated user" ,data);
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error("User update failed, Try again");
            setLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
            span: 12,
            offset: 6,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    style: {
                        marginBottom: "-10px"
                    },
                    children: "Update user"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        marginBottom: 20,
                        textAlign: "center"
                    },
                    children: media.selected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: 15
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                                src: media.selected.url,
                                size: 100
                            })
                        ]
                    }) : image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: 15
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                                src: image.url,
                                size: 100
                            })
                        ]
                    }) : ""
                }),
                auth?.user?.role !== "Subscriber" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                    style: {
                        margin: "20px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Full Name",
                    value: name,
                    onChange: (e)=>setName(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Website",
                    value: Website,
                    onChange: (e)=>setWebsite(e.target.value)
                }),
                page === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                    value: role,
                    style: {
                        margin: "20px 0px 10px 0px",
                        width: "100%"
                    },
                    onChange: (e)=>setRole(e),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                            value: "Subscriber",
                            children: " Subscriber "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                            value: "Author",
                            children: " Author "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
                            value: "Admin",
                            children: " Admin "
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    onClick: handleSubmit,
                    type: "default",
                    style: {
                        margin: "20px 0px 10px 0px"
                    },
                    loading: loading,
                    block: true,
                    children: "Submit"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileUpdate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;