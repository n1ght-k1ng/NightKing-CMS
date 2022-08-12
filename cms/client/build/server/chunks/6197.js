"use strict";
exports.id = 6197;
exports.ids = [6197];
exports.modules = {

/***/ 6197:
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
/* harmony import */ var _nav_SubscriberNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8467);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(730);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoadingToRedirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5330);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ToggleTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nav_SubscriberNav__WEBPACK_IMPORTED_MODULE_3__]);
_nav_SubscriberNav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











// import { get } from "mongoose";
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
function SubscriberLayout(props) {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .V);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth?.token) getcurrentSubscriber();
        setLoading(false);
    }, [
        auth?.token
    ]);
    const getcurrentSubscriber = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_8___default().get("/current-subscriber");
            setLoading(false);
        } catch (err) {
            console.log(err);
            router.push("/");
        }
    };
    // Securing routes 
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoadingToRedirect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Layout, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Layout, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav_SubscriberNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                    style: {
                        padding: "10px"
                    },
                    children: props.children
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriberLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8467:
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
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(730);
/* harmony import */ var _react_hook_window_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9997);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_react_hook_window_size__WEBPACK_IMPORTED_MODULE_5__]);
_react_hook_window_size__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const { SubMenu  } = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;
const { Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
const SubscriberNav = ()=>{
    // state
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .V);
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onlywidth = (0,_react_hook_window_size__WEBPACK_IMPORTED_MODULE_5__.useWindowWidth)();
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
                        href: "/subscriber",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/subscriber"),
                            children: "Dashboard"
                        })
                    })
                }, "1"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CommentOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/subscriber/comments",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/subscriber/comments"),
                            children: "Comments"
                        })
                    })
                }, "9"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/subscriber/${auth?.user?._id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName(`/subscriber/${auth?.user?._id}`),
                            children: "Profile"
                        })
                    })
                }, "13")
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriberNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;