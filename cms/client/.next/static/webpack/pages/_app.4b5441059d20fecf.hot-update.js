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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        link: {\n            href: \"/\"\n        },\n        label: \"CMS\",\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MailOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 11,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        Link: {\n            href: \"/signup\"\n        },\n        label: \"SignUp\",\n        key: \"signup\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 18,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Signin\",\n        key: \"signin\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 24,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Dashboard\",\n        key: \"dashboard\",\n        style: {\n            marginLeft: \"auto\"\n        },\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SettingOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 32,\n            columnNumber: 11\n        }, undefined),\n        children: [\n            {\n                type: \"group\",\n                label: \"Item 1\",\n                children: [\n                    {\n                        label: \"Option 1\",\n                        key: \"setting:1\"\n                    },\n                    {\n                        label: \"Option 2\",\n                        key: \"setting:2\"\n                    }, \n                ]\n            },\n            {\n                type: \"group\",\n                label: \"Item 2\",\n                children: [\n                    {\n                        label: \"Option 3\",\n                        key: \"setting:3\"\n                    },\n                    {\n                        label: \"Option 4\",\n                        key: \"setting:4\"\n                    }, \n                ]\n            }, \n        ]\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, undefined),\n        // style: {marginLeft: \"auto\"},\n        key: \"alipay\"\n    }, \n];\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 82,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW9GO0FBQ3hEO0FBQ1k7QUFDQTtBQUNWOztBQUM5QixJQUFNUSxLQUFLLEdBQUc7SUFDWjtRQUNFQyxJQUFJLEVBQUU7WUFBQ0MsSUFBSSxFQUFFLEdBQUc7U0FBQztRQUNqQkMsS0FBSyxFQUFFLEtBQUs7UUFDWkMsR0FBRyxFQUFFLE1BQU07UUFDWEMsSUFBSSxnQkFBRSw4REFBQ1osMkRBQVk7Ozs7cUJBQUc7S0FFdkI7SUFDRDtRQUNFTSxJQUFJLEVBQUU7WUFBQ0csSUFBSSxFQUFFLFNBQVM7U0FBQztRQUN2QkMsS0FBSyxFQUFFLFFBQVE7UUFDZkMsR0FBRyxFQUFFLFFBQVE7UUFDYkMsSUFBSSxnQkFBRSw4REFBQ2IsK0RBQWdCOzs7O3FCQUFHO0tBRTNCO0lBQ0Q7UUFDRVcsS0FBSyxFQUFFLFFBQVE7UUFDZkMsR0FBRyxFQUFFLFFBQVE7UUFDYkMsSUFBSSxnQkFBRSw4REFBQ2IsK0RBQWdCOzs7O3FCQUFHO0tBRTNCO0lBRUQ7UUFDRVcsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCRSxLQUFLLEVBQUc7WUFBQ0MsVUFBVSxFQUFDLE1BQU07U0FBQztRQUMzQkYsSUFBSSxnQkFBRSw4REFBQ1gsOERBQWU7Ozs7cUJBQUc7UUFDekJjLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxJQUFJLEVBQUUsT0FBTztnQkFDYk4sS0FBSyxFQUFFLFFBQVE7Z0JBQ2ZLLFFBQVEsRUFBRTtvQkFDUjt3QkFDRUwsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCQyxHQUFHLEVBQUUsV0FBVztxQkFDakI7b0JBQ0Q7d0JBQ0VELEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRUssSUFBSSxFQUFFLE9BQU87Z0JBQ2JOLEtBQUssRUFBRSxRQUFRO2dCQUNmSyxRQUFRLEVBQUU7b0JBQ1I7d0JBQ0VMLEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO29CQUNEO3dCQUNFRCxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLEdBQUcsRUFBRSxXQUFXO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0VELEtBQUssZ0JBQ0QsOERBQUNMLG9EQUFXOzs7O3FCQUFFO1FBR2xCLCtCQUErQjtRQUMvQk0sR0FBRyxFQUFFLFFBQVE7S0FDZDtDQUNGO0FBRUQsSUFBTU0sTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQThCYixHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFBdkNjLE9BQU8sR0FBZ0JkLEdBQWdCLEdBQWhDLEVBQUVlLFVBQVUsR0FBSWYsR0FBZ0IsR0FBcEI7SUFFMUIsSUFBTWdCLE9BQU8sR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRUYsQ0FBQyxDQUFDLENBQUM7UUFDekJGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDVixHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUVELHFCQUFPLDhEQUFDVCxzQ0FBSTtRQUFDa0IsT0FBTyxFQUFFQSxPQUFPO1FBQUVJLFlBQVksRUFBRTtZQUFDTixPQUFPO1NBQUM7UUFBRU8sSUFBSSxFQUFDLFlBQVk7UUFBQ2xCLEtBQUssRUFBRUEsS0FBSzs7Ozs7YUFBSSxDQUFDO0NBQzVGO0dBVEtVLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQVdaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVUaGVtZSBmcm9tICcuL1RvZ2dsZVRoZW1lJztcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwibmV4dC9saW5rXCJcclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbGluazoge2hyZWY6IFwiL1wifSxcclxuICAgIGxhYmVsOiAnQ01TJyxcclxuICAgIGtleTogJ21haWwnLFxyXG4gICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICBMaW5rOiB7aHJlZjogXCIvc2lnbnVwXCJ9LFxyXG4gICAgbGFiZWw6ICdTaWduVXAnLFxyXG4gICAga2V5OiAnc2lnbnVwJyxcclxuICAgIGljb246IDxBcHBzdG9yZU91dGxpbmVkIC8+LFxyXG4gICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1NpZ25pbicsXHJcbiAgICBrZXk6ICdzaWduaW4nLFxyXG4gICAgaWNvbjogPEFwcHN0b3JlT3V0bGluZWQgLz4sXHJcbiAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGFzaGJvYXJkJyxcclxuICAgIGtleTogJ2Rhc2hib2FyZCcsXHJcbiAgICBzdHlsZSA6IHttYXJnaW5MZWZ0OlwiYXV0b1wifSxcclxuICAgIGljb246IDxTZXR0aW5nT3V0bGluZWQgLz4sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcclxuICAgICAgICBsYWJlbDogJ0l0ZW0gMScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gMScsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6MScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiAyJyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzoyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdncm91cCcsXHJcbiAgICAgICAgbGFiZWw6ICdJdGVtIDInLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDMnLFxyXG4gICAgICAgICAgICBrZXk6ICdzZXR0aW5nOjMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gNCcsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6NCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IChcclxuICAgICAgICA8VG9nZ2xlVGhlbWUvPiBcclxuICAgICAgICBcclxuICAgICksXHJcbiAgICAvLyBzdHlsZToge21hcmdpbkxlZnQ6IFwiYXV0b1wifSxcclxuICAgIGtleTogJ2FsaXBheScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnbWFpbCcpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayAnLCBlKTtcclxuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIDxNZW51IG9uQ2xpY2s9e29uQ2xpY2t9IHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXtpdGVtc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJNZW51IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZ2dsZVRoZW1lIiwiTGluayIsIml0ZW1zIiwibGluayIsImhyZWYiLCJsYWJlbCIsImtleSIsImljb24iLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJjaGlsZHJlbiIsInR5cGUiLCJUb3BOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkS2V5cyIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});