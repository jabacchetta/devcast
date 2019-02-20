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
        height: "".concat(height, "px")
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(Math.min(window.screen.height, window.innerHeight));
      this.setTrueViewportHeight();
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
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/brand/devcast-logo.png",
        alt: "DevCast logo",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        type: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Learn to Code"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Subscribe to get exclusive offers on developer-focused, expert-taught tutorials, featuring languages, tools, algorithms, and frameworks."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "Enter your email address",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Premium Courses"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["12698844", [this.state.height]]]) + " " + "two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Free Videos")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        type: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_10__["default"]), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "12698844",
        dynamic: [this.state.height],
        __self: this
      }, "main.__jsx-style-dynamic-selector{position:relative;overflow:auto;border:6px solid #4484fa;min-width:100vw;height:".concat(this.state.height, ";padding:48px;background:linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,0,0,0.6)), url(/static/backgrounds/teach-code.jpg) center / cover,var(--color-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUdpQyxrQkFDSixjQUNXLHlCQUNULGdCQUNvQixvQ0FDdkIsYUFFaUUsZ0pBQ2hGIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9Tb2NpYWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gIH07XG5cbiAgc2V0VHJ1ZVZpZXdwb3J0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHdpbmRvdy5zY3JlZW4uaGVpZ2h0LFxuICAgICAgd2luZG93LmlubmVySGVpZ2h0LFxuICAgICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhNYXRoLm1pbih3aW5kb3cuc2NyZWVuLmhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0KSk7XG4gICAgdGhpcy5zZXRUcnVlVmlld3BvcnRIZWlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3B0aW1pemVkUmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJSZXNvdXJjZSBjb25zY2lvdXMgcmVzaXplIGNhbGxiYWNrIVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvYnJhbmQvZGV2Y2FzdC1sb2dvLnBuZ1wiIGFsdD1cIkRldkNhc3QgbG9nb1wiIC8+XG4gICAgICAgICAgPFNvY2lhbCBrZXk9XCJzb2NpYWxcIiB0eXBlPVwiaGVhZGVyXCIgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMT5MZWFybiB0byBDb2RlPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFN1YnNjcmliZSB0byBnZXQgZXhjbHVzaXZlIG9mZmVycyBvbiBkZXZlbG9wZXItZm9jdXNlZCwgZXhwZXJ0LXRhdWdodCB0dXRvcmlhbHMsXG4gICAgICAgICAgICBmZWF0dXJpbmcgbGFuZ3VhZ2VzLCB0b29scywgYWxnb3JpdGhtcywgYW5kIGZyYW1ld29ya3MuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCIgLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aHJlZVwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDbVozRXY5RGp4R1ViUTNTd2liaFQtd1wiPlN1YnNjcmliZTwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvbmVcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ21aM0V2OURqeEdVYlEzU3dpYmhULXdcIj5cbiAgICAgICAgICAgIFByZW1pdW0gQ291cnNlc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d29cIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ21aM0V2OURqeEdVYlEzU3dpYmhULXdcIj5cbiAgICAgICAgICAgIEZyZWUgVmlkZW9zXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNvY2lhbCBrZXk9XCJzb2NpYWxcIiB0eXBlPVwiZm9vdGVyXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAjNDQ4NGZhO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5zdGF0ZS5oZWlnaHR9O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0OHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC42KSksXG4gICAgICAgICAgICAgICAgdXJsKC9zdGF0aWMvYmFja2dyb3VuZHMvdGVhY2gtY29kZS5qcGcpIGNlbnRlciAvIGNvdmVyLCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/Users/jason/Documents/Code/devcast/components/layout/Main/index.js */")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.1b505a0aa67c01c77c62.hot-update.js.map