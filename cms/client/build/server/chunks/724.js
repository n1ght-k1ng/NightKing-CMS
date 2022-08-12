"use strict";
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);




const { TextArea  } = antd__WEBPACK_IMPORTED_MODULE_3__.Input;
const CommentForm = ({ comment , setComment , handleSubmit , loading  })=>{
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .V);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                disabled: auth?.user === null && auth?.token === "",
                value: comment,
                onChange: (e)=>setComment(e.target.value),
                placeholder: "Write a comment...",
                rows: "4",
                maxLength: 200
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                onClick: handleSubmit,
                disabled: comment === "",
                loading: loading,
                style: {
                    marginTop: 4
                },
                type: "primary",
                children: "Post"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);


/***/ })

};
;