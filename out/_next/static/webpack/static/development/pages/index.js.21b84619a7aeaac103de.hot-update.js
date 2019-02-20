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
      var _this2 = this;

      this.setTrueViewportHeight();
      window.addEventListener("resize", function () {
        return _this2.setTrueViewportHeight();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/brand/devcast-logo.png",
        alt: "DevCast logo",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]) + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]) + " " + "one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Premium"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " \u2022 "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]) + " " + "two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Free"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Learn to Code"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Subscribe to get exclusive offers on developer-focused, expert-taught tutorials, featuring languages, tools, algorithms, and frameworks."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "Enter your email address",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w",
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863455431", [this.state.height]]]) + " " + "three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Subscribe")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_10__["default"]), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2863455431",
        dynamic: [this.state.height],
        __self: this
      }, "main.__jsx-style-dynamic-selector{padding:24px;position:relative;overflow:auto;border:6px solid #4484fa;min-width:100vw;height:".concat(this.state.height, ";background:linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,0,0,0.6)), url(/static/backgrounds/teach-code.jpg) center / cover,var(--color-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9Eb2N1bWVudHMvQ29kZS9kZXZjYXN0L2NvbXBvbmVudHMvbGF5b3V0L01haW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RvQixBQUc0QixhQUNLLGtCQUNKLGNBQ1cseUJBQ1QsZ0JBQ29CLG9DQUUwQyxnSkFDaEYiLCJmaWxlIjoiL1VzZXJzL2phc29uL0RvY3VtZW50cy9Db2RlL2RldmNhc3QvY29tcG9uZW50cy9sYXlvdXQvTWFpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL1NvY2lhbCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgfTtcblxuICBzZXRUcnVlVmlld3BvcnRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5taW4oXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgd2luZG93LnNjcmVlbi5oZWlnaHQsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0VHJ1ZVZpZXdwb3J0SGVpZ2h0KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5zZXRUcnVlVmlld3BvcnRIZWlnaHQoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2JyYW5kL2RldmNhc3QtbG9nby5wbmdcIiBhbHQ9XCJEZXZDYXN0IGxvZ29cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIiA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwib25lXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNtWjNFdjlEanhHVWJRM1N3aWJoVC13XCI+XG4gICAgICAgICAgICBQcmVtaXVtXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxzcGFuPiDigKIgPC9zcGFuPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3b1wiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDbVozRXY5RGp4R1ViUTNTd2liaFQtd1wiPlxuICAgICAgICAgICAgRnJlZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMT5MZWFybiB0byBDb2RlPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFN1YnNjcmliZSB0byBnZXQgZXhjbHVzaXZlIG9mZmVycyBvbiBkZXZlbG9wZXItZm9jdXNlZCwgZXhwZXJ0LXRhdWdodCB0dXRvcmlhbHMsXG4gICAgICAgICAgICBmZWF0dXJpbmcgbGFuZ3VhZ2VzLCB0b29scywgYWxnb3JpdGhtcywgYW5kIGZyYW1ld29ya3MuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCIgLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aHJlZVwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDbVozRXY5RGp4R1ViUTNTd2liaFQtd1wiPlN1YnNjcmliZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTb2NpYWwga2V5PVwic29jaWFsXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAjNDQ4NGZhO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5zdGF0ZS5oZWlnaHR9O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC42KSksXG4gICAgICAgICAgICAgICAgdXJsKC9zdGF0aWMvYmFja2dyb3VuZHMvdGVhY2gtY29kZS5qcGcpIGNlbnRlciAvIGNvdmVyLCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl19 */\n/*@ sourceURL=/Users/jason/Documents/Code/devcast/components/layout/Main/index.js */")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.21b84619a7aeaac103de.hot-update.js.map