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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/\",\n            children: \"CMS\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, undefined),\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.MailOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 18,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/signup\",\n            children: \"SignUp\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, undefined),\n        key: \"signup\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserAddOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 27,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"SignOut\",\n        onClick: function() {\n            return signOut();\n        },\n        key: \"signin\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    },\n    {\n        // label: 'Signin',\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/signin\",\n            children: \"SignIn\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined),\n        key: \"signin\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 44,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Dashboard\",\n        key: \"dashboard\",\n        style: {\n            marginLeft: \"auto\"\n        },\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SettingOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 52,\n            columnNumber: 11\n        }, undefined),\n        children: [\n            {\n                type: \"group\",\n                label: \"Management\",\n                children: [\n                    //   {\n                    //     label: 'Management',\n                    //     key: 'setting:1',\n                    //   },\n                    {\n                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/admin\",\n                            children: \"Admin\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 63,\n                            columnNumber: 20\n                        }, undefined),\n                        key: \"setting:2\"\n                    }, \n                ]\n            }, \n        ]\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 88,\n            columnNumber: 9\n        }, undefined),\n        // style: {marginLeft: \"auto\"},\n        key: \"alipay\"\n    }, \n];\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext), auth = ref1[0], setAuth = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var signOut1 = function() {\n        //remove from local storage\n        localStorage.removeItem(\"auth\");\n        // remove from context\n        setAuth({\n            user: null,\n            token: \"\"\n        });\n        router.push(\"/signin\");\n    };\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items,\n        theme: \"dark\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 120,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"GKspt/RQtqa8FB54sG+laTrCItk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDLENBQUNuQixHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUVELHFCQUFPLDhEQUFDWixzQ0FBSTtRQUFDYyxPQUFPLEVBQUVBLE9BQU87UUFBRW9CLFlBQVksRUFBRTtZQUFDYixPQUFPO1NBQUM7UUFBRWMsSUFBSSxFQUFDLFlBQVk7UUFBQzNCLEtBQUssRUFBRUEsS0FBSztRQUFFNEIsS0FBSyxFQUFFLE1BQU07Ozs7O2FBQUUsQ0FBQztDQUN6RztHQXpCS2hCLE1BQU07O1FBSUtiLGtEQUFTOzs7QUFKcEJhLEtBQUFBLE1BQU07QUEyQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcHN0b3JlT3V0bGluZWQsIE1haWxPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkICwgVXNlckFkZE91dGxpbmVkICwgVXNlck91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZ2dsZVRoZW1lIGZyb20gJy4vVG9nZ2xlVGhlbWUnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIlxyXG5pbXBvcnQge3VzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBcclxuICAgIGxhYmVsOiA8YSBocmVmPVwiL1wiPlxyXG4gICAgQ01TXHJcbiAgPC9hPixcclxuICAgIGtleTogJ21haWwnLFxyXG4gICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICBcclxuICAgIGxhYmVsOiA8YSBocmVmID0gXCIvc2lnbnVwXCI+XHJcbiAgICAgICAgU2lnblVwIFxyXG4gICAgPC9hPixcclxuICAgIGtleTogJ3NpZ251cCcsXHJcbiAgICBpY29uOiA8VXNlckFkZE91dGxpbmVkIC8+LFxyXG4gICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIGxhYmVsOiAnU2lnbk91dCcgLFxyXG4gICAgICBvbkNsaWNrOigpID0+IHNpZ25PdXQoKSxcclxuICAgICAgXHJcbiAgICAgIGtleTogJ3NpZ25pbicsXHJcbiAgICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICBcclxuICB9LFxyXG4gIHtcclxuICAgIC8vIGxhYmVsOiAnU2lnbmluJyxcclxuICAgIGxhYmVsOiA8YSBocmVmID0gXCIvc2lnbmluXCI+XHJcbiAgICAgICAgU2lnbkluIFxyXG4gICAgPC9hPixcclxuICAgIGtleTogJ3NpZ25pbicsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXHJcbiAgICBrZXk6ICdkYXNoYm9hcmQnLFxyXG4gICAgc3R5bGUgOiB7bWFyZ2luTGVmdDpcImF1dG9cIn0sXHJcbiAgICBpY29uOiA8U2V0dGluZ091dGxpbmVkIC8+LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdncm91cCcsXHJcbiAgICAgICAgbGFiZWw6ICdNYW5hZ2VtZW50JyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIC8vICAge1xyXG4gICAgICAgIC8vICAgICBsYWJlbDogJ01hbmFnZW1lbnQnLFxyXG4gICAgICAgIC8vICAgICBrZXk6ICdzZXR0aW5nOjEnLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IDxhIGhyZWYgPSBcIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgQWRtaW5cclxuICAgICAgICAgICAgPC9hPixcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzoyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHR5cGU6ICdncm91cCcsXHJcbiAgICAvLyAgICAgbGFiZWw6ICdJdGVtIDInLFxyXG4gICAgLy8gICAgIGNoaWxkcmVuOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDMnLFxyXG4gICAgLy8gICAgICAgICBrZXk6ICdzZXR0aW5nOjMnLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbGFiZWw6ICdPcHRpb24gNCcsXHJcbiAgICAvLyAgICAgICAgIGtleTogJ3NldHRpbmc6NCcsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIF0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IChcclxuICAgICAgICA8VG9nZ2xlVGhlbWUvPiBcclxuICAgICAgICBcclxuICAgICksXHJcbiAgICAvLyBzdHlsZToge21hcmdpbkxlZnQ6IFwiYXV0b1wifSxcclxuICAgIGtleTogJ2FsaXBheScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnbWFpbCcpO1xyXG5cclxuICBjb25zdCBbYXV0aCAsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICAvL3JlbW92ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJylcclxuICAgIC8vIHJlbW92ZSBmcm9tIGNvbnRleHRcclxuICAgIHNldEF1dGgoe1xyXG4gICAgICB1c2VyOm51bGwsXHJcbiAgICAgIHRva2VuOiAnJ1xyXG4gICAgfSlcclxuICBcclxuICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICBcclxuICB9XHJcbiBcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgJywgZSk7XHJcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiA8TWVudSBvbkNsaWNrPXtvbkNsaWNrfSBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0gbW9kZT1cImhvcml6b250YWxcIiBpdGVtcz17aXRlbXN9IHRoZW1lID1cImRhcmtcIi8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdLCJuYW1lcyI6WyJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiVXNlckFkZE91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiVG9nZ2xlVGhlbWUiLCJMaW5rIiwiQXV0aENvbnRleHQiLCJ1c2VSb3V0ZXIiLCJpdGVtcyIsImxhYmVsIiwiYSIsImhyZWYiLCJrZXkiLCJpY29uIiwib25DbGljayIsInNpZ25PdXQiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJjaGlsZHJlbiIsInR5cGUiLCJUb3BOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImF1dGgiLCJzZXRBdXRoIiwicm91dGVyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJ0b2tlbiIsInB1c2giLCJlIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});