"use strict";
exports.id = 7958;
exports.ids = [7958];
exports.modules = {

/***/ 7958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(730);
/* harmony import */ var antd_lib_transfer_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5421);
/* harmony import */ var antd_lib_transfer_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_transfer_search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7424);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(724);



// import { commentsContext } from '../../../context/comments';









dayjs__WEBPACK_IMPORTED_MODULE_6___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_10___default()));
// const {Content , Sider} = Layout;
function UserComments() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: keyword , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selectedComment , 1: setSelectedComment  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_8__/* .AuthContext */ .V);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth?.token) {
            fetchcomments();
        }
    }, [
        auth?.token
    ]);
    const fetchcomments = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/user-comments`);
            setComments(data) // updating the previous pre
            ;
        } catch (err) {
            console.log(err);
        }
    };
    const filteredComments = comments?.filter((comment)=>comment.content.toLowerCase().includes(keyword));
    const handleDelete = async (comment)=>{
        try {
            const answer = window.confirm("Are you sure you want to delete this comment?");
            if (!answer) return;
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"](`/comment/${comment._id}`);
            if (data?.ok) {
                setComments(comments.filter((c)=>c._id !== comment._id));
                setTotal(total - 1);
                toast.success("Comment deleted successfully");
            }
        } catch (err) {
            console.log(err);
        }
        console.log("Delete", comments);
    };
    const handleSubmit = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().put(`/comment/${selectedComment._id}`, {
                content
            });
            let arr = comments;
            const index = arr.findIndex((c)=>c._id === selectedComment._id);
            arr[index].content = data.content;
            setComments(arr);
            setVisible(false);
            setLoading(false);
            setSelectedComment("");
            toast.success("Comment edited");
        } catch (err) {
            console.log(err);
            setVisible(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
                    span: 24,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            style: {
                                marginTop: 15
                            },
                            children: [
                                " ",
                                comments?.length,
                                " Comments "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                            placeholder: "Search",
                            type: "search",
                            value: keyword,
                            onChange: (e)=>setKeyword(e.target.value.toLowerCase())
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.List, {
                            itemLayout: "horizontal",
                            dataSource: filteredComments,
                            renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item, {
                                    actions: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/post/${item?.postId?.slug}#${item._id}`,
                                            children: "view"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            onClick: ()=>{
                                                setSelectedComment(item);
                                                setVisible(true);
                                                setContent(item.content);
                                            },
                                            children: "edit"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            onClick: ()=>handleDelete(item),
                                            children: " delete"
                                        })
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item.Meta, {
                                        title: item.content,
                                        description: `On ${item?.postId?.title} | ${item?.postedBy?.name} | ${dayjs__WEBPACK_IMPORTED_MODULE_6___default()(item.createdAt).format("L LT")}`
                                    })
                                })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
                    span: 24,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Modal, {
                        visible: visible,
                        title: "Update Comment",
                        onOk: ()=>setVisible(false),
                        onCancel: ()=>setVisible(false),
                        footer: null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            handleSubmit: handleSubmit,
                            comment: content,
                            setComment: setContent,
                            loading: loading
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComments);


/***/ })

};
;