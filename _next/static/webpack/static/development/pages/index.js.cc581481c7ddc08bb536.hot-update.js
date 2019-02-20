webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/Main/index.js":
/*!*****************************************!*\
  !*** ./components/layout/Main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _collections_Social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../collections/Social */ "./components/collections/Social/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/layout/Main/styles/index.js");







var _jsxFileName = "/Users/jason/Documents/Code/devcast/components/layout/Main/index.js";





var Main =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, _React$Component);

  function Main() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      height: '100vh'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setTrueView", void 0);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(Math.min(window.screen.height, window.innerHeight));
      var g = Math.min(document.documentElement.clientHeight, window.screen.height, window.innerHeight);
      this.setState({
        height: "".concat(g, "px")
      });
      window.addEventListener("optimizedResize", function () {
        console.log("Resource conscious resize callback!");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/brand/devcast-logo.png",
        alt: "DevCast logo",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        type: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Learn to Code"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Subscribe to get exclusive offers on developer-focused, expert-taught tutorials, featuring languages, tools, algorithms, and frameworks."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "Enter your email address",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Premium Courses"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Free Videos")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        type: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_10__["default"]), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "12698844",
        dynamic: [this.state.height],
        __self: this
      }, "main.__jsx-style-dynamic-selector{position:relative;overflow:auto;border:6px solid #4484fa;min-width:100vw;height:".concat(this.state.height, ";padding:48px;background:linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,0,0,0.6)), url(/static/backgrounds/teach-code.jpg) center / cover,var(--color-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNvQixBQUdpQyxrQkFDSixjQUNXLHlCQUNULGdCQUNvQixvQ0FDdkIsYUFFaUUsZ0pBQ2hGIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9Tb2NpYWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gIH07XG5cbiAgc2V0VHJ1ZVZpZXdcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhNYXRoLm1pbih3aW5kb3cuc2NyZWVuLmhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0KSk7XG4gICAgY29uc3QgZyA9IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5zY3JlZW4uaGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBoZWlnaHQ6IGAke2d9cHhgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9wdGltaXplZFJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzb3VyY2UgY29uc2Npb3VzIHJlc2l6ZSBjYWxsYmFjayFcIik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2JyYW5kL2RldmNhc3QtbG9nby5wbmdcIiBhbHQ9XCJEZXZDYXN0IGxvZ29cIiAvPlxuICAgICAgICAgIDxTb2NpYWwga2V5PVwic29jaWFsXCIgdHlwZT1cImhlYWRlclwiIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+TGVhcm4gdG8gQ29kZTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTdWJzY3JpYmUgdG8gZ2V0IGV4Y2x1c2l2ZSBvZmZlcnMgb24gZGV2ZWxvcGVyLWZvY3VzZWQsIGV4cGVydC10YXVnaHQgdHV0b3JpYWxzLFxuICAgICAgICAgICAgZmVhdHVyaW5nIGxhbmd1YWdlcywgdG9vbHMsIGFsZ29yaXRobXMsIGFuZCBmcmFtZXdvcmtzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiIC8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGhyZWVcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ21aM0V2OURqeEdVYlEzU3dpYmhULXdcIj5TdWJzY3JpYmU8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwib25lXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNtWjNFdjlEanhHVWJRM1N3aWJoVC13XCI+XG4gICAgICAgICAgICBQcmVtaXVtIENvdXJzZXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHdvXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNtWjNFdjlEanhHVWJRM1N3aWJoVC13XCI+XG4gICAgICAgICAgICBGcmVlIFZpZGVvc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTb2NpYWwga2V5PVwic29jaWFsXCIgdHlwZT1cImZvb3RlclwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgIzQ0ODRmYTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAke3RoaXMuc3RhdGUuaGVpZ2h0fTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDhweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNikpLFxuICAgICAgICAgICAgICAgIHVybCgvc3RhdGljL2JhY2tncm91bmRzL3RlYWNoLWNvZGUuanBnKSBjZW50ZXIgLyBjb3ZlciwgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=/Users/jason/Documents/Code/devcast/components/layout/Main/index.js */")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.cc581481c7ddc08bb536.hot-update.js.map