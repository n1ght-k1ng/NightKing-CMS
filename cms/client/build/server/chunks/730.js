"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const AuthProvider = ({ children  })=>{
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        user: null,
        token: ""
    });
    if (process.server) {
        (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = process.env.API;
        (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common.Authorization) = `Bearer ${auth.token}`;
    } else {
        (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = "http://localhost:8000/api/";
        (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common.Authorization) = `Bearer ${auth.token}`;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (localStorage.getItem("auth")) {
            setAuth(JSON.parse(localStorage.getItem("auth")));
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: [
            auth,
            setAuth
        ],
        children: children
    });
};



/***/ })

};
;