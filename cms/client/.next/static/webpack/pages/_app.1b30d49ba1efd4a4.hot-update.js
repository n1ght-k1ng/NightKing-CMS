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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext), auth = ref1[0], setAuth = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var signOut = function() {\n        //remove from local storage\n        localStorage.removeItem(\"auth\");\n        // remove from context\n        setAuth({\n            user: null,\n            token: \"\"\n        });\n        router.push(\"/signin\");\n    };\n    var items = [\n        {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"CMS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 34,\n                columnNumber: 14\n            }, _this),\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.MailOutlined, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        },\n        {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/signup\",\n                children: \"SignUp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 44,\n                columnNumber: 14\n            }, _this),\n            key: \"signup\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserAddOutlined, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this)\n        },\n        {\n            // label: 'Signin',\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/signin\",\n                children: \"SignIn\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 54,\n                columnNumber: 14\n            }, _this),\n            key: \"signin\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LoginOutlined, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this)\n        },\n        {\n            label: \"SignOut\",\n            onClick: function() {\n                return signOut();\n            },\n            key: \"signout\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LogoutOutlined, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        },\n        {\n            label: \"Dashboard\",\n            key: \"dashboard\",\n            style: {\n                marginLeft: \"auto\"\n            },\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SettingOutlined, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this),\n            children: [\n                {\n                    type: \"group\",\n                    label: \"Management\",\n                    children: [\n                        //   {\n                        //     label: 'Management',\n                        //     key: 'setting:1',\n                        //   },\n                        {\n                            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/admin\",\n                                children: \"Admin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 86,\n                                columnNumber: 22\n                            }, _this),\n                            key: \"setting:2\"\n                        }, \n                    ]\n                }, \n            ]\n        },\n        {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 111,\n                columnNumber: 11\n            }, _this),\n            // style: {marginLeft: \"auto\"},\n            key: \"alipay\"\n        }, \n    ];\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items,\n        theme: \"dark\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 126,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"GKspt/RQtqa8FB54sG+laTrCItk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcUIsQ0FBQyxDQUFDUCxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUVELHFCQUFPLDhEQUFDeEIsc0NBQUk7UUFBQzBCLE9BQU8sRUFBRUEsT0FBTztRQUFFUSxZQUFZLEVBQUU7WUFBQ3pCLE9BQU87U0FBQztRQUFFMEIsSUFBSSxFQUFDLFlBQVk7UUFBQ2YsS0FBSyxFQUFFQSxLQUFLO1FBQUVnQixLQUFLLEVBQUUsTUFBTTs7Ozs7YUFBRSxDQUFDO0NBQ3pHO0dBbEhLNUIsTUFBTTs7UUFJS0Qsa0RBQVM7OztBQUpwQkMsS0FBQUEsTUFBTTtBQW9IWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nb3V0T3V0bGluZWQsTG9naW5PdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgLCBVc2VyQWRkT3V0bGluZWQgLCBVc2VyT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9nZ2xlVGhlbWUgZnJvbSAnLi9Ub2dnbGVUaGVtZSc7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiXHJcbmltcG9ydCB7dXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCdtYWlsJyk7XHJcblxyXG4gIGNvbnN0IFthdXRoICwgc2V0QXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcclxuICAgIC8vcmVtb3ZlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKVxyXG4gICAgLy8gcmVtb3ZlIGZyb20gY29udGV4dFxyXG4gICAgc2V0QXV0aCh7XHJcbiAgICAgIHVzZXI6bnVsbCxcclxuICAgICAgdG9rZW46ICcnXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgcm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFxyXG4gICAgICBsYWJlbDogPGEgaHJlZj1cIi9cIj5cclxuICAgICAgQ01TXHJcbiAgICA8L2E+LFxyXG4gICAgICBrZXk6ICdtYWlsJyxcclxuICAgICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcclxuICBcclxuICAgIH0sXHJcbiAgXHJcbiAgICB7XHJcbiAgICAgIFxyXG4gICAgICBsYWJlbDogPGEgaHJlZiA9IFwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgU2lnblVwIFxyXG4gICAgICA8L2E+LFxyXG4gICAgICBrZXk6ICdzaWdudXAnLFxyXG4gICAgICBpY29uOiA8VXNlckFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXHJcbiAgICB7XHJcbiAgICAgIC8vIGxhYmVsOiAnU2lnbmluJyxcclxuICAgICAgbGFiZWw6IDxhIGhyZWYgPSBcIi9zaWduaW5cIj5cclxuICAgICAgICAgIFNpZ25JbiBcclxuICAgICAgPC9hPixcclxuICAgICAga2V5OiAnc2lnbmluJyxcclxuICAgICAgaWNvbjogPExvZ2luT3V0bGluZWQgLz4sXHJcbiAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgICAgXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnU2lnbk91dCcgLFxyXG4gICAgICBvbkNsaWNrOigpID0+IHNpZ25PdXQoKSxcclxuICAgICAgXHJcbiAgICAgIGtleTogJ3NpZ25vdXQnLFxyXG4gICAgICBpY29uOiA8TG9nb3V0T3V0bGluZWQgLz4sXHJcbiAgICBcclxuICB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnRGFzaGJvYXJkJyxcclxuICAgICAga2V5OiAnZGFzaGJvYXJkJyxcclxuICAgICAgc3R5bGUgOiB7bWFyZ2luTGVmdDpcImF1dG9cIn0sXHJcbiAgICAgIGljb246IDxTZXR0aW5nT3V0bGluZWQgLz4sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2dyb3VwJyxcclxuICAgICAgICAgIGxhYmVsOiAnTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAvLyAgICAgbGFiZWw6ICdNYW5hZ2VtZW50JyxcclxuICAgICAgICAgIC8vICAgICBrZXk6ICdzZXR0aW5nOjEnLFxyXG4gICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IDxhIGhyZWYgPSBcIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICBBZG1pblxyXG4gICAgICAgICAgICAgIDwvYT4sXHJcbiAgICAgICAgICAgICAga2V5OiAnc2V0dGluZzoyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICB0eXBlOiAnZ3JvdXAnLFxyXG4gICAgICAvLyAgICAgbGFiZWw6ICdJdGVtIDInLFxyXG4gICAgICAvLyAgICAgY2hpbGRyZW46IFtcclxuICAgICAgLy8gICAgICAge1xyXG4gICAgICAvLyAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDMnLFxyXG4gICAgICAvLyAgICAgICAgIGtleTogJ3NldHRpbmc6MycsXHJcbiAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgIC8vICAgICAgIHtcclxuICAgICAgLy8gICAgICAgICBsYWJlbDogJ09wdGlvbiA0JyxcclxuICAgICAgLy8gICAgICAgICBrZXk6ICdzZXR0aW5nOjQnLFxyXG4gICAgICAvLyAgICAgICB9LFxyXG4gICAgICAvLyAgICAgXSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IChcclxuICAgICAgICAgIDxUb2dnbGVUaGVtZS8+IFxyXG4gICAgICAgICAgXHJcbiAgICAgICksXHJcbiAgICAgIC8vIHN0eWxlOiB7bWFyZ2luTGVmdDogXCJhdXRvXCJ9LFxyXG4gICAgICBrZXk6ICdhbGlwYXknLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayAnLCBlKTtcclxuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIDxNZW51IG9uQ2xpY2s9e29uQ2xpY2t9IHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXtpdGVtc30gdGhlbWUgPVwiZGFya1wiLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbIkxvZ291dE91dGxpbmVkIiwiTG9naW5PdXRsaW5lZCIsIk1haWxPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlVzZXJBZGRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIk1lbnUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlRvZ2dsZVRoZW1lIiwiTGluayIsIkF1dGhDb250ZXh0IiwidXNlUm91dGVyIiwiVG9wTmF2IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJhdXRoIiwic2V0QXV0aCIsInJvdXRlciIsInNpZ25PdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidXNlciIsInRva2VuIiwicHVzaCIsIml0ZW1zIiwibGFiZWwiLCJhIiwiaHJlZiIsImtleSIsImljb24iLCJvbkNsaWNrIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiY2hpbGRyZW4iLCJ0eXBlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZEtleXMiLCJtb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});