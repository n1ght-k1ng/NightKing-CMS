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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        label: \"Navigation One\",\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 9,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Navigation Two\",\n        key: \"app\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, undefined),\n        disabled: true\n    },\n    {\n        label: \"Navigation Three - Submenu\",\n        key: \"SubMenu\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SettingOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined),\n        children: [\n            {\n                type: \"group\",\n                label: \"Item 1\",\n                children: [\n                    {\n                        label: \"Option 1\",\n                        key: \"setting:1\"\n                    },\n                    {\n                        label: \"Option 2\",\n                        key: \"setting:2\"\n                    }, \n                ]\n            },\n            {\n                type: \"group\",\n                label: \"Item 2\",\n                children: [\n                    {\n                        label: \"Option 3\",\n                        key: \"setting:3\"\n                    },\n                    {\n                        label: \"Option 4\",\n                        key: \"setting:4\"\n                    }, \n                ]\n            }, \n        ]\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://ant.design\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Navigation Four - Link\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined),\n        key: \"alipay\"\n    }, \n];\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 69,\n        columnNumber: 3\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 70,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFvRjtBQUN4RDtBQUNZO0FBQ0E7O0FBQ3hDLElBQU1PLEtBQUssR0FBRztJQUNaO1FBQ0VDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEdBQUcsRUFBRSxNQUFNO1FBQ1hDLElBQUksZ0JBQUUsOERBQUNULDJEQUFZOzs7O3FCQUFHO0tBQ3ZCO0lBQ0Q7UUFDRU8sS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsR0FBRyxFQUFFLEtBQUs7UUFDVkMsSUFBSSxnQkFBRSw4REFBQ1YsK0RBQWdCOzs7O3FCQUFHO1FBQzFCVyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0Q7UUFDRUgsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQ0MsR0FBRyxFQUFFLFNBQVM7UUFDZEMsSUFBSSxnQkFBRSw4REFBQ1IsOERBQWU7Ozs7cUJBQUc7UUFDekJVLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxJQUFJLEVBQUUsT0FBTztnQkFDYkwsS0FBSyxFQUFFLFFBQVE7Z0JBQ2ZJLFFBQVEsRUFBRTtvQkFDUjt3QkFDRUosS0FBSyxFQUFFLFVBQVU7d0JBQ2pCQyxHQUFHLEVBQUUsV0FBVztxQkFDakI7b0JBQ0Q7d0JBQ0VELEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRUksSUFBSSxFQUFFLE9BQU87Z0JBQ2JMLEtBQUssRUFBRSxRQUFRO2dCQUNmSSxRQUFRLEVBQUU7b0JBQ1I7d0JBQ0VKLEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO29CQUNEO3dCQUNFRCxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLEdBQUcsRUFBRSxXQUFXO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0VELEtBQUssZ0JBQ0gsOERBQUNNLEdBQUM7WUFBQ0MsSUFBSSxFQUFDLG9CQUFvQjtZQUFDQyxNQUFNLEVBQUMsUUFBUTtZQUFDQyxHQUFHLEVBQUMscUJBQXFCO3NCQUFDLHdCQUV2RTs7Ozs7cUJBQUk7UUFFTlIsR0FBRyxFQUFFLFFBQVE7S0FDZDtDQUNGO0FBRUQsSUFBTVMsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQThCYixHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFBdkNjLE9BQU8sR0FBZ0JkLEdBQWdCLEdBQWhDLEVBQUVlLFVBQVUsR0FBSWYsR0FBZ0IsR0FBcEI7SUFFMUIsSUFBTWdCLE9BQU8sR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRUYsQ0FBQyxDQUFDLENBQUM7UUFDekJGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDYixHQUFHLENBQUMsQ0FBQztLQUNuQjtrQkFDRCw4REFBQ0gsb0RBQVc7Ozs7YUFBRTtJQUNkLHFCQUFPLDhEQUFDSCxzQ0FBSTtRQUFDa0IsT0FBTyxFQUFFQSxPQUFPO1FBQUVJLFlBQVksRUFBRTtZQUFDTixPQUFPO1NBQUM7UUFBRU8sSUFBSSxFQUFDLFlBQVk7UUFBQ25CLEtBQUssRUFBRUEsS0FBSzs7Ozs7YUFBSSxDQUFDO0NBQzVGO0dBVEtXLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQVdaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVUaGVtZSBmcm9tICcuL1RvZ2dsZVRoZW1lJztcclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdOYXZpZ2F0aW9uIE9uZScsXHJcbiAgICBrZXk6ICdtYWlsJyxcclxuICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ05hdmlnYXRpb24gVHdvJyxcclxuICAgIGtleTogJ2FwcCcsXHJcbiAgICBpY29uOiA8QXBwc3RvcmVPdXRsaW5lZCAvPixcclxuICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdOYXZpZ2F0aW9uIFRocmVlIC0gU3VibWVudScsXHJcbiAgICBrZXk6ICdTdWJNZW51JyxcclxuICAgIGljb246IDxTZXR0aW5nT3V0bGluZWQgLz4sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcclxuICAgICAgICBsYWJlbDogJ0l0ZW0gMScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gMScsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6MScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiAyJyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzoyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdncm91cCcsXHJcbiAgICAgICAgbGFiZWw6ICdJdGVtIDInLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDMnLFxyXG4gICAgICAgICAgICBrZXk6ICdzZXR0aW5nOjMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gNCcsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6NCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IChcclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW50LmRlc2lnblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICBOYXZpZ2F0aW9uIEZvdXIgLSBMaW5rXHJcbiAgICAgIDwvYT5cclxuICAgICksXHJcbiAgICBrZXk6ICdhbGlwYXknLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJ21haWwnKTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgJywgZSk7XHJcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcclxuICB9O1xyXG4gIDxUb2dnbGVUaGVtZS8+XHJcbiAgcmV0dXJuIDxNZW51IG9uQ2xpY2s9e29uQ2xpY2t9IHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXtpdGVtc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJNZW51IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZ2dsZVRoZW1lIiwiaXRlbXMiLCJsYWJlbCIsImtleSIsImljb24iLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwidHlwZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiVG9wTmF2IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZEtleXMiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});