/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/theme/index.js":
/*!*******************************************!*\
  !*** ./src/js/theme/index.js + 9 modules ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/whatwg-fetch/fetch.js\nvar fetch = __webpack_require__(\"./node_modules/whatwg-fetch/fetch.js\");\n// EXTERNAL MODULE: ./node_modules/lodash/debounce.js\nvar debounce = __webpack_require__(\"./node_modules/lodash/debounce.js\");\nvar debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);\n// EXTERNAL MODULE: ./node_modules/lodash/assign.js\nvar lodash_assign = __webpack_require__(\"./node_modules/lodash/assign.js\");\nvar assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);\n;// CONCATENATED MODULE: ./src/js/utils/events.js\n\n\nvar on = function on(el, name, handler) {\n  if (el.addEventListener) {\n    el.addEventListener(name, handler);\n  } else {\n    el.attachEvent(\"on\".concat(name), function () {\n      handler.call(el);\n    });\n  }\n};\n\nvar ready = function ready(fn) {\n  if (document.readyState !== 'loading') {\n    fn();\n  } else if (document.addEventListener) {\n    document.addEventListener('DOMContentLoaded', fn);\n  } else {\n    document.attachEvent('onreadystatechange', function () {\n      if (document.readyState !== 'loading') {\n        fn();\n      }\n    });\n  }\n};\n\nvar trigger = function trigger(opts) {\n  var event;\n\n  var options = assign_default()({\n    data: {},\n    el: document,\n    event: '',\n    native: true\n  }, opts);\n\n  if (options.native) {\n    event = document.createEvent('HTMLEvents');\n    event.initEvent(options.event, true, false);\n  } else {\n    try {\n      event = new window.CustomEvent(options.event, {\n        detail: options.data\n      });\n    } catch (e) {\n      event = document.createEvent('CustomEvent');\n      event.initCustomEvent(options.event, true, true, options.data);\n    }\n  }\n\n  options.el.dispatchEvent(event);\n};\n\n\n;// CONCATENATED MODULE: ./src/js/utils/tests.js\n/**\n * @module\n * @description Some handy test for common issues.\n */\nvar isJson = function isJson(str) {\n  try {\n    JSON.parse(str);\n  } catch (e) {\n    return false;\n  }\n\n  return true;\n};\n\nvar canLocalStore = function canLocalStore() {\n  var mod;\n  var result = false;\n\n  try {\n    mod = new Date();\n    window.localStorage.setItem(mod, mod.toString());\n    result = window.localStorage.getItem(mod) === mod.toString();\n    window.localStorage.removeItem(mod);\n    return result;\n  } catch (_error) {\n    return result;\n  }\n};\n\nvar android = /(android)/i.test(window.navigator.userAgent);\nvar chrome = !!window.chrome;\nvar firefox = typeof InstallTrigger !== 'undefined';\nvar ie =\n/* @cc_on!@ */\n false || document.documentMode || false;\nvar edge = !ie && !!window.StyleMedia;\nvar ios = !!window.navigator.userAgent.match(/(iPod|iPhone|iPad)/i);\nvar iosMobile = !!window.navigator.userAgent.match(/(iPod|iPhone)/i);\nvar opera = !!window.opera || window.navigator.userAgent.indexOf(' OPR/') >= 0;\nvar safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || !chrome && !opera && window.webkitAudioContext !== 'undefined'; // eslint-disable-line\n\nvar os = window.navigator.platform;\n/**\n * do not change to arrow function until testing dependencies are updated beyond the following reported issue\n * https://github.com/facebook/jest/issues/5001\n */\n\nfunction browserTests() {\n  return {\n    android: android,\n    chrome: chrome,\n    edge: edge,\n    firefox: firefox,\n    ie: ie,\n    ios: ios,\n    iosMobile: iosMobile,\n    opera: opera,\n    safari: safari,\n    os: os\n  };\n}\n\n\n;// CONCATENATED MODULE: ./src/js/utils/dom/apply-browser-classes.js\n/**\n * @function browserClasses\n * @description sets up browser classes on body without using user agent strings where possible.\n */\n\n\nvar applyBrowserClasses = function applyBrowserClasses() {\n  var browser = browserTests();\n  var classes = document.body.classList;\n\n  if (browser.android) {\n    classes.add('device-android');\n  } else if (browser.ios) {\n    classes.add('device-ios');\n  }\n\n  if (browser.edge) {\n    classes.add('browser-edge');\n  } else if (browser.chrome) {\n    classes.add('browser-chrome');\n  } else if (browser.firefox) {\n    classes.add('browser-firefox');\n  } else if (browser.ie) {\n    classes.add('browser-ie');\n  } else if (browser.opera) {\n    classes.add('browser-opera');\n  } else if (browser.safari) {\n    classes.add('browser-safari');\n  }\n};\n\n/* harmony default export */ var apply_browser_classes = (applyBrowserClasses);\n// EXTERNAL MODULE: ./node_modules/verge/verge.js\nvar verge = __webpack_require__(\"./node_modules/verge/verge.js\");\nvar verge_default = /*#__PURE__*/__webpack_require__.n(verge);\n;// CONCATENATED MODULE: ./src/js/theme/config/state.js\n/* harmony default export */ var state = ({\n  desktop_initialized: false,\n  is_desktop: false,\n  is_tablet: false,\n  is_mobile: false,\n  mobile_initialized: false,\n  v_height: 0,\n  v_width: 0\n});\n;// CONCATENATED MODULE: ./src/js/theme/config/options.js\n// breakpoint settings\nvar MEDIUM_BREAKPOINT = 768;\nvar FULL_BREAKPOINT = 960;\n;// CONCATENATED MODULE: ./src/js/theme/core/viewport-dims.js\n/**\n * @module\n * @exports viewportDims\n * @description Sets viewport dimensions using verge on shared state\n * and detects mobile or desktop state.\n */\n\n\n\n\nvar viewportDims = function viewportDims() {\n  state.v_height = verge_default().viewportH();\n  state.v_width = verge_default().viewportW();\n\n  if (state.v_width >= FULL_BREAKPOINT) {\n    state.is_desktop = true;\n    state.is_tablet = false;\n    state.is_mobile = false;\n  } else if (state.v_width >= MEDIUM_BREAKPOINT) {\n    state.is_desktop = false;\n    state.is_tablet = true;\n    state.is_mobile = false;\n  } else {\n    state.is_desktop = false;\n    state.is_tablet = false;\n    state.is_mobile = true;\n  }\n};\n\n/* harmony default export */ var viewport_dims = (viewportDims);\n;// CONCATENATED MODULE: ./src/js/theme/core/resize.js\n/**\n * @module\n * @exports resize\n * @description Kicks in any third party plugins that operate on a sitewide basis.\n */\n\n\n\nvar resize = function resize() {\n  // code for resize events can go here\n  viewport_dims();\n  trigger({\n    event: 'gravityflow/resize_executed',\n    native: false\n  });\n};\n\n/* harmony default export */ var core_resize = (resize);\n;// CONCATENATED MODULE: ./src/js/theme/core/plugins.js\n/**\n * @module\n * @exports plugins\n * @description Kicks in any third party plugins that operate on\n * a sitewide basis.\n */\nvar plugins = function plugins() {// initialize global external plugins here\n};\n\n/* harmony default export */ var core_plugins = (plugins);\n;// CONCATENATED MODULE: ./src/js/theme/core/ready.js\n\n\n // @EXAMPLE_REACT_APP\n// import * as tools from 'utils/tools';\n// import { HMR_DEV } from 'config/wp-settings';\n// you MUST do this in every module you use lodash in.\n// A custom bundle of only the lodash you use will be built by babel.\n\n\n\n // @EXAMPLE_REACT_APP\n// const el = {\n// \texampleAppRoot: tools.getNodes( 'example-app' )[ 0 ],\n// };\n\n/**\n * @function bindEvents\n * @description Bind global event listeners here,\n */\n\nvar bindEvents = function bindEvents() {\n  on(window, 'resize', debounce_default()(core_resize, 200, false));\n};\n/**\n * @function init\n * @description The core dispatcher for init across the codebase.\n */\n\n\nvar init = function init() {\n  // apply browser classes\n  apply_browser_classes(); // init external plugins\n\n  core_plugins(); // set initial states\n\n  viewport_dims(); // initialize global events\n\n  bindEvents(); // @EXAMPLE_REACT_APP (Make sure to include the wrapping if block for ALL react apps\n  // #if INCLUDEREACT\n  // if ( el.exampleAppRoot && ! HMR_DEV ) {\n  // \timport( 'Example' /* webpackChunkName:\"example\" */ );\n  // }\n  // #endif\n  // }\n\n  console.info('GravityFlow Theme: Initialized all javascript that targeted document ready.');\n};\n/**\n * @function domReady\n * @description Export our dom ready enabled init.\n */\n\n\nvar domReady = function domReady() {\n  ready(init);\n};\n\n/* harmony default export */ var core_ready = (domReady);\n;// CONCATENATED MODULE: ./src/js/theme/index.js\n\n\ncore_ready();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmF2aXR5Zmxvdy8uL3NyYy9qcy91dGlscy9ldmVudHMuanM/MzAxNCIsIndlYnBhY2s6Ly9ncmF2aXR5Zmxvdy8uL3NyYy9qcy91dGlscy90ZXN0cy5qcz81ZmNmIiwid2VicGFjazovL2dyYXZpdHlmbG93Ly4vc3JjL2pzL3V0aWxzL2RvbS9hcHBseS1icm93c2VyLWNsYXNzZXMuanM/ZmZjOSIsIndlYnBhY2s6Ly9ncmF2aXR5Zmxvdy8uL3NyYy9qcy90aGVtZS9jb25maWcvc3RhdGUuanM/NTU1ZSIsIndlYnBhY2s6Ly9ncmF2aXR5Zmxvdy8uL3NyYy9qcy90aGVtZS9jb25maWcvb3B0aW9ucy5qcz83YmY3Iiwid2VicGFjazovL2dyYXZpdHlmbG93Ly4vc3JjL2pzL3RoZW1lL2NvcmUvdmlld3BvcnQtZGltcy5qcz8wNDEyIiwid2VicGFjazovL2dyYXZpdHlmbG93Ly4vc3JjL2pzL3RoZW1lL2NvcmUvcmVzaXplLmpzP2U1ZjciLCJ3ZWJwYWNrOi8vZ3Jhdml0eWZsb3cvLi9zcmMvanMvdGhlbWUvY29yZS9wbHVnaW5zLmpzPzU3MjEiLCJ3ZWJwYWNrOi8vZ3Jhdml0eWZsb3cvLi9zcmMvanMvdGhlbWUvY29yZS9yZWFkeS5qcz8zNWFkIiwid2VicGFjazovL2dyYXZpdHlmbG93Ly4vc3JjL2pzL3RoZW1lL2luZGV4LmpzPzZiNmYiXSwibmFtZXMiOlsib24iLCJlbCIsIm5hbWUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiY2FsbCIsInJlYWR5IiwiZm4iLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ0cmlnZ2VyIiwib3B0cyIsImV2ZW50Iiwib3B0aW9ucyIsImRhdGEiLCJuYXRpdmUiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIndpbmRvdyIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZSIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJpc0pzb24iLCJzdHIiLCJKU09OIiwicGFyc2UiLCJjYW5Mb2NhbFN0b3JlIiwibW9kIiwicmVzdWx0IiwiRGF0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2Vycm9yIiwiYW5kcm9pZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjaHJvbWUiLCJmaXJlZm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpZSIsImRvY3VtZW50TW9kZSIsImVkZ2UiLCJTdHlsZU1lZGlhIiwiaW9zIiwibWF0Y2giLCJpb3NNb2JpbGUiLCJvcGVyYSIsImluZGV4T2YiLCJzYWZhcmkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJIVE1MRWxlbWVudCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm9zIiwicGxhdGZvcm0iLCJicm93c2VyVGVzdHMiLCJhcHBseUJyb3dzZXJDbGFzc2VzIiwiYnJvd3NlciIsImNsYXNzZXMiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGVza3RvcF9pbml0aWFsaXplZCIsImlzX2Rlc2t0b3AiLCJpc190YWJsZXQiLCJpc19tb2JpbGUiLCJtb2JpbGVfaW5pdGlhbGl6ZWQiLCJ2X2hlaWdodCIsInZfd2lkdGgiLCJNRURJVU1fQlJFQUtQT0lOVCIsIkZVTExfQlJFQUtQT0lOVCIsInZpZXdwb3J0RGltcyIsInN0YXRlIiwidmVyZ2UiLCJyZXNpemUiLCJwbHVnaW5zIiwiYmluZEV2ZW50cyIsImluaXQiLCJjb25zb2xlIiwiaW5mbyIsImRvbVJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9BLElBQU1BLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFXQyxPQUFYLEVBQXVCO0FBQ2pDLE1BQUlGLEVBQUUsQ0FBQ0csZ0JBQVAsRUFBeUI7QUFDeEJILE1BQUUsQ0FBQ0csZ0JBQUgsQ0FBb0JGLElBQXBCLEVBQTBCQyxPQUExQjtBQUNBLEdBRkQsTUFFTztBQUNORixNQUFFLENBQUNJLFdBQUgs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ZmlsZSI6Ii4vc3JjL2pzL3RoZW1lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb24gU29tZSBldmVudCBmdW5jdGlvbnMgZm9yIHVzZSBpbiBvdGhlciBtb2R1bGVzXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3Qgb24gPSAoZWwsIG5hbWUsIGhhbmRsZXIpID0+IHtcblx0aWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGVsLmF0dGFjaEV2ZW50KGBvbiR7bmFtZX1gLCAoKSA9PiB7XG5cdFx0XHRoYW5kbGVyLmNhbGwoZWwpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCByZWFkeSA9IChmbikgPT4ge1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG5cdFx0Zm4oKTtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuXHRcdFx0XHRmbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0cmlnZ2VyID0gKG9wdHMpID0+IHtcblx0bGV0IGV2ZW50O1xuXHRjb25zdCBvcHRpb25zID0gXy5hc3NpZ24oXG5cdFx0e1xuXHRcdFx0ZGF0YToge30sXG5cdFx0XHRlbDogZG9jdW1lbnQsXG5cdFx0XHRldmVudDogJycsXG5cdFx0XHRuYXRpdmU6IHRydWUsXG5cdFx0fSxcblx0XHRvcHRzXG5cdCk7XG5cblx0aWYgKG9wdGlvbnMubmF0aXZlKSB7XG5cdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuXHRcdGV2ZW50LmluaXRFdmVudChvcHRpb25zLmV2ZW50LCB0cnVlLCBmYWxzZSk7XG5cdH0gZWxzZSB7XG5cdFx0dHJ5IHtcblx0XHRcdGV2ZW50ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChvcHRpb25zLmV2ZW50LCB7XG5cdFx0XHRcdGRldGFpbDogb3B0aW9ucy5kYXRhLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcblx0XHRcdGV2ZW50LmluaXRDdXN0b21FdmVudChvcHRpb25zLmV2ZW50LCB0cnVlLCB0cnVlLCBvcHRpb25zLmRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdG9wdGlvbnMuZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5leHBvcnQgeyBvbiwgcmVhZHksIHRyaWdnZXIgfTtcbiIsIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uIFNvbWUgaGFuZHkgdGVzdCBmb3IgY29tbW9uIGlzc3Vlcy5cbiAqL1xuXG5jb25zdCBpc0pzb24gPSAoc3RyKSA9PiB7XG5cdHRyeSB7XG5cdFx0SlNPTi5wYXJzZShzdHIpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBjYW5Mb2NhbFN0b3JlID0gKCkgPT4ge1xuXHRsZXQgbW9kO1xuXHRsZXQgcmVzdWx0ID0gZmFsc2U7XG5cblx0dHJ5IHtcblx0XHRtb2QgPSBuZXcgRGF0ZSgpO1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShtb2QsIG1vZC50b1N0cmluZygpKTtcblxuXHRcdHJlc3VsdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShtb2QpID09PSBtb2QudG9TdHJpbmcoKTtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obW9kKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9IGNhdGNoIChfZXJyb3IpIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59O1xuXG5jb25zdCBhbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuY29uc3QgY2hyb21lID0gISF3aW5kb3cuY2hyb21lO1xuY29uc3QgZmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBpZSA9IC8qIEBjY19vbiFAICovIGZhbHNlIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSB8fCBmYWxzZTtcbmNvbnN0IGVkZ2UgPSAhaWUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYTtcbmNvbnN0IGlvcyA9ICEhd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUG9kfGlQaG9uZXxpUGFkKS9pKTtcbmNvbnN0IGlvc01vYmlsZSA9ICEhd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUG9kfGlQaG9uZSkvaSk7XG5jb25zdCBvcGVyYSA9XG5cdCEhd2luZG93Lm9wZXJhIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMDtcbmNvbnN0IHNhZmFyaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cuSFRNTEVsZW1lbnQpLmluZGV4T2YoJ0NvbnN0cnVjdG9yJykgPiAwIHx8ICFjaHJvbWUgJiYgIW9wZXJhICYmIHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5jb25zdCBvcyA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG5cbi8qKlxuICogZG8gbm90IGNoYW5nZSB0byBhcnJvdyBmdW5jdGlvbiB1bnRpbCB0ZXN0aW5nIGRlcGVuZGVuY2llcyBhcmUgdXBkYXRlZCBiZXlvbmQgdGhlIGZvbGxvd2luZyByZXBvcnRlZCBpc3N1ZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2plc3QvaXNzdWVzLzUwMDFcbiAqL1xuZnVuY3Rpb24gYnJvd3NlclRlc3RzKCkge1xuXHRyZXR1cm4ge1xuXHRcdGFuZHJvaWQsXG5cdFx0Y2hyb21lLFxuXHRcdGVkZ2UsXG5cdFx0ZmlyZWZveCxcblx0XHRpZSxcblx0XHRpb3MsXG5cdFx0aW9zTW9iaWxlLFxuXHRcdG9wZXJhLFxuXHRcdHNhZmFyaSxcblx0XHRvcyxcblx0fTtcbn1cblxuZXhwb3J0IHsgaXNKc29uLCBjYW5Mb2NhbFN0b3JlLCBicm93c2VyVGVzdHMgfTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGJyb3dzZXJDbGFzc2VzXG4gKiBAZGVzY3JpcHRpb24gc2V0cyB1cCBicm93c2VyIGNsYXNzZXMgb24gYm9keSB3aXRob3V0IHVzaW5nIHVzZXIgYWdlbnQgc3RyaW5ncyB3aGVyZSBwb3NzaWJsZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyB0ZXN0IGZyb20gJy4uL3Rlc3RzJztcblxuY29uc3QgYXBwbHlCcm93c2VyQ2xhc3NlcyA9ICgpID0+IHtcblx0Y29uc3QgYnJvd3NlciA9IHRlc3QuYnJvd3NlclRlc3RzKCk7XG5cdGNvbnN0IGNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcblxuXHRpZiAoYnJvd3Nlci5hbmRyb2lkKSB7XG5cdFx0Y2xhc3Nlcy5hZGQoJ2RldmljZS1hbmRyb2lkJyk7XG5cdH0gZWxzZSBpZiAoYnJvd3Nlci5pb3MpIHtcblx0XHRjbGFzc2VzLmFkZCgnZGV2aWNlLWlvcycpO1xuXHR9XG5cblx0aWYgKGJyb3dzZXIuZWRnZSkge1xuXHRcdGNsYXNzZXMuYWRkKCdicm93c2VyLWVkZ2UnKTtcblx0fSBlbHNlIGlmIChicm93c2VyLmNocm9tZSkge1xuXHRcdGNsYXNzZXMuYWRkKCdicm93c2VyLWNocm9tZScpO1xuXHR9IGVsc2UgaWYgKGJyb3dzZXIuZmlyZWZveCkge1xuXHRcdGNsYXNzZXMuYWRkKCdicm93c2VyLWZpcmVmb3gnKTtcblx0fSBlbHNlIGlmIChicm93c2VyLmllKSB7XG5cdFx0Y2xhc3Nlcy5hZGQoJ2Jyb3dzZXItaWUnKTtcblx0fSBlbHNlIGlmIChicm93c2VyLm9wZXJhKSB7XG5cdFx0Y2xhc3Nlcy5hZGQoJ2Jyb3dzZXItb3BlcmEnKTtcblx0fSBlbHNlIGlmIChicm93c2VyLnNhZmFyaSkge1xuXHRcdGNsYXNzZXMuYWRkKCdicm93c2VyLXNhZmFyaScpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBseUJyb3dzZXJDbGFzc2VzO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRkZXNrdG9wX2luaXRpYWxpemVkOiBmYWxzZSxcblx0aXNfZGVza3RvcDogZmFsc2UsXG5cdGlzX3RhYmxldDogZmFsc2UsXG5cdGlzX21vYmlsZTogZmFsc2UsXG5cdG1vYmlsZV9pbml0aWFsaXplZDogZmFsc2UsXG5cdHZfaGVpZ2h0OiAwLFxuXHR2X3dpZHRoOiAwLFxufTtcbiIsIi8vIGJyZWFrcG9pbnQgc2V0dGluZ3NcblxuZXhwb3J0IGNvbnN0IE1FRElVTV9CUkVBS1BPSU5UID0gNzY4O1xuZXhwb3J0IGNvbnN0IEZVTExfQlJFQUtQT0lOVCA9IDk2MDtcbiIsIi8qKlxuICogQG1vZHVsZVxuICogQGV4cG9ydHMgdmlld3BvcnREaW1zXG4gKiBAZGVzY3JpcHRpb24gU2V0cyB2aWV3cG9ydCBkaW1lbnNpb25zIHVzaW5nIHZlcmdlIG9uIHNoYXJlZCBzdGF0ZVxuICogYW5kIGRldGVjdHMgbW9iaWxlIG9yIGRlc2t0b3Agc3RhdGUuXG4gKi9cblxuaW1wb3J0IHZlcmdlIGZyb20gJ3ZlcmdlJztcbmltcG9ydCBzdGF0ZSBmcm9tICcuLi9jb25maWcvc3RhdGUnO1xuaW1wb3J0IHsgRlVMTF9CUkVBS1BPSU5ULCBNRURJVU1fQlJFQUtQT0lOVCB9IGZyb20gJy4uL2NvbmZpZy9vcHRpb25zJztcblxuY29uc3Qgdmlld3BvcnREaW1zID0gKCkgPT4ge1xuXHRzdGF0ZS52X2hlaWdodCA9IHZlcmdlLnZpZXdwb3J0SCgpO1xuXHRzdGF0ZS52X3dpZHRoID0gdmVyZ2Uudmlld3BvcnRXKCk7XG5cblx0aWYgKHN0YXRlLnZfd2lkdGggPj0gRlVMTF9CUkVBS1BPSU5UKSB7XG5cdFx0c3RhdGUuaXNfZGVza3RvcCA9IHRydWU7XG5cdFx0c3RhdGUuaXNfdGFibGV0ID0gZmFsc2U7XG5cdFx0c3RhdGUuaXNfbW9iaWxlID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoc3RhdGUudl93aWR0aCA+PSBNRURJVU1fQlJFQUtQT0lOVCkge1xuXHRcdHN0YXRlLmlzX2Rlc2t0b3AgPSBmYWxzZTtcblx0XHRzdGF0ZS5pc190YWJsZXQgPSB0cnVlO1xuXHRcdHN0YXRlLmlzX21vYmlsZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHN0YXRlLmlzX2Rlc2t0b3AgPSBmYWxzZTtcblx0XHRzdGF0ZS5pc190YWJsZXQgPSBmYWxzZTtcblx0XHRzdGF0ZS5pc19tb2JpbGUgPSB0cnVlO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3cG9ydERpbXM7XG4iLCIvKipcbiAqIEBtb2R1bGVcbiAqIEBleHBvcnRzIHJlc2l6ZVxuICogQGRlc2NyaXB0aW9uIEtpY2tzIGluIGFueSB0aGlyZCBwYXJ0eSBwbHVnaW5zIHRoYXQgb3BlcmF0ZSBvbiBhIHNpdGV3aWRlIGJhc2lzLlxuICovXG5cbmltcG9ydCB7IHRyaWdnZXIgfSBmcm9tICd1dGlscy9ldmVudHMnO1xuaW1wb3J0IHZpZXdwb3J0RGltcyBmcm9tICcuL3ZpZXdwb3J0LWRpbXMnO1xuXG5jb25zdCByZXNpemUgPSAoKSA9PiB7XG5cdC8vIGNvZGUgZm9yIHJlc2l6ZSBldmVudHMgY2FuIGdvIGhlcmVcblxuXHR2aWV3cG9ydERpbXMoKTtcblxuXHR0cmlnZ2VyKHsgZXZlbnQ6ICdncmF2aXR5Zmxvdy9yZXNpemVfZXhlY3V0ZWQnLCBuYXRpdmU6IGZhbHNlIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplO1xuIiwiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZXhwb3J0cyBwbHVnaW5zXG4gKiBAZGVzY3JpcHRpb24gS2lja3MgaW4gYW55IHRoaXJkIHBhcnR5IHBsdWdpbnMgdGhhdCBvcGVyYXRlIG9uXG4gKiBhIHNpdGV3aWRlIGJhc2lzLlxuICovXG5cbmNvbnN0IHBsdWdpbnMgPSAoKSA9PiB7XG5cdC8vIGluaXRpYWxpemUgZ2xvYmFsIGV4dGVybmFsIHBsdWdpbnMgaGVyZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2lucztcbiIsIi8qKlxuICogQG1vZHVsZVxuICogQGV4cG9ydHMgcmVhZHlcbiAqIEBkZXNjcmlwdGlvbiBUaGUgY29yZSBkaXNwYXRjaGVyIGZvciB0aGUgZG9tIHJlYWR5IGV2ZW50IGphdmFzY3JpcHQuXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG9uLCByZWFkeSB9IGZyb20gJ3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgYXBwbHlCcm93c2VyQ2xhc3NlcyBmcm9tICd1dGlscy9kb20vYXBwbHktYnJvd3Nlci1jbGFzc2VzJztcbi8vIEBFWEFNUExFX1JFQUNUX0FQUFxuXG4vLyBpbXBvcnQgKiBhcyB0b29scyBmcm9tICd1dGlscy90b29scyc7XG4vLyBpbXBvcnQgeyBITVJfREVWIH0gZnJvbSAnY29uZmlnL3dwLXNldHRpbmdzJztcblxuLy8geW91IE1VU1QgZG8gdGhpcyBpbiBldmVyeSBtb2R1bGUgeW91IHVzZSBsb2Rhc2ggaW4uXG4vLyBBIGN1c3RvbSBidW5kbGUgb2Ygb25seSB0aGUgbG9kYXNoIHlvdSB1c2Ugd2lsbCBiZSBidWlsdCBieSBiYWJlbC5cblxuaW1wb3J0IHJlc2l6ZSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgcGx1Z2lucyBmcm9tICcuL3BsdWdpbnMnO1xuaW1wb3J0IHZpZXdwb3J0RGltcyBmcm9tICcuL3ZpZXdwb3J0LWRpbXMnO1xuXG4vLyBARVhBTVBMRV9SRUFDVF9BUFBcblxuLy8gY29uc3QgZWwgPSB7XG4vLyBcdGV4YW1wbGVBcHBSb290OiB0b29scy5nZXROb2RlcyggJ2V4YW1wbGUtYXBwJyApWyAwIF0sXG4vLyB9O1xuXG4vKipcbiAqIEBmdW5jdGlvbiBiaW5kRXZlbnRzXG4gKiBAZGVzY3JpcHRpb24gQmluZCBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzIGhlcmUsXG4gKi9cblxuY29uc3QgYmluZEV2ZW50cyA9ICgpID0+IHtcblx0b24od2luZG93LCAncmVzaXplJywgXy5kZWJvdW5jZShyZXNpemUsIDIwMCwgZmFsc2UpKTtcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgY29yZSBkaXNwYXRjaGVyIGZvciBpbml0IGFjcm9zcyB0aGUgY29kZWJhc2UuXG4gKi9cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcblx0Ly8gYXBwbHkgYnJvd3NlciBjbGFzc2VzXG5cblx0YXBwbHlCcm93c2VyQ2xhc3NlcygpO1xuXG5cdC8vIGluaXQgZXh0ZXJuYWwgcGx1Z2luc1xuXG5cdHBsdWdpbnMoKTtcblxuXHQvLyBzZXQgaW5pdGlhbCBzdGF0ZXNcblxuXHR2aWV3cG9ydERpbXMoKTtcblxuXHQvLyBpbml0aWFsaXplIGdsb2JhbCBldmVudHNcblxuXHRiaW5kRXZlbnRzKCk7XG5cblx0Ly8gQEVYQU1QTEVfUkVBQ1RfQVBQIChNYWtlIHN1cmUgdG8gaW5jbHVkZSB0aGUgd3JhcHBpbmcgaWYgYmxvY2sgZm9yIEFMTCByZWFjdCBhcHBzXG5cblx0Ly8gI2lmIElOQ0xVREVSRUFDVFxuXHQvLyBpZiAoIGVsLmV4YW1wbGVBcHBSb290ICYmICEgSE1SX0RFViApIHtcblx0Ly8gXHRpbXBvcnQoICdFeGFtcGxlJyAvKiB3ZWJwYWNrQ2h1bmtOYW1lOlwiZXhhbXBsZVwiICovICk7XG5cdC8vIH1cblx0Ly8gI2VuZGlmXG5cdC8vIH1cblxuXHRjb25zb2xlLmluZm8oXG5cdFx0J0dyYXZpdHlGbG93IFRoZW1lOiBJbml0aWFsaXplZCBhbGwgamF2YXNjcmlwdCB0aGF0IHRhcmdldGVkIGRvY3VtZW50IHJlYWR5Lidcblx0KTtcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uIGRvbVJlYWR5XG4gKiBAZGVzY3JpcHRpb24gRXhwb3J0IG91ciBkb20gcmVhZHkgZW5hYmxlZCBpbml0LlxuICovXG5cbmNvbnN0IGRvbVJlYWR5ID0gKCkgPT4ge1xuXHRyZWFkeShpbml0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVJlYWR5O1xuIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0IHJlYWR5IGZyb20gJy4vY29yZS9yZWFkeSc7XG5cbnJlYWR5KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/theme/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts-theme": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/core-js/modules/es.array.iterator.js","vendor-theme"],
/******/ 			["./src/js/theme/index.js","vendor-theme"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgravityflow"] = self["webpackChunkgravityflow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;