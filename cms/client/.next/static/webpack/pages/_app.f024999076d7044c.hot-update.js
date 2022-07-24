/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/category.js":
/*!*****************************!*\
  !*** ./context/category.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n/* harmony import */ var _context_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/category */ \"./context/category.js\");\n/* harmony import */ var _context_category__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_context_category__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/post */ \"./context/post.js\");\n/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TopNav */ \"./components/TopNav.js\");\n/* harmony import */ var _public_styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/styles.css */ \"./public/styles/styles.css\");\n/* harmony import */ var _public_styles_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n\n\n// import \"antd/dist/antd.css\"\n\n\n\n\n\n\n\n// import \"antd/dist/antd.dark.css\"\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_post__WEBPACK_IMPORTED_MODULE_3__.PostProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_category__WEBPACK_IMPORTED_MODULE_2__.CategoryProvider, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQSw4QkFBOEI7QUFDZ0I7QUFDUztBQUNSO0FBQ047QUFDSjtBQUNFO0FBQ0s7QUFDNUMsbUNBQW1DO0FBRW5DLFNBQVNNLEtBQUssQ0FBQyxLQUF3QixFQUFDO1FBQXhCQyxTQUFTLEdBQVYsS0FBd0IsQ0FBdkJBLFNBQVMsRUFBR0MsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ2pDLHFCQUNBLDhEQUFDUix5REFBYTtrQkFDViw0RUFBQ0ssdURBQVk7c0JBQ1QsNEVBQUNILHVEQUFZOzBCQUNULDRFQUFDRCwrREFBZ0I7O3NDQUN6Qiw4REFBQ0csb0RBQU87Ozs7Z0NBQUU7c0NBQ1YsOERBQUNELDBEQUFNOzs7O2dDQUFFO3NDQUVULDhEQUFDSSxTQUFTLHFGQUFJQyxTQUFTOzs7O2dDQUFJOzs7Ozs7d0JBQ0Q7Ozs7O29CQUNQOzs7OztnQkFDSjs7Ozs7WUFFSCxDQUNkO0NBRUw7QUFqQlFGLEtBQUFBLEtBQUs7QUFrQmQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiXHJcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvdGhlbWVcIlxyXG5pbXBvcnQgeyBDYXRlZ29yeVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgUG9zdFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvcG9zdFwiO1xyXG5pbXBvcnQgVG9wTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL1RvcE5hdlwiXHJcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcbmltcG9ydCB7QXV0aFByb3ZpZGVyfSBmcm9tICcuLi9jb250ZXh0L2F1dGgnXHJcbi8vIGltcG9ydCBcImFudGQvZGlzdC9hbnRkLmRhcmsuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQgLCBwYWdlUHJvcHMgfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPFBvc3RQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeVByb3ZpZGVyPlxyXG4gICAgICAgIDxUb2FzdGVyLz5cclxuICAgICAgICA8VG9wTmF2Lz5cclxuXHJcbiAgICAgICAgPENvbXBvbmVudHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgIDwvQ2F0ZWdvcnlQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Qb3N0UHJvdmlkZXI+XHJcbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgXHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIkNhdGVnb3J5UHJvdmlkZXIiLCJQb3N0UHJvdmlkZXIiLCJUb3BOYXYiLCJUb2FzdGVyIiwiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});