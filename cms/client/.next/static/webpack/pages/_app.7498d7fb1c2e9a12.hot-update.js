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

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AuthProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        user: null,\n        token: \"\"\n    }), auth = ref[0], setAuth = ref[1];\n    if (true) {\n        (axios__WEBPACK_IMPORTED_MODULE_1___default()[\"default\"].baseURL) = process.env.NEXT_;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (localStorage.getItem(\"auth\")) {\n            setAuth(JSON.parse(localStorage.getItem(\"auth\")));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: [\n            auth,\n            setAuth\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnred\\\\Desktop\\\\NightKing-CMS\\\\cms\\\\client\\\\context\\\\auth.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_s(AuthProvider, \"/BQ7N4WGaVxrPL1klrD8oeGYhjU=\");\n_c = AuthProvider;\n\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2tDOztBQUU1RCxJQUFNSSxXQUFXLGlCQUFHRCxvREFBYSxFQUFFO0FBQ25DLElBQU1FLFlBQVksR0FBRSxnQkFBZTtRQUFiQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzFCLElBQXdCTCxHQUl0QixHQUpzQkEsK0NBQVEsQ0FBQztRQUM3Qk0sSUFBSSxFQUFFLElBQUk7UUFDVkMsS0FBSyxFQUFFLEVBQUU7S0FFWixDQUFDLEVBSktDLElBQUksR0FBYVIsR0FJdEIsR0FKUyxFQUFFUyxPQUFPLEdBQUlULEdBSXRCLEdBSmtCO0lBTXBCLElBQUdVLElBQWUsRUFBQztRQUNmWCxpRUFBcUIsR0FBR1csT0FBTyxDQUFDSSxHQUFHLENBQUNDLEtBQUs7S0FDNUM7SUFFRGQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1YsSUFBR2UsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDNUJSLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDcEQ7S0FFSixFQUFDLEVBQUUsQ0FBQztJQUNMLHFCQUNJLDhEQUFDZCxXQUFXLENBQUNpQixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDYixJQUFJO1lBQUNDLE9BQU87U0FBQztrQkFDdENKLFFBQVE7Ozs7O2FBRVUsQ0FDMUI7Q0FDSjtHQXZCS0QsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBeUJpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2F1dGguanM/ODE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBBdXRoUHJvdmlkZXIgPSh7Y2hpbGRyZW59KSA9PntcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyOiBudWxsICxcclxuICAgICAgICB0b2tlbjogJydcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHByb2Nlc3MuYnJvd3Nlcil7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdC5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpe1xyXG4gICAgICAgICAgICBzZXRBdXRoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSkgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbYXV0aCxzZXRBdXRoXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IHtBdXRoQ29udGV4dCwgQXV0aFByb3ZpZGVyfTsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInRva2VuIiwiYXV0aCIsInNldEF1dGgiLCJwcm9jZXNzIiwiYnJvd3NlciIsImRlZmF1bHQiLCJiYXNlVVJMIiwiZW52IiwiTkVYVF8iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/auth.js\n"));

/***/ })

});