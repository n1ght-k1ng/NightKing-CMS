"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SubMenu = antd__WEBPACK_IMPORTED_MODULE_6__.Menu.SubMenu;\nvar TopNav = function() {\n    var ref;\n    _s();\n    // context\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext), auth = ref1[0], setAuth = ref1[1];\n    // state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref2[0], setCurrent = ref2[1];\n    // hooks\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var rolebasedlink = function() {\n        var ref, ref1;\n        if ((auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.role) === \"Admin\") {\n            return \"/admin\";\n        } else if ((data === null || data === void 0 ? void 0 : (ref1 = data.user) === null || ref1 === void 0 ? void 0 : ref1.role) === \"Author\") {\n            return \"/author\";\n        } else {\n            return \"/subscriber\";\n        }\n    };\n    var handleClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    var signOut = function() {\n        // remove from local storage\n        localStorage.removeItem(\"auth\");\n        // remove from context\n        setAuth({\n            user: null,\n            token: \"\"\n        });\n        // redirect to login\n        router.push(\"/signin\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        onClick: handleClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.MailOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"CMS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, \"mail\", false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            (auth === null || auth === void 0 ? void 0 : auth.user) === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signup\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signin\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Signin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signin\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            (auth === null || auth === void 0 ? void 0 : auth.user) !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SettingOutlined, {}, void 0, false, void 0, void 0),\n                        title: (auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.name) || \"Dashboard\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.ItemGroup, {\n                            title: \"Management\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: rolebasedlink,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Admin\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, _this)\n                            }, \"setting:2\", false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"SubMenu\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        onClick: function() {\n                            return signOut();\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Sign out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signout\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopNav, \"FOY/6Iee9KJWH6Fp1Nnr7RVmevM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRTttQ0FBTUwsT0FBTyxFQUFFO3lCQUFBO3dCQUV4QlUsSUFBSSxnQkFBRSw4REFBQy9CLDZEQUFjLG9DQUFHO2tDQUV4Qiw0RUFBQ2lDLEdBQUM7c0NBQUMsVUFBUTs7Ozs7aUNBQUk7dUJBSFgsU0FBUzs7Ozs2QkFJSDs7NEJBQ1g7MEJBR0wsOERBQUN2QywyQ0FBUzswQkFDUiw0RUFBQ08sb0RBQVc7Ozs7eUJBQUc7Ozs7O3FCQUNMOzs7Ozs7YUFDUCxDQUNQO0NBQ0g7R0F0R0tLLE1BQU07O1FBTUtGLGtEQUFTOzs7QUFOcEJFLEtBQUFBLE1BQU07QUF3R1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIE1haWxPdXRsaW5lZCxcclxuICBBcHBzdG9yZU91dGxpbmVkLFxyXG4gIFNldHRpbmdPdXRsaW5lZCxcclxuICBVc2VyQWRkT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIExvZ291dE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgVG9nZ2xlVGhlbWUgZnJvbSBcIi4vVG9nZ2xlVGhlbWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgLy8gY29udGV4dFxyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xyXG4gIC8vIGhvb2tzXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHJvbGViYXNlZGxpbmsgPSAoKSA9PiB7XHJcbiAgICBpZihhdXRoPy51c2VyPy5yb2xlID09PSAnQWRtaW4nKXtcclxuXHJcbiAgICAgIHJldHVybignL2FkbWluJylcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmIChkYXRhPy51c2VyPy5yb2xlID09PSAnQXV0aG9yJyl7XHJcbiAgICAgIHJldHVybihcIi9hdXRob3JcIilcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4oJy9zdWJzY3JpYmVyJylcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcclxuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICAvLyByZW1vdmUgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICAvLyByZW1vdmUgZnJvbSBjb250ZXh0XHJcbiAgICBzZXRBdXRoKHtcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgdG9rZW46IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIHJlZGlyZWN0IHRvIGxvZ2luXHJcbiAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cclxuICAgICAgbW9kZT1cImhvcml6b250YWxcIlxyXG4gICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIiBpY29uPXs8TWFpbE91dGxpbmVkIC8+fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+Q01TPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICB7YXV0aD8udXNlciA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX1cclxuICAgICAgICAgICAga2V5PVwic2lnbnVwXCJcclxuICAgICAgICAgICAgaWNvbj17PFVzZXJBZGRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzaWduaW5cIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICA8YT5TaWduaW48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2F1dGg/LnVzZXIgIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgICBrZXk9XCJTdWJNZW51XCJcclxuICAgICAgICAgICAgaWNvbj17PFNldHRpbmdPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgdGl0bGU9e2F1dGg/LnVzZXI/Lm5hbWUgfHwgXCJEYXNoYm9hcmRcIn0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCB0aXRsZT1cIk1hbmFnZW1lbnRcIj5cclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNldHRpbmc6MlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm9sZWJhc2VkbGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkFkbWluPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICBrZXk9XCJzaWdub3V0XCJcclxuICAgICAgICAgICAgaWNvbj17PExvZ291dE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YT5TaWduIG91dDwvYT5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICA8VG9nZ2xlVGhlbWUgLz5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTWVudSIsIk1haWxPdXRsaW5lZCIsIkFwcHN0b3JlT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJVc2VyQWRkT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJMb2dvdXRPdXRsaW5lZCIsIlRvZ2dsZVRoZW1lIiwiTGluayIsIkF1dGhDb250ZXh0IiwidXNlUm91dGVyIiwiU3ViTWVudSIsIlRvcE5hdiIsImF1dGgiLCJzZXRBdXRoIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJyb3V0ZXIiLCJyb2xlYmFzZWRsaW5rIiwiZGF0YSIsInVzZXIiLCJyb2xlIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSIsInNpZ25PdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidG9rZW4iLCJwdXNoIiwib25DbGljayIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJ0aGVtZSIsIkl0ZW0iLCJpY29uIiwiaHJlZiIsImEiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJ0aXRsZSIsIm5hbWUiLCJJdGVtR3JvdXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});