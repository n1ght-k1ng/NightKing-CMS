"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SinglePost\": function() { return /* binding */ SinglePost; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_5__.Card.Meta;\nvar Title = antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Title;\nvar __N_SSP = true;\nvar SinglePost = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        post.title,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                gutter: 12,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xm: 24,\n                        xl: 16,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                                cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (post === null || post === void 0 ? void 0 : (ref = post.featuredImage) === null || ref === void 0 ? void 0 : ref.url) || \"/images/default.jpg\"\n                                }, void 0, false, void 0, void 0),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                        lineNumber: 29,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            dayjs__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format(\"MMMM D , YYYY h:mm A\"),\n                                            \" / 0 Comments / in\",\n                                            \" \",\n                                            post === null || post === void 0 ? void 0 : post.categories.map(function(c) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                        href: \"category/${c.slug}\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                                            lineNumber: 35,\n                                                            columnNumber: 29\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                                        lineNumber: 34,\n                                                        columnNumber: 29\n                                                    }, _this1)\n                                                }, c._id, false, {\n                                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 54\n                                                }, _this1);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                        lineNumber: 32,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, _this),\n                            \"Post\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xm: 24,\n                        xl: 4,\n                        children: \"Sidebar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDbUQ7QUFFMUI7QUFDa0I7QUFDZjtBQUVDO0FBQzVCLElBQU0sSUFBTSxHQUFLRSwyQ0FBTDtBQUNaLElBQU0sS0FBTyxHQUFJQyxrREFBSjs7QUFFUCxJQUFNTyxVQUFVLEdBQUcsZ0JBQWE7UUFBVkMsSUFBSSxTQUFKQSxJQUFJOztRQWFIQSxHQUFtQjtJQVo3QyxxQkFDSTs7MEJBQ0EsOERBQUNMLGtEQUFJOzBCQUNELDRFQUFDTSxPQUFLOzt3QkFBQyxHQUFDO3dCQUFDRCxJQUFJLENBQUNDLEtBQUs7d0JBQUMsR0FBQzs7Ozs7O3lCQUFROzs7OztxQkFFMUI7MEJBQ1AsOERBQUNaLHFDQUFHO2dCQUFDYSxNQUFNLEVBQUksRUFBRTs7a0NBRWIsOERBQUNaLHFDQUFHO3dCQUFDYSxFQUFFLEVBQUUsRUFBRTt3QkFBRUMsRUFBRSxFQUFHLEVBQUU7OzBDQUVoQiw4REFBQ2Isc0NBQUk7Z0NBQ0xjLEtBQUssZ0JBQ0QsOERBQUNDLEtBQUc7b0NBQUNDLEdBQUcsRUFBRVAsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQWUsR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxDQUFBQSxHQUFtQixHQUFuQkEsSUFBSSxDQUFFUSxhQUFhLGNBQW5CUixHQUFtQixjQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLEdBQW1CLENBQUVTLEdBQUcsQ0FBTCxJQUFTLHFCQUFxQjtpRUFBRzs7a0RBRzlELDhEQUFDWCxLQUFLO2tEQUNERSxJQUFJLENBQUNDLEtBQUs7Ozs7OzZDQUNIO2tEQUNSLDhEQUFDUyxHQUFDOzs0Q0FBRWpCLDRDQUFLLENBQUNPLElBQUksQ0FBQ1csU0FBUyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzs0Q0FBQyxvQkFBa0I7NENBQUMsR0FBRzs0Q0FDN0VaLElBQUksYUFBSkEsSUFBSSxXQUFZLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFYSxVQUFVLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQztxRUFBSyw4REFBQ0MsTUFBSTs4REFDOUIsNEVBQUNwQixrREFBSTt3REFBQ3FCLElBQUksRUFBSSxvQkFBb0I7a0VBQ2xDLDRFQUFDQyxHQUFDOzs7O2tFQUVFOzs7Ozs4REFDRzttREFMNkJILENBQUMsQ0FBQ0ksR0FBRzs7OzswREFPdEM7NkNBQUMsQ0FBQzs7Ozs7OzZDQUFLOzs7Ozs7cUNBRWY7NEJBQUEsTUFFWDs7Ozs7OzZCQUFNO2tDQUNOLDhEQUFDN0IscUNBQUc7d0JBQUNhLEVBQUUsRUFBRSxFQUFFO3dCQUFFQyxFQUFFLEVBQUcsQ0FBQztrQ0FBRSxTQUVqQjs7Ozs7NkJBQU07Ozs7OztxQkFHUjs7b0JBQ0gsQ0FJTjtDQUNKO0FBM0NZTCxLQUFBQSxVQUFVO0FBeUR2QiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IFJvdyAsIENvbCAsIENhcmQgLCBUeXBvZ3JhcGh5fSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBMaW5rICBmcm9tICduZXh0L2xpbmsnXHJcbiBjb25zdCB7IE1ldGEgfSA9IENhcmQgIFxyXG4gY29uc3QgeyBUaXRsZX0gPSBUeXBvZ3JhcGh5XHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlUG9zdCA9ICh7IHBvc3R9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT4ge3Bvc3QudGl0bGV9IDwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50LnN1YnN0cmluZygwLDE2MCl9Lz4gICovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Um93IGd1dHRlciA9IHsxMn0+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhtPXsyNH0geGwgPXsxNn0+XHJcbiAgICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocG9zdCxudWxsLDQpfTwvcHJlPiAgKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY292ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3Q/LmZlYXR1cmVkSW1hZ2U/LnVybCB8fCBcIi9pbWFnZXMvZGVmYXVsdC5qcGdcIn0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXlqcyhwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KFwiTU1NTSBEICwgWVlZWSBoOm1tIEFcIil9IC8gMCBDb21tZW50cyAvIGlue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Q/LmNhdGVnb3JpZXMubWFwKGMgPT4gKDxzcGFuIGtleT17Yy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IHtcImNhdGVnb3J5LyR7Yy5zbHVnfVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICBQb3N0XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhtPXsyNH0geGwgPXs0fT5cclxuICAgICAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgICAgICAgIDwvQ29sPiBcclxuXHJcblxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KXtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUEl9L3Bvc3QvJHtwYXJhbXMuc2x1Z31gKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBwb3N0OmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQb3N0IFxyXG4iXSwibmFtZXMiOlsiUm93IiwiQ29sIiwiQ2FyZCIsIlR5cG9ncmFwaHkiLCJkYXlqcyIsIkVkaXRvciIsIkhlYWQiLCJMaW5rIiwiTWV0YSIsIlRpdGxlIiwiU2luZ2xlUG9zdCIsInBvc3QiLCJ0aXRsZSIsImd1dHRlciIsInhtIiwieGwiLCJjb3ZlciIsImltZyIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJ1cmwiLCJwIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiY2F0ZWdvcmllcyIsIm1hcCIsImMiLCJzcGFuIiwiaHJlZiIsImEiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});