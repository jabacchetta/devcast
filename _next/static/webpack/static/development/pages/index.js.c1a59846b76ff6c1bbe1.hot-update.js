webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/FullPage/index.js":
/*!*********************************************!*\
  !*** ./components/layout/FullPage/index.js ***!
  \*********************************************/
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Header */ "./components/layout/Header/index.js");
/* harmony import */ var _collections_CallToAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../collections/CallToAction */ "./components/collections/CallToAction/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles */ "./components/layout/FullPage/styles/index.js");







var _jsxFileName = "/Users/jason/Code/devcast/components/layout/FullPage/index.js";







var FullPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FullPage, _React$Component);

  function FullPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FullPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      height: '100vh'
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullPage, [{
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
      window.addEventListener('resize', function () {
        return _this2.setTrueViewportHeight();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["533473576", [this.state.height, this.state.height]]]) + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["533473576", [this.state.height, this.state.height]]]) + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_CallToAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_collections_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_12__["default"]), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "533473576",
        dynamic: [this.state.height, this.state.height],
        __self: this
      }, ".border.__jsx-style-dynamic-selector{height:".concat(this.state.height, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9Db2RlL2RldmNhc3QvY29tcG9uZW50cy9sYXlvdXQvRnVsbFBhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdpRCxvQ0FDdEMiLCJmaWxlIjoiL1VzZXJzL2phc29uL0NvZGUvZGV2Y2FzdC9jb21wb25lbnRzL2xheW91dC9GdWxsUGFnZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL1NvY2lhbCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL0NhbGxUb0FjdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY2xhc3MgRnVsbFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gIH07XG5cbiAgc2V0VHJ1ZVZpZXdwb3J0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHdpbmRvdy5zY3JlZW4uaGVpZ2h0LFxuICAgICAgd2luZG93LmlubmVySGVpZ2h0LFxuICAgICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRUcnVlVmlld3BvcnRIZWlnaHQoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5zZXRUcnVlVmlld3BvcnRIZWlnaHQoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgICAgICAgIDxTb2NpYWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5zdGF0ZS5oZWlnaHR9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHsvKiAuaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKCR7dGhpcy5zdGF0ZS5oZWlnaHR9IC0gMTZweCk7XG4gICAgICAgICAgfSAqL31cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsUGFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/jason/Code/devcast/components/layout/FullPage/index.js */")));
    }
  }]);

  return FullPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FullPage);

/***/ })

})
//# sourceMappingURL=index.js.c1a59846b76ff6c1bbe1.hot-update.js.map