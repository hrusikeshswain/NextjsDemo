webpackHotUpdate_N_E("pages/index",{

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTElTVCIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQUM7QUFDakJDLElBQUUsRUFBQyxJQURjO0FBRWpCQyxPQUFLLEVBQUMsT0FGVztBQUdqQkMsT0FBSyxFQUFDLDJDQUhXO0FBSWpCQyxTQUFPLEVBQUM7QUFKUyxDQUFELENBQW5CLEMsQ0FPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUN0QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0tBM0JTRixROztBQStDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZjOGY2MjIzYTlhMTBlMmVkODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEVU1NWV9MSVNUID0gW3tcclxuICAgaWQ6J20xJyxcclxuICAgdGl0bGU6J0hlbGxvJyxcclxuICAgaW1hZ2U6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwJyxcclxuICAgYWRkcmVzczonRGVtbyBBZGRyZXNzJyxcclxufV0gXHJcblxyXG4vL05leHQganMgYWx3YXlzIHRha2UgdGhlIGZpcnN0IHJlbmRlciBjeWNsZSBkb2VzbnQgd2FpdCBmb3IgdGhlIG5leHQgcmVuZGVyIGN5Y2xlXHJcbi8vYnVpbHQgaW4gcHJlIHJlbmRlciBjeWNsZSBnb29kIGZvciBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiBidXQgbWF5IGJlIHNob3cgc29tZSBibGFuayBwYWdlcyBiZWFjaXVzZSB0YWtlcyB0aW1lIGZvciByZW5kZXIgb24gYnJvd3NlclxyXG4vL3R3byBmb3JtcyBvZiBwcmUgcmVuZGVyIGN5Y2xlIHN0YXRpYyBnZW5lcmF0aW9uIGFuZCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuLy9NZXRhZGF0YSBmb3IgZGVwbG95bWVudCBkZXNjcmlwdGlvbiBtZXRhIHRhZ3MgZm9yIHNob3cgdXAgaW4gZ29vZ2xlIHNlYXJjaCBhbmQgcGFnZSB0aXRsZSBzaG93IGluIHNlYXJjaCBhbmQgdGFiIGluIHdoaWNoIG9wZW5lZFxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcyl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0Jyb3dzZSBhIGh1Z2UgbGlzdCBvZiBoaWdobHkgYWN0aXZlIFJlYWN0IE1lZXR1cHMnLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfS8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcbi8vICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgcHJvcHM6e1xyXG4vLyAgICAgICAgbWVldHVwczpEVU1NWV9MSVNUXHJcbi8vICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vIH1cclxuXHJcbi8vY2FsbGVkIGJlZm9yZSBmaXJzdCByZW5kZXIgY3ljbGUgc3RhcnRzXHJcbi8vZXhlY2N1dGVzIGR1cmluZyBidWlsZCBwcm9jZXNzXHJcbi8vbmV2ZXIgZXhlY3V0ZSBvbiB0aGVpciBtYWNoaW5lXHJcbi8vcmV2YWxpZGF0ZSB3aWxsIGdlbmVyYXRlIGFmdGVyIGV2ZXJ5IDEwIHNlY3Mgb24gc2VydmVyIHNpZGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2hydXNpa2VzaDo4OU1aNU4zdUw0WVpKaUdnQGNsdXN0ZXIwLngwaGZ2Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwY29sbGVjdGlvbnMgID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIGF3YWl0IG1lZXR1cGNvbGxlY3Rpb25zLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6cmVzdWx0Lm1hcCgobWVldHVwKT0+KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOm1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOm1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6bWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBpZDptZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZToxXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=