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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SinglePost\": function() { return /* binding */ SinglePost; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/theme */ \"./context/theme.js\");\nvar _this = undefined;\n\n// import axios from 'axios'\n// import { Row , Col , Card , Typography} from 'antd'\n// import dayjs from 'dayjs'\n// import Editor from '@tinymce/tinymce-react'\n// import Head from 'next/head'\n// import Link  from 'next/link'\n// import { categories } from '../../../server/controllers/category'\n//  const { Meta } = Card  \n//  const { Title} = Typography\n// export const SinglePost = ({ post}) => {\n//     return (\n//         <>\n//         <Head>\n//             <title> {post.title} </title>\n//             {/* <meta description={post.content.substring(0,160)}/>  */}\n//         </Head>\n//         <Row gutter = {12}>\n//             <Col xm={24} xl ={16}>\n//                 {/* <pre>{JSON.stringify(post,null,4)}</pre>  */}\n//                 <Card\n//                 cover = {\n//                     <img src={post?.featuredImage?.url || \"/images/default.jpg\"}/>\n//                 }\n//                 >\n//                     <Title>\n//                         {post.title}\n//                         </Title>\n//                         <p>{dayjs(post.createdAt).format(\"MMMM D , YYYY h:mm A\")} / 0 Comments / in\n//                          {post?.categories.map((c) => (<span key={c._id}>\n//                             <Link href = {`/category/${c.slug}`}>\n//                             <a >\n//                                 {c.name}\n//                             </a>\n//                             </Link>\n//                         </span>))}</p>\n//                 </Card>\n//             Post\n//             </Col>\n//             <Col xm={24} xl ={4}>\n//                 Sidebar\n//                 </Col> \n//         </Row>\n//         </>\n//     )\n// }\n// export async function getServerSideProps({params}){\n//     const { data } = await axios.get(`${process.env.API}/post/${params.slug}`)\n//     return {\n//         props:{\n//             post:data\n//         }\n//     }\n// }\n// export default SinglePost \n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Title = antd__WEBPACK_IMPORTED_MODULE_7__.Typography.Title;\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_7__.Card.Meta;\nvar __N_SSP = true;\nvar SinglePost = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_6__.ThemeContext), theme = ref1[0], setTheme = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                gutter: 12,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        xm: 24,\n                        xl: 16,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                            cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: (post === null || post === void 0 ? void 0 : (ref = post.featuredImage) === null || ref === void 0 ? void 0 : ref.url) || \"/images/default.jpeg\",\n                                alt: post.title\n                            }, void 0, false, void 0, void 0),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        dayjs__WEBPACK_IMPORTED_MODULE_4___default()(post.createdAt).format(\"MMMM D, YYYY h:mm A\"),\n                                        \" / 0 Comments / in\",\n                                        \" \",\n                                        post === null || post === void 0 ? void 0 : post.categories.map(function(c) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"/category/\".concat(c.slug),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        children: [\n                                                            c.name,\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 21\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 19\n                                                }, _this1)\n                                            }, c._id, false, {\n                                                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                                lineNumber: 111,\n                                                columnNumber: 17\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    initialValue: post.initialValuee,\n                                    dark: theme === \"light\" ? false : true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        xm: 24,\n                        xl: 8,\n                        children: \"Sidebar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQUMyQixJQUFJLEVBQUUsWUFBVyxDQUFTLE9BQVBGLENBQUMsQ0FBQ0csSUFBSSxDQUFFOzhEQUMvQiw0RUFBQ0MsR0FBQzs7NERBQUVKLENBQUMsQ0FBQ0ssSUFBSTs0REFBQyxHQUFDOzs7Ozs7OERBQUk7Ozs7OzBEQUNYOytDQUhFTCxDQUFDLENBQUNNLEdBQUc7Ozs7c0RBSVQ7eUNBQ1IsQ0FBQzs7Ozs7O3lDQUNBOzhDQUVKLDhEQUFDN0IsOERBQU07b0NBQ0w4QixZQUFZLEVBQUV6QixJQUFJLENBQUMwQixhQUFhO29DQUNoQ0MsSUFBSSxFQUFFMUIsS0FBSyxLQUFLLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSTs7Ozs7eUNBQ3RDOzs7Ozs7aUNBQ0c7Ozs7OzZCQUNIO2tDQUVOLDhEQUFDWixxQ0FBRzt3QkFBQ2dCLEVBQUUsRUFBRSxFQUFFO3dCQUFFQyxFQUFFLEVBQUUsQ0FBQztrQ0FBRSxTQUVwQjs7Ozs7NkJBQU07Ozs7OztxQkFDRjs7b0JBQ0wsQ0FDSDtDQUNILENBQUM7R0E3Q1dQLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXdEdkIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbi8vIGltcG9ydCB7IFJvdyAsIENvbCAsIENhcmQgLCBUeXBvZ3JhcGh5fSBmcm9tICdhbnRkJ1xyXG5cclxuLy8gaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG4vLyBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnXHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbi8vIGltcG9ydCBMaW5rICBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvY29udHJvbGxlcnMvY2F0ZWdvcnknXHJcbi8vICBjb25zdCB7IE1ldGEgfSA9IENhcmQgIFxyXG4vLyAgY29uc3QgeyBUaXRsZX0gPSBUeXBvZ3JhcGh5XHJcblxyXG4vLyBleHBvcnQgY29uc3QgU2luZ2xlUG9zdCA9ICh7IHBvc3R9KSA9PiB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgPEhlYWQ+XHJcbi8vICAgICAgICAgICAgIDx0aXRsZT4ge3Bvc3QudGl0bGV9IDwvdGl0bGU+XHJcbi8vICAgICAgICAgICAgIHsvKiA8bWV0YSBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50LnN1YnN0cmluZygwLDE2MCl9Lz4gICovfVxyXG4vLyAgICAgICAgIDwvSGVhZD5cclxuLy8gICAgICAgICA8Um93IGd1dHRlciA9IHsxMn0+XHJcblxyXG4vLyAgICAgICAgICAgICA8Q29sIHhtPXsyNH0geGwgPXsxNn0+XHJcbi8vICAgICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocG9zdCxudWxsLDQpfTwvcHJlPiAgKi99XHJcbi8vICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4vLyAgICAgICAgICAgICAgICAgY292ZXIgPSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3Q/LmZlYXR1cmVkSW1hZ2U/LnVybCB8fCBcIi9pbWFnZXMvZGVmYXVsdC5qcGdcIn0vPlxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXlqcyhwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KFwiTU1NTSBEICwgWVlZWSBoOm1tIEFcIil9IC8gMCBDb21tZW50cyAvIGluXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdD8uY2F0ZWdvcmllcy5tYXAoKGMpID0+ICg8c3BhbiBrZXk9e2MuX2lkfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7YC9jYXRlZ29yeS8ke2Muc2x1Z31gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Yy5uYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPikpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuLy8gICAgICAgICAgICAgUG9zdFxyXG4vLyAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgPENvbCB4bT17MjR9IHhsID17NH0+XHJcbi8vICAgICAgICAgICAgICAgICBTaWRlYmFyXHJcbi8vICAgICAgICAgICAgICAgICA8L0NvbD4gXHJcblxyXG5cclxuLy8gICAgICAgICA8L1Jvdz5cclxuLy8gICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSl7XHJcblxyXG4vLyAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9wb3N0LyR7cGFyYW1zLnNsdWd9YClcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOntcclxuLy8gICAgICAgICAgICAgcG9zdDpkYXRhXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdCBcclxuXHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAdGlueW1jZS90aW55bWNlLXJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3RoZW1lXCI7XHJcblxyXG5jb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpbmdsZVBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIHsvKiA8bWV0YSBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50LnN1YnN0cmluZygwLCAxNjApfSAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Um93IGd1dHRlcj17MTJ9PlxyXG4gICAgICAgIDxDb2wgeG09ezI0fSB4bD17MTZ9PlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cG9zdD8uZmVhdHVyZWRJbWFnZT8udXJsIHx8IFwiL2ltYWdlcy9kZWZhdWx0LmpwZWdcIn1cclxuICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7ZGF5anMocG9zdC5jcmVhdGVkQXQpLmZvcm1hdChcIk1NTU0gRCwgWVlZWSBoOm1tIEFcIil9IC8gMCBDb21tZW50c1xyXG4gICAgICAgICAgICAgIC8gaW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3Bvc3Q/LmNhdGVnb3JpZXMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2MuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2Muc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57Yy5uYW1lfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17cG9zdC5pbml0aWFsVmFsdWVlfVxyXG4gICAgICAgICAgICAgIGRhcms9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgeG09ezI0fSB4bD17OH0+XHJcbiAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSX0vcG9zdC8ke3BhcmFtcy5zbHVnfWApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0OiBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQb3N0OyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiUm93IiwiQ29sIiwiQ2FyZCIsIlR5cG9ncmFwaHkiLCJIZWFkIiwiTGluayIsImRheWpzIiwiRWRpdG9yIiwiVGhlbWVDb250ZXh0IiwiVGl0bGUiLCJNZXRhIiwiU2luZ2xlUG9zdCIsInBvc3QiLCJ0aGVtZSIsInNldFRoZW1lIiwidGl0bGUiLCJndXR0ZXIiLCJ4bSIsInhsIiwiY292ZXIiLCJpbWciLCJzcmMiLCJmZWF0dXJlZEltYWdlIiwidXJsIiwiYWx0IiwicCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwic3BhbiIsImhyZWYiLCJzbHVnIiwiYSIsIm5hbWUiLCJfaWQiLCJpbml0aWFsVmFsdWUiLCJpbml0aWFsVmFsdWVlIiwiZGFyayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});