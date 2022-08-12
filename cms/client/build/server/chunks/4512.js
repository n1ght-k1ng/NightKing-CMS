"use strict";
exports.id = 4512;
exports.ids = [4512];
exports.modules = {

/***/ 4512:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_hook_window_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9997);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_react_hook_window_size__WEBPACK_IMPORTED_MODULE_4__]);
_react_hook_window_size__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const { SubMenu  } = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;
const { Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
const AuthorNav = ()=>{
    // state
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onlywidth = (0,_react_hook_window_size__WEBPACK_IMPORTED_MODULE_4__.useWindowWidth)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
         false && 0;
    }, [
         false && 0
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (onlywidth < 650) {
            setCollapsed(true);
        } else if (onlywidth > 650) {
            setCollapsed(false);
        }
    }, [
        onlywidth < 650
    ]);
    const activeName = (name)=>`${current === name && "active"}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Sider, {
        collapsible: true,
        collapsed: collapsed,
        onCollapse: ()=>setCollapsed(!collapsed),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
            // defaultSelectedKeys={["1"]}
            defaultOpenKeys: [
                "2",
                "6",
                "10"
            ],
            mode: "inline",
            inlineCollapsed: collapsed,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SettingOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/author",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/author"),
                            children: "Dashboard"
                        })
                    })
                }, "1"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubMenu, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.PushpinOutlined, {}),
                    title: "Posts",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/author/posts",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/author/posts"),
                                    children: "All Posts"
                                })
                            })
                        }, "3"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/author/posts/new",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/author/posts/new"),
                                    children: "Add New"
                                })
                            })
                        }, "4")
                    ]
                }, "2"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubMenu, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CameraOutlined, {}),
                    title: "Media",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/author/media/library",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/author/media/library"),
                                    children: "Library"
                                })
                            })
                        }, "7"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/author/media/new",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/author/media/new"),
                                    children: "Add New"
                                })
                            })
                        }, "8")
                    ]
                }, "6"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CommentOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/author/comments",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/author/comments"),
                            children: "Comments"
                        })
                    })
                }, "9"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/author/${auth?.user?._id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName(`/author/${auth?.user._id}`),
                            children: "Profile"
                        })
                    })
                }, "13")
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;