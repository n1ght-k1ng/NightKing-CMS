"use strict";
exports.id = 5787;
exports.ids = [5787];
exports.modules = {

/***/ 5787:
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
/* harmony import */ var _components_nav_AdminNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7883);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(730);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoadingToRedirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5330);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ToggleTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_nav_AdminNav__WEBPACK_IMPORTED_MODULE_3__]);
_components_nav_AdminNav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











// import { get } from "mongoose";
const { Content  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
function AdminLayout(props) {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .V);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth?.token) getcurrentAdmin();
        setLoading(false);
    }, [
        auth?.token
    ]);
    const getcurrentAdmin = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_8___default().get("/current-admin");
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_AdminNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7883:
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
// import {
//     PushpinOutlined,
//     AppstoreOutlined,
//     PieChartOutlined,
//     DatabaseOutlined,
//     PlusOutlined,
//     FolderViewOutlined,
//     CommentOutlined,
//     BookOutlined,
//     PlusCircleOutlined,
//     UserOutlined,
//     ProfileOutlined,
//     UserAddOutlined,
//     UsergroupAddOutlined,
//     EditOutlined ,
//   } from '@ant-design/icons';
//   import { Button, Menu ,Layout } from 'antd';
//   import React, { useState , useEffect } from 'react';
//   import Link from "next/link"
//   function getItem(label, key, icon, children, type) {
//     label.className = 'active'
//     return {
//       key,
//       icon,
//       children,
//       label,
//       type,
//     };
//   }
//   const {Sider} = Layout
//   // const items = [
//   //   getItem(<a className={activeName("/admin")} href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
//   //   getItem('Posts','o1' , <PushpinOutlined/>,[ 
//   //   getItem(<a className={activeName("/admin/post")}  href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
//   //   getItem(<a className={activeName("/admin/post/new")} href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
//   //   getItem(<a className={activeName("/admin/post/categories")} href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
//   //   getItem('Media', 'o2', <AppstoreOutlined />, [
//   //     getItem(<a className={activeName("/admin/media/libraries")} href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
//   //     getItem(<a className={activeName("/admin/media/new")}  href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
//   //   ]),
//   //   getItem(<a className={activeName("/admin/comments")} href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
//   //   getItem('Users' , 'o3',<UsergroupAddOutlined />, [
//   //       getItem(<a className={activeName("/admin/users")} href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
//   //       getItem(<a className={activeName("/admin/users/new")} href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
//   //   ]),
//   //   getItem(<a className={activeName("/admin/userid")} href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
//   //   getItem(<a className={activeName("/admin/customise")} href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
//   // ];
//   const AdminNav = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     // useEffect(()=>{
//     //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//     // },[process.browser && window.location.pathname])
//     // const [current,setCurrent ] = useState('')
//     // const activeName = (name) => `${current === name && current == "active"}`
//     const items = [
//       getItem(<a className='' href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
//       getItem('Posts','o1' , <PushpinOutlined/>,[ 
//       getItem(<a className='active'  href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
//       getItem(<a className='active' href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
//       getItem(<a className='active' href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
//       getItem('Media', 'o2', <AppstoreOutlined />, [
//         getItem(<a className='active' href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
//         getItem(<a className='active'  href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
//       ]),
//       getItem(<a className='active'href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
//       getItem('Users' , 'o3',<UsergroupAddOutlined />, [
//           getItem(<a className='active' href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
//           getItem(<a className='active' href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
//       ]),
//       getItem(<a className='active'href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
//       getItem(<a className='active' href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
//       // useEffect(()=>{
//       //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//       // },[process.browser && window.location.pathname])
//     ];
//     // const items = [
//     //   getItem(<a href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
//     //   getItem('Posts','o1' , <PushpinOutlined/>,[ 
//     //   getItem(<a href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
//     //   getItem(<a href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
//     //   getItem(<a href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
//     //   getItem('Media', 'o2', <AppstoreOutlined />, [
//     //     getItem(<a href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
//     //     getItem(<a href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
//     //   ]),
//     //   getItem(<a href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
//     //   getItem('Users' , 'o3',<UsergroupAddOutlined />, [
//     //       getItem(<a href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
//     //       getItem(<a href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
//     //   ]),
//     //   getItem(<a href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
//     //   getItem(<a href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
//     //   // useEffect(()=>{
//     //   //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//     //   // },[process.browser && window.location.pathname])
//     // ];
//     // // process.browser && console.log(window.location.pathname)
//     const toggleCollapsed = () => {
//       setCollapsed(!collapsed);
//     };
//     return (
//       <Sider collapsible
//       >
//         <Menu
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['o1','o2','o3']}
//           mode="inline"
//         //   theme="dark"
//           inlineCollapsed={collapsed}
//           items={items}
//           // useEffect(()=>{
//           //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//           // },[process.browser && window.location.pathname])
//         />
//       </Sider>
//     );
//   };
//   export default AdminNav;







const { SubMenu  } = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;
const { Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
const AdminNav = ()=>{
    // state
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onlywidth = (0,_react_hook_window_size__WEBPACK_IMPORTED_MODULE_4__.useWindowWidth)();
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
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
                        href: "/admin",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/admin"),
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
                                href: "/admin/posts",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/posts"),
                                    children: "All Posts"
                                })
                            })
                        }, "3"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/posts/new",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/posts/new"),
                                    children: "Add New"
                                })
                            })
                        }, "4"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/categories",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/categories"),
                                    children: "Categories"
                                })
                            })
                        }, "5")
                    ]
                }, "2"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubMenu, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CameraOutlined, {}),
                    title: "Media",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/media/library",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/media/library"),
                                    children: "Library"
                                })
                            })
                        }, "7"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/media/new",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/media/new"),
                                    children: "Add New"
                                })
                            })
                        }, "8")
                    ]
                }, "6"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CommentOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/admin/comments",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/admin/comments"),
                            children: "Comments"
                        })
                    })
                }, "9"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubMenu, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserSwitchOutlined, {}),
                    title: "Users",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/users",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/users"),
                                    children: "All Users"
                                })
                            })
                        }, "11"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/users/new",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: activeName("/admin/users/new"),
                                    children: "Add New"
                                })
                            })
                        }, "12")
                    ]
                }, "10"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/admin/${auth?.user?._id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName(`/admin/${auth?.user?._id}`),
                            children: "Profile"
                        })
                    })
                }, "13"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.BgColorsOutlined, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/admin/customize",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: activeName("/admin/customise"),
                            children: "Customize"
                        })
                    })
                }, "14")
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;