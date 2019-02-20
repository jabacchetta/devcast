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

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "setTrueViewportHeight",
    value: function setTrueViewportHeight() {
      var height = Math.min(document.documentElement.clientHeight, window.screen.height, window.innerHeight);
      this.setState({
        height: "".concat(g, "px")
      });
    }
  }, {
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
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/brand/devcast-logo.png",
        alt: "DevCast logo",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        type: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Learn to Code"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Subscribe to get exclusive offers on developer-focused, expert-taught tutorials, featuring languages, tools, algorithms, and frameworks."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "Enter your email address",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Premium Courses"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Free Videos")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        type: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_10__["default"]), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "12698844",
        dynamic: [this.state.height],
        __self: this
      }, "main.__jsx-style-dynamic-selector{position:relative;overflow:auto;border:6px solid #4484fa;min-width:100vw;height:".concat(this.state.height, ";padding:48px;background:linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,0,0,0.6)), url(/static/backgrounds/teach-code.jpg) center / cover,var(--color-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURvQixBQUdpQyxrQkFDSixjQUNXLHlCQUNULGdCQUNvQixvQ0FDdkIsYUFFaUUsZ0pBQ2hGIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9Tb2NpYWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gIH07XG5cbiAgc2V0VHJ1ZVZpZXdwb3J0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHdpbmRvdy5zY3JlZW4uaGVpZ2h0LFxuICAgICAgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiBgJHtnfXB4YCB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coTWF0aC5taW4od2luZG93LnNjcmVlbi5oZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCkpO1xuICAgIGNvbnN0IGcgPSBNYXRoLm1pbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuc2NyZWVuLmhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiBgJHtnfXB4YCB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlc291cmNlIGNvbnNjaW91cyByZXNpemUgY2FsbGJhY2shXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9icmFuZC9kZXZjYXN0LWxvZ28ucG5nXCIgYWx0PVwiRGV2Q2FzdCBsb2dvXCIgLz5cbiAgICAgICAgICA8U29jaWFsIGtleT1cInNvY2lhbFwiIHR5cGU9XCJoZWFkZXJcIiAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgxPkxlYXJuIHRvIENvZGU8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU3Vic2NyaWJlIHRvIGdldCBleGNsdXNpdmUgb2ZmZXJzIG9uIGRldmVsb3Blci1mb2N1c2VkLCBleHBlcnQtdGF1Z2h0IHR1dG9yaWFscyxcbiAgICAgICAgICAgIGZlYXR1cmluZyBsYW5ndWFnZXMsIHRvb2xzLCBhbGdvcml0aG1zLCBhbmQgZnJhbWV3b3Jrcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIiAvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRocmVlXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNtWjNFdjlEanhHVWJRM1N3aWJoVC13XCI+U3Vic2NyaWJlPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9uZVwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDbVozRXY5RGp4R1ViUTNTd2liaFQtd1wiPlxuICAgICAgICAgICAgUHJlbWl1bSBDb3Vyc2VzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3b1wiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDbVozRXY5RGp4R1ViUTNTd2liaFQtd1wiPlxuICAgICAgICAgICAgRnJlZSBWaWRlb3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U29jaWFsIGtleT1cInNvY2lhbFwiIHR5cGU9XCJmb290ZXJcIiAvPlxuICAgICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICM0NDg0ZmE7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLnN0YXRlLmhlaWdodH07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQ4cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSxcbiAgICAgICAgICAgICAgICB1cmwoL3N0YXRpYy9iYWNrZ3JvdW5kcy90ZWFjaC1jb2RlLmpwZykgY2VudGVyIC8gY292ZXIsIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=/Users/jason/Documents/Code/devcast/components/layout/Main/index.js */")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.a4f67a9bf5f69a0f4847.hot-update.js.map