webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\HrusikeshSwain\\OneDrive - SAFEGUARD WORLD INTERNATIONAL LLC\\Desktop\\React\\Nextjs\\06-onwards-to-a-bigger-project-starting-project\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";



var DUMMY_LIST = [{
  id: 'm1',
  title: 'Hello',
  image: 'https://picsum.photos/seed/picsum/200/300',
  address: 'Demo Address'
}]; //Next js always take the first render cycle doesnt wait for the next render cycle
//built in pre render cycle good for search engine optimization but may be show some blank pages beaciuse takes time for render on browser
//two forms of pre render cycle static generation and server side rendering
//Metadata for deployment description meta tags for show up in google search and page title show in search and tab in which opened

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
} // export async function ServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return {
//      props:{
//        meetups:DUMMY_LIST
//      }
//     };
// }
//called before first render cycle starts
//execcutes during build process
//never execute on their machine
//revalidate will generate after every 10 secs on server side


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTElTVCIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDdEQ7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQUM7QUFDakJDLElBQUUsRUFBQyxJQURjO0FBRWpCQyxPQUFLLEVBQUMsT0FGVztBQUdqQkMsT0FBSyxFQUFDLDJDQUhXO0FBSWpCQyxTQUFPLEVBQUM7QUFKUyxDQUFELENBQW5CLEMsQ0FPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUN0QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCxDLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztLQTFCU0YsUTs7QUE4Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1N2Y2NjZhOWFiNTJjNWNlYzYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRFVNTVlfTElTVCA9IFt7XHJcbiAgIGlkOidtMScsXHJcbiAgIHRpdGxlOidIZWxsbycsXHJcbiAgIGltYWdlOidodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMCcsXHJcbiAgIGFkZHJlc3M6J0RlbW8gQWRkcmVzcycsXHJcbn1dIFxyXG5cclxuLy9OZXh0IGpzIGFsd2F5cyB0YWtlIHRoZSBmaXJzdCByZW5kZXIgY3ljbGUgZG9lc250IHdhaXQgZm9yIHRoZSBuZXh0IHJlbmRlciBjeWNsZVxyXG4vL2J1aWx0IGluIHByZSByZW5kZXIgY3ljbGUgZ29vZCBmb3Igc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gYnV0IG1heSBiZSBzaG93IHNvbWUgYmxhbmsgcGFnZXMgYmVhY2l1c2UgdGFrZXMgdGltZSBmb3IgcmVuZGVyIG9uIGJyb3dzZXJcclxuLy90d28gZm9ybXMgb2YgcHJlIHJlbmRlciBjeWNsZSBzdGF0aWMgZ2VuZXJhdGlvbiBhbmQgc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbi8vTWV0YWRhdGEgZm9yIGRlcGxveW1lbnQgZGVzY3JpcHRpb24gbWV0YSB0YWdzIGZvciBzaG93IHVwIGluIGdvb2dsZSBzZWFyY2ggYW5kIHBhZ2UgdGl0bGUgc2hvdyBpbiBzZWFyY2ggYW5kIHRhYiBpbiB3aGljaCBvcGVuZWRcclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpe1xyXG4gIHJldHVybihcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICBwcm9wczp7XHJcbi8vICAgICAgICBtZWV0dXBzOkRVTU1ZX0xJU1RcclxuLy8gICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gfVxyXG5cclxuLy9jYWxsZWQgYmVmb3JlIGZpcnN0IHJlbmRlciBjeWNsZSBzdGFydHNcclxuLy9leGVjY3V0ZXMgZHVyaW5nIGJ1aWxkIHByb2Nlc3NcclxuLy9uZXZlciBleGVjdXRlIG9uIHRoZWlyIG1hY2hpbmVcclxuLy9yZXZhbGlkYXRlIHdpbGwgZ2VuZXJhdGUgYWZ0ZXIgZXZlcnkgMTAgc2VjcyBvbiBzZXJ2ZXIgc2lkZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vaHJ1c2lrZXNoOjg5TVo1TjN1TDRZWkppR2dAY2x1c3RlcjAueDBoZnYubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBjb2xsZWN0aW9ucyAgPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgYXdhaXQgbWVldHVwY29sbGVjdGlvbnMuZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgbWVldHVwczpyZXN1bHQubWFwKChtZWV0dXApPT4oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6bWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6bWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczptZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGlkOm1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOjFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==