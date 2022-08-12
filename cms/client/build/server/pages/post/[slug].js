"use strict";
(() => {
var exports = {};
exports.id = 6515;
exports.ids = [6515];
exports.modules = {

/***/ 7016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePost": () => (/* binding */ SinglePost),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6451);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_comments_CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(724);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6201);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9055);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_share_social__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useCategory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3751);
/* harmony import */ var _hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7577);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13___default()));
// import { categories } from '../../../server/controllers/category'
const { Meta  } = antd__WEBPACK_IMPORTED_MODULE_2__.Card;
const { Title  } = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const SinglePost = ({ post , postComments  })=>{
    const { 0: comment , 1: setComment  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(postComments);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { categories  } = (0,_hooks_useCategory__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { Latestposts  } = (0,_hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const handleSubmit = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/comment/${post._id}`, {
                comment
            });
            setComments([
                data,
                ...comments
            ]);
            setComment("");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].success("Comment posted successfully");
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        " ",
                        post.title,
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xs: 24,
                        xl: 16,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
                            cover: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: post?.featuredImage?.url || "/images/default.jpg"
                            }),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                    children: post.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        dayjs__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt).format("MMMM D , YYYY h:mm A"),
                                        " in",
                                        post?.categories.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: `/category/${c.slug}`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        children: [
                                                            c.name,
                                                            " "
                                                        ]
                                                    })
                                                })
                                            }, c._id))
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "======================================"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginBottom: 50
                                    },
                                    children: "   "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "-20px",
                                        marginBottom: "15px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_4__.Editor, {
                                    apiKey: "g7wekghh9n4a5vw9pjog2yglr9kgert1sy9zlxcxvnyj0o9n",
                                    init: {
                                        selector: "textarea",
                                        skin: `oxide-dark`,
                                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:40px; font-weight:bold; }",
                                        toolbar: false,
                                        menubar: false,
                                        inline: true,
                                        noneditable_class: "mceNonEditable",
                                        readonly: true,
                                        plugins: "noneditable template",
                                        noneditable_noneditable_class: "is-locked"
                                    },
                                    initialValue: post.text
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comments_CommentForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    comment: comment,
                                    setComment: setComment,
                                    handleSubmit: handleSubmit,
                                    loading: loading
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginBottom: 50
                                    },
                                    children: "   "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List, {
                                    itemLayout: "horizontal",
                                    dataSource: comments,
                                    renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                                            id: item?._id,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item.Meta, {
                                                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                    children: item?.postedBy?.name[0].charAt(0)
                                                }),
                                                title: item?.postedBy?.name,
                                                description: `${item?.content} - ${dayjs__WEBPACK_IMPORTED_MODULE_3___default()(item?.createdAt).fromNow()}`
                                            })
                                        }, item?._id)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xs: 22,
                        xl: 6,
                        offset: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                children: "Categories"
                            }),
                            categories.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: `/category/${c.slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            style: {
                                                margin: 2
                                            },
                                            children: c.name
                                        })
                                    })
                                }, c.name)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                children: " Latest Posts"
                            }),
                            Latestposts.map((p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: `/post/${p.slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            style: {
                                                fontSize: "20px"
                                            },
                                            children: p.title
                                        })
                                    })
                                }, p.name))
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps({ params  }) {
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${process.env.API}/post/${params.slug}`);
    return {
        props: {
            post: data.post,
            postComments: data.comments
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6451:
/***/ ((module) => {

module.exports = require("@tinymce/tinymce-react");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9055:
/***/ ((module) => {

module.exports = require("react-share-social");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,730,706,724], () => (__webpack_exec__(7016)));
module.exports = __webpack_exports__;

})();