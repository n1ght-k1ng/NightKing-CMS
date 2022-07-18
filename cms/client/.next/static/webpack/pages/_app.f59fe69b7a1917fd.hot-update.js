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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SubMenu = antd__WEBPACK_IMPORTED_MODULE_6__.Menu.SubMenu;\nvar TopNav = function() {\n    var ref;\n    _s();\n    // context\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext), auth = ref1[0], setAuth = ref1[1];\n    // state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref2[0], setCurrent = ref2[1];\n    // hooks\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var handleClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    var signOut = function() {\n        // remove from local storage\n        localStorage.removeItem(\"auth\");\n        // remove from context\n        setAuth({\n            user: null,\n            token: \"\"\n        });\n        // redirect to login\n        router.push(\"/signin\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        onClick: handleClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.MailOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"CMS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            }, \"mail\", false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            (auth === null || auth === void 0 ? void 0 : auth.user) === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signup\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signin\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Signin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signin\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            (auth === null || auth === void 0 ? void 0 : auth.user) !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SettingOutlined, {}, void 0, false, void 0, void 0),\n                        title: (auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.name) || \"Dashboard\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.ItemGroup, {\n                            title: \"Management\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/admin\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Admin\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, _this)\n                            }, \"setting:2\", false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"SubMenu\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        onClick: function() {\n                            return signOut();\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Sign out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signout\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopNav, \"FOY/6Iee9KJWH6Fp1Nnr7RVmevM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLENBQUFBLEdBQVUsR0FBVkEsSUFBSSxDQUFFYSxJQUFJLGNBQVZiLEdBQVUsY0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxHQUFVLENBQUUyQixJQUFJLENBQU4sSUFBVSxXQUFXO3dCQUN0Q0gsS0FBSyxFQUFFOzRCQUFFQyxVQUFVLEVBQUUsTUFBTTt5QkFBRTtrQ0FFN0IsNEVBQUN0QyxnREFBYzs0QkFBQ3VDLEtBQUssRUFBQyxZQUFZO3NDQUNoQyw0RUFBQ3ZDLDJDQUFTOzBDQUNSLDRFQUFDUSxrREFBSTtvQ0FBQzJCLElBQUksRUFBQyxRQUFROzhDQUNqQiw0RUFBQ0MsR0FBQztrREFBQyxPQUFLOzs7Ozs2Q0FBSTs7Ozs7eUNBQ1A7K0JBSE0sV0FBVzs7OztxQ0FJZDs7Ozs7aUNBQ0c7dUJBWGIsU0FBUzs7Ozs2QkFZTDtrQ0FFViw4REFBQ3BDLDJDQUFTO3dCQUNSNkIsT0FBTyxFQUFFO21DQUFNTixPQUFPLEVBQUU7eUJBQUE7d0JBRXhCVyxJQUFJLGdCQUFFLDhEQUFDNUIsNkRBQWMsb0NBQUc7a0NBRXhCLDRFQUFDOEIsR0FBQztzQ0FBQyxVQUFROzs7OztpQ0FBSTt1QkFIWCxTQUFTOzs7OzZCQUlIOzs0QkFDWDswQkFHTCw4REFBQ3BDLDJDQUFTOzBCQUNSLDRFQUFDTyxvREFBVzs7Ozt5QkFBRzs7Ozs7cUJBQ0w7Ozs7OzthQUNQLENBQ1A7Q0FDSDtHQXpGS0ssTUFBTTs7UUFNS0Ysa0RBQVM7OztBQU5wQkUsS0FBQUEsTUFBTTtBQTJGWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTWFpbE91dGxpbmVkLFxyXG4gIEFwcHN0b3JlT3V0bGluZWQsXHJcbiAgU2V0dGluZ091dGxpbmVkLFxyXG4gIFVzZXJBZGRPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgTG9nb3V0T3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBUb2dnbGVUaGVtZSBmcm9tIFwiLi9Ub2dnbGVUaGVtZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICAvLyBjb250ZXh0XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIm1haWxcIik7XHJcbiAgLy8gaG9va3NcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XHJcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xyXG4gICAgLy8gcmVtb3ZlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgLy8gcmVtb3ZlIGZyb20gY29udGV4dFxyXG4gICAgc2V0QXV0aCh7XHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIHRva2VuOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpblxyXG4gICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XHJcbiAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcclxuICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgID5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWlsXCIgaWNvbj17PE1haWxPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkNNUzwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAge2F1dGg/LnVzZXIgPT09IG51bGwgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgIGtleT1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIGljb249ezxVc2VyQWRkT3V0bGluZWQgLz59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgPGE+U2lnbnVwPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2lnbmluXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgPGE+U2lnbmluPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHthdXRoPy51c2VyICE9PSBudWxsICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgICAga2V5PVwiU3ViTWVudVwiXHJcbiAgICAgICAgICAgIGljb249ezxTZXR0aW5nT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgIHRpdGxlPXthdXRoPy51c2VyPy5uYW1lIHx8IFwiRGFzaGJvYXJkXCJ9IFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCJNYW5hZ2VtZW50XCI+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzZXR0aW5nOjJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+QWRtaW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XHJcbiAgICAgICAgICAgIGtleT1cInNpZ25vdXRcIlxyXG4gICAgICAgICAgICBpY29uPXs8TG9nb3V0T3V0bGluZWQgLz59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPlNpZ24gb3V0PC9hPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgIDxUb2dnbGVUaGVtZSAvPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJNZW51IiwiTWFpbE91dGxpbmVkIiwiQXBwc3RvcmVPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlVzZXJBZGRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkxvZ291dE91dGxpbmVkIiwiVG9nZ2xlVGhlbWUiLCJMaW5rIiwiQXV0aENvbnRleHQiLCJ1c2VSb3V0ZXIiLCJTdWJNZW51IiwiVG9wTmF2IiwiYXV0aCIsInNldEF1dGgiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJzaWduT3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJ0b2tlbiIsInB1c2giLCJvbkNsaWNrIiwic2VsZWN0ZWRLZXlzIiwibW9kZSIsInRoZW1lIiwiSXRlbSIsImljb24iLCJocmVmIiwiYSIsInN0eWxlIiwibWFyZ2luTGVmdCIsInRpdGxlIiwibmFtZSIsIkl0ZW1Hcm91cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});