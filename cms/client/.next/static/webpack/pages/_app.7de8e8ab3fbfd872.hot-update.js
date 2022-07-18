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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SubMenu = antd__WEBPACK_IMPORTED_MODULE_6__.Menu.SubMenu;\nvar TopNav = function() {\n    var ref;\n    _s();\n    // context\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext), auth = ref1[0], setAuth = ref1[1];\n    // state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref2[0], setCurrent = ref2[1];\n    // hooks\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var rolebasedlink = function() {\n        var ref, ref1;\n        if ((auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.role) === \"Admin\") {\n            return \"/admin\";\n        } else if ((auth === null || auth === void 0 ? void 0 : (ref1 = auth.user) === null || ref1 === void 0 ? void 0 : ref1.role) === \"Author\") {\n            return \"/author\";\n        } else {\n            return \"/subscriber\";\n        }\n    };\n    var handleClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    var signOut = function() {\n        // remove from local storage\n        localStorage.removeItem(\"auth\");\n        // remove from context\n        setAuth({\n            user: null,\n            token: \"\"\n        });\n        // redirect to login\n        router.push(\"/signin\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        onClick: handleClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.MailOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"CMS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, \"mail\", false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            (auth === null || auth === void 0 ? void 0 : auth.user) === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signup\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signin\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Signin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signin\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            (auth === null || auth === void 0 ? void 0 : auth.user) !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SettingOutlined, {}, void 0, false, void 0, void 0),\n                        title: (auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.name) || \"Dashboard\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.ItemGroup, {\n                            title: \"Management\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: rolebasedlink(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Admin\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, _this)\n                            }, \"setting:2\", false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"SubMenu\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        onClick: function() {\n                            return signOut();\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Sign out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, _this)\n                    }, \"signout\", false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopNav, \"FOY/6Iee9KJWH6Fp1Nnr7RVmevM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0IsT0FBTyxFQUFFO21DQUFNTCxPQUFPLEVBQUU7eUJBQUE7d0JBRXhCVSxJQUFJLGdCQUFFLDhEQUFDOUIsNkRBQWMsb0NBQUc7a0NBRXhCLDRFQUFDZ0MsR0FBQztzQ0FBQyxVQUFROzs7OztpQ0FBSTt1QkFIWCxTQUFTOzs7OzZCQUlIOzs0QkFDWDswQkFHTCw4REFBQ3RDLDJDQUFTOzBCQUNSLDRFQUFDTyxvREFBVzs7Ozt5QkFBRzs7Ozs7cUJBQ0w7Ozs7OzthQUNQLENBQ1A7Q0FDSDtHQXRHS0ssTUFBTTs7UUFNS0Ysa0RBQVM7OztBQU5wQkUsS0FBQUEsTUFBTTtBQXdHWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTWFpbE91dGxpbmVkLFxyXG4gIEFwcHN0b3JlT3V0bGluZWQsXHJcbiAgU2V0dGluZ091dGxpbmVkLFxyXG4gIFVzZXJBZGRPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgTG9nb3V0T3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBUb2dnbGVUaGVtZSBmcm9tIFwiLi9Ub2dnbGVUaGVtZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICAvLyBjb250ZXh0XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIm1haWxcIik7XHJcbiAgLy8gaG9va3NcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgcm9sZWJhc2VkbGluayA9ICgpID0+IHtcclxuICAgIGlmKGF1dGg/LnVzZXI/LnJvbGUgPT09ICdBZG1pbicpe1xyXG5cclxuICAgICAgcmV0dXJuKCcvYWRtaW4nKVxyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKGF1dGg/LnVzZXI/LnJvbGUgPT09ICdBdXRob3InKXtcclxuICAgICAgcmV0dXJuKFwiL2F1dGhvclwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybignL3N1YnNjcmliZXInKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xyXG4gICAgc2V0Q3VycmVudChlLmtleSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcclxuICAgIC8vIHJlbW92ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIC8vIHJlbW92ZSBmcm9tIGNvbnRleHRcclxuICAgIHNldEF1dGgoe1xyXG4gICAgICB1c2VyOiBudWxsLFxyXG4gICAgICB0b2tlbjogXCJcIixcclxuICAgIH0pO1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW5cclxuICAgIHJvdXRlci5wdXNoKFwiL3NpZ25pblwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnVcclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxyXG4gICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICA+XHJcbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbFwiIGljb249ezxNYWlsT3V0bGluZWQgLz59PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5DTVM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgIHthdXRoPy51c2VyID09PSBudWxsICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgICBrZXk9XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBpY29uPXs8VXNlckFkZE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgIDxhPlNpZ251cDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNpZ25pblwiIGljb249ezxVc2VyT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgICAgIDxhPlNpZ25pbjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7YXV0aD8udXNlciAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICAgIGtleT1cIlN1Yk1lbnVcIlxyXG4gICAgICAgICAgICBpY29uPXs8U2V0dGluZ091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICB0aXRsZT17YXV0aD8udXNlcj8ubmFtZSB8fCBcIkRhc2hib2FyZFwifSBcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIHRpdGxlPVwiTWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2V0dGluZzoyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyb2xlYmFzZWRsaW5rKCl9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5BZG1pbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cclxuICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cclxuICAgICAgICAgICAga2V5PVwic2lnbm91dFwiXHJcbiAgICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+U2lnbiBvdXQ8L2E+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgPFRvZ2dsZVRoZW1lIC8+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIk1lbnUiLCJNYWlsT3V0bGluZWQiLCJBcHBzdG9yZU91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiVXNlckFkZE91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiTG9nb3V0T3V0bGluZWQiLCJUb2dnbGVUaGVtZSIsIkxpbmsiLCJBdXRoQ29udGV4dCIsInVzZVJvdXRlciIsIlN1Yk1lbnUiLCJUb3BOYXYiLCJhdXRoIiwic2V0QXV0aCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwicm91dGVyIiwicm9sZWJhc2VkbGluayIsInVzZXIiLCJyb2xlIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSIsInNpZ25PdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidG9rZW4iLCJwdXNoIiwib25DbGljayIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJ0aGVtZSIsIkl0ZW0iLCJpY29uIiwiaHJlZiIsImEiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJ0aXRsZSIsIm5hbWUiLCJJdGVtR3JvdXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});