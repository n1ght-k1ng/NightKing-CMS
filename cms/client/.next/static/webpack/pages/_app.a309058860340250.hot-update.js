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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        label: \"Navigation One\",\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 9,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Navigation Two\",\n        key: \"app\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, undefined),\n        disabled: true\n    },\n    {\n        label: \"Navigation Three - Submenu\",\n        key: \"SubMenu\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SettingOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined),\n        children: [\n            {\n                type: \"group\",\n                label: \"Item 1\",\n                children: [\n                    {\n                        label: \"Option 1\",\n                        key: \"setting:1\"\n                    },\n                    {\n                        label: \"Option 2\",\n                        key: \"setting:2\"\n                    }, \n                ]\n            },\n            {\n                type: \"group\",\n                label: \"Item 2\",\n                children: [\n                    {\n                        label: \"Option 3\",\n                        key: \"setting:3\"\n                    },\n                    {\n                        label: \"Option 4\",\n                        key: \"setting:4\"\n                    }, \n                ]\n            }, \n        ]\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                marginLeft: auto\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 54,\n                columnNumber: 42\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, undefined),\n        key: \"alipay\"\n    }, \n];\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 69,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFvRjtBQUN4RDtBQUNZO0FBQ0E7O0FBQ3hDLElBQU1PLEtBQUssR0FBRztJQUNaO1FBQ0VDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEdBQUcsRUFBRSxNQUFNO1FBQ1hDLElBQUksZ0JBQUUsOERBQUNULDJEQUFZOzs7O3FCQUFHO0tBQ3ZCO0lBQ0Q7UUFDRU8sS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsR0FBRyxFQUFFLEtBQUs7UUFDVkMsSUFBSSxnQkFBRSw4REFBQ1YsK0RBQWdCOzs7O3FCQUFHO1FBQzFCVyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0Q7UUFDRUgsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQ0MsR0FBRyxFQUFFLFNBQVM7UUFDZEMsSUFBSSxnQkFBRSw4REFBQ1IsOERBQWU7Ozs7cUJBQUc7UUFDekJVLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxJQUFJLEVBQUUsT0FBTztnQkFDYkwsS0FBSyxFQUFFLFFBQVE7Z0JBQ2ZJLFFBQVEsRUFBRTtvQkFDUjt3QkFDRUosS0FBSyxFQUFFLFVBQVU7d0JBQ2pCQyxHQUFHLEVBQUUsV0FBVztxQkFDakI7b0JBQ0Q7d0JBQ0VELEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRUksSUFBSSxFQUFFLE9BQU87Z0JBQ2JMLEtBQUssRUFBRSxRQUFRO2dCQUNmSSxRQUFRLEVBQUU7b0JBQ1I7d0JBQ0VKLEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO29CQUNEO3dCQUNFRCxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLEdBQUcsRUFBRSxXQUFXO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0VELEtBQUssZ0JBQ0QsOERBQUNNLE1BQUk7WUFBQ0MsS0FBSyxFQUFFO2dCQUFDQyxVQUFVLEVBQUVDLElBQUk7YUFBQztzQkFBRSw0RUFBQ1gsb0RBQVc7Ozs7eUJBQUU7Ozs7O3FCQUFPO1FBRzFERyxHQUFHLEVBQUUsUUFBUTtLQUNkO0NBQ0Y7QUFFRCxJQUFNUyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBOEJiLEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxFQUF2Q2MsT0FBTyxHQUFnQmQsR0FBZ0IsR0FBaEMsRUFBRWUsVUFBVSxHQUFJZixHQUFnQixHQUFwQjtJQUUxQixJQUFNZ0IsT0FBTyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRixDQUFDLENBQUMsQ0FBQztRQUN6QkYsVUFBVSxDQUFDRSxDQUFDLENBQUNiLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0lBRUQscUJBQU8sOERBQUNOLHNDQUFJO1FBQUNrQixPQUFPLEVBQUVBLE9BQU87UUFBRUksWUFBWSxFQUFFO1lBQUNOLE9BQU87U0FBQztRQUFFTyxJQUFJLEVBQUMsWUFBWTtRQUFDbkIsS0FBSyxFQUFFQSxLQUFLOzs7OzthQUFJLENBQUM7Q0FDNUY7R0FUS1csTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBV1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcHN0b3JlT3V0bGluZWQsIE1haWxPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZ2dsZVRoZW1lIGZyb20gJy4vVG9nZ2xlVGhlbWUnO1xyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ05hdmlnYXRpb24gT25lJyxcclxuICAgIGtleTogJ21haWwnLFxyXG4gICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTmF2aWdhdGlvbiBUd28nLFxyXG4gICAga2V5OiAnYXBwJyxcclxuICAgIGljb246IDxBcHBzdG9yZU91dGxpbmVkIC8+LFxyXG4gICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ05hdmlnYXRpb24gVGhyZWUgLSBTdWJtZW51JyxcclxuICAgIGtleTogJ1N1Yk1lbnUnLFxyXG4gICAgaWNvbjogPFNldHRpbmdPdXRsaW5lZCAvPixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxyXG4gICAgICAgIGxhYmVsOiAnSXRlbSAxJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiAxJyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzoxJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDInLFxyXG4gICAgICAgICAgICBrZXk6ICdzZXR0aW5nOjInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcclxuICAgICAgICBsYWJlbDogJ0l0ZW0gMicsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gMycsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6MycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiA0JyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzo0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogKFxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDogYXV0b319PjxUb2dnbGVUaGVtZS8+PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgKSxcclxuICAgIGtleTogJ2FsaXBheScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnbWFpbCcpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayAnLCBlKTtcclxuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIDxNZW51IG9uQ2xpY2s9e29uQ2xpY2t9IHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXtpdGVtc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJNZW51IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZ2dsZVRoZW1lIiwiaXRlbXMiLCJsYWJlbCIsImtleSIsImljb24iLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwidHlwZSIsInNwYW4iLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJhdXRvIiwiVG9wTmF2IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZEtleXMiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});