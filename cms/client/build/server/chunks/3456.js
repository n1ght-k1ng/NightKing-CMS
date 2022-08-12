"use strict";
exports.id = 3456;
exports.ids = [3456];
exports.modules = {

/***/ 3456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_adminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5787);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4657);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_adminLayout__WEBPACK_IMPORTED_MODULE_3__]);
_layout_adminLayout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










// const {Content , Sider} = Layout;
function UploadFile({ redirectToLib =false , page ="admin"  }) {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_6__/* .MediaContext */ .Y);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const props = {
        name: "file",
        action: `${"http://localhost:8000/api/"}/upload-image-file`,
        headers: {
            Authorization: `Bearer ${auth.token}`
        },
        onChange (info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.success(`${info.file.name} file uploaded successfully`);
                setMedia({
                    images: [
                        ...media.images,
                        info.file.response
                    ],
                    selected: info.file.response,
                    showMediaModal: false
                });
                if (redirectToLib) {
                    router.push(`/${page}/media/library`);
                }
                console.log("info.file =>", info.file);
            } else if (info.file.status === "error") {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.error(`${info.file.name} file upload failed.`);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Upload, {
        ...props,
        maxCount: 1,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UploadOutlined, {}),
            children: "Click to Upload"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadFile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;