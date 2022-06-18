webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./node_modules/next/Head.js":
false,

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\HrusikeshSwain\\OneDrive - SAFEGUARD WORLD INTERNATIONAL LLC\\Desktop\\React\\Nextjs\\06-onwards-to-a-bigger-project-starting-project\\06-onwards-to-a-bigger-project-starting-project\\pages\\new-meetup\\index.js";
//domain.com/new-meetup





function NewMeetUpPage() {
  var router = new next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]();

  function onAddMeetup(_x) {
    return _onAddMeetup.apply(this, arguments);
  }

  function _onAddMeetup() {
    _onAddMeetup = Object(C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputData) {
      var response, data;
      return C_Users_HrusikeshSwain_OneDrive_SAFEGUARD_WORLD_INTERNATIONAL_LLC_Desktop_React_Nextjs_06_onwards_to_a_bigger_project_starting_project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("onAddMeetup", inputData);
              _context.next = 3;
              return fetch('http://localhost:3000/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(inputData),
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              console.log("onAddMeetup", data);
              router.push('/');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onAddMeetup.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "Add Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: "Add your new meetups and create amazing network opportunities."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddMeetup: onAddMeetup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, this);
}

_c = NewMeetUpPage;
;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetUpPage);

var _c;

$RefreshReg$(_c, "NewMeetUpPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0VXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25BZGRNZWV0dXAiLCJpbnB1dERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXdCO0FBRXBCLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxxREFBSixFQUFmOztBQUZvQixXQUlQQyxXQUpPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBrQkFJdEIsaUJBQTJCQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLFNBQTNCO0FBREY7QUFBQSxxQkFFeUJHLEtBQUssQ0FBQyxzQ0FBRCxFQUF3QztBQUNqRUMsc0JBQU0sRUFBRSxNQUR5RDtBQUVqRUMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLFNBQWYsQ0FGMkQ7QUFHakVRLHVCQUFPLEVBQUM7QUFDUCxrQ0FBZ0Isa0JBRFQ7QUFFUCw0QkFBVTtBQUZIO0FBSHlELGVBQXhDLENBRjlCOztBQUFBO0FBRVFDLHNCQUZSO0FBQUE7QUFBQSxxQkFXcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVhyQjs7QUFBQTtBQVdRQyxrQkFYUjtBQWFFVixxQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlMsSUFBM0I7QUFDQWQsb0JBQU0sQ0FBQ2UsSUFBUCxDQUFZLEdBQVo7O0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKc0I7QUFBQTtBQUFBOztBQXNCdEIsc0JBQ0EscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyx5RUFBRDtBQUFlLGlCQUFXLEVBQUViO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQVFEOztLQTlCUUgsYTtBQThCUjtBQUVjQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjJlYTRhYzgwYjcwNjZkM2ZiYzc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RvbWFpbi5jb20vbmV3LW1lZXR1cFxyXG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmZ1bmN0aW9uIE5ld01lZXRVcFBhZ2UoKXtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSBuZXcgdXNlUm91dGVyKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQWRkTWVldHVwKGlucHV0RGF0YSl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uQWRkTWVldHVwXCIsIGlucHV0RGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25ldy1tZWV0dXAnLHtcclxuICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXREYXRhKSxcclxuICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJvbkFkZE1lZXR1cFwiLCBkYXRhKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICA8RnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkFkZCBNZWV0dXA8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQWRkIHlvdXIgbmV3IG1lZXR1cHMgYW5kIGNyZWF0ZSBhbWF6aW5nIG5ldHdvcmsgb3Bwb3J0dW5pdGllcy5cIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e29uQWRkTWVldHVwfS8+XHJcbiAgPC9GcmFnbWVudD4pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0VXBQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=