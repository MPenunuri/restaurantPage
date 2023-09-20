/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/home_pic_1.jpg */ "./assets/home_pic_1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flex{
    display: flex;
    align-items: center;
    justify-content: center;
}

.column{
    flex-direction: column;
}


.body{
    height: 100vh;
    width: 100vw;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    overflow: scroll;
}

.nav{
    position: sticky;
    top: 0;
    height: 10vh;
    width: 100vw;
    background-color: gray;
    gap: 1rem;
}

.header{
    height: 5vh;
    width: 100vw;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
}

.navBtn{
    flex-grow: 0;
    height: 80%;
    width: 20%;
    border-radius: 25px;
    background-color: antiquewhite;
}

.navBtn:hover{
    background-color: rgb(100, 98, 95);
}

.footer{
    height: 5vh;
    width: 100vw;
    background-color: gray;
}

.content{
    top: 10vh;
    width: 100vw;
    gap: 1.5rem;
}

.home{
    height: 80vh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
}

.greeting{
    width: 80%;
    text-align: center;
    white-space: break-spaces;
    font-size: 2rem;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 2px rgba(53, 56, 56, 0.9);
    border-radius: 10px;
    background-color: rgb(240, 255, 255,.6);
}

.menu{
    margin: 1rem 0rem;
    top: 20vh;
}

.menuCategorie{
    width: 60%;
    border: 2px solid black;
    padding: .5rem 1rem;
    gap: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,yDAAiD;IACjD,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,yBAAyB;IACzB,8CAA8C;IAC9C,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb","sourcesContent":[".flex{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.column{\n    flex-direction: column;\n}\n\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    overflow: scroll;\n}\n\n.nav{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    width: 100vw;\n    background-color: gray;\n    gap: 1rem;\n}\n\n.header{\n    height: 5vh;\n    width: 100vw;\n    text-align: center;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.navBtn{\n    flex-grow: 0;\n    height: 80%;\n    width: 20%;\n    border-radius: 25px;\n    background-color: antiquewhite;\n}\n\n.navBtn:hover{\n    background-color: rgb(100, 98, 95);\n}\n\n.footer{\n    height: 5vh;\n    width: 100vw;\n    background-color: gray;\n}\n\n.content{\n    top: 10vh;\n    width: 100vw;\n    gap: 1.5rem;\n}\n\n.home{\n    height: 80vh;\n    background-image: url('../assets/home_pic_1.jpg');\n    background-size: cover;\n}\n\n.greeting{\n    width: 80%;\n    text-align: center;\n    white-space: break-spaces;\n    font-size: 2rem;\n    color: rgb(255, 255, 255);\n    text-shadow: 2px 2px 2px rgba(53, 56, 56, 0.9);\n    border-radius: 10px;\n    background-color: rgb(240, 255, 255,.6);\n}\n\n.menu{\n    margin: 1rem 0rem;\n    top: 20vh;\n}\n\n.menuCategorie{\n    width: 60%;\n    border: 2px solid black;\n    padding: .5rem 1rem;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutText.js":
/*!**************************!*\
  !*** ./src/aboutText.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const text =
    `<p>Welcome to Culinary Oasis, a place where a passion for great food meets a warm and friendly atmosphere. We're more than just a restaurant; we're a culinary destination inviting you to savor an exceptional dining experience.</p>
    
    <p>At Culinary Oasis, we are committed to offering you a variety of flavors and dishes that will satisfy all your cravings. From our refreshing beverages to our delightful choices of appetizers, burgers, hotdogs, pizzas, pasta, and salads, every bite is a burst of carefully crafted flavor by our talented team of chefs.</p>
    
    <p>Our drink menu features classics like "Coca-Cola," a perfect thirst-quencher, as well as the refreshing "Lemonade" and the revitalizing "Iced Tea." Pair your drinks with our mouthwatering appetizers, such as crispy "Chicken Wings," nachos covered in melted cheese, or irresistible "Onion Rings."</p>
    
    <p>If you're a burger enthusiast, you'll love our options, from the juicy "Classic Burger" to the tangy "BBQ Burger" or the meatless "Vegetarian Burger." Hotdog lovers can indulge in the "Classic Hotdog," the indulgent "Chili Cheese Dog," or the delicious "Vegetarian Hotdog."</p>
    
    <p>Our selection of pizzas includes the classic "Margherita Pizza," the savory "Pepperoni Pizza," and the vegetarian "Vegetarian Pizza." For those who prefer pasta, we offer choices like "Spaghetti with Meatballs," "Fettuccine Alfredo," and "Pasta Primavera."</p>
    
    <p>If you're looking for lighter options, our salads, such as the "Caesar Salad," the "Grilled Chicken Salad," and the "Avocado and Tomato Salad," provide a fresh and delightful mix.</p>
    
    <p>At Culinary Oasis, the quality of our ingredients and attention to detail in every dish are our top priorities. We take pride in providing a dining experience that will have you coming back for more.</p>
    
    <p>We look forward to welcoming you soon at Culinary Oasis for an unforgettable meal in a cozy atmosphere!</p>
  `;
    return text
}

/***/ }),

/***/ "./src/addEventListener.js":
/*!*********************************!*\
  !*** ./src/addEventListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showHome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showHome.js */ "./src/showHome.js");
/* harmony import */ var _showMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showMenu.js */ "./src/showMenu.js");
/* harmony import */ var _showAbout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showAbout.js */ "./src/showAbout.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(btn,name){

    let op;

    switch (name){
        case 'Home':
            op = _showHome_js__WEBPACK_IMPORTED_MODULE_0__["default"];
            break;
        case 'Menu':
            op = _showMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"];
            break;
        case 'About':
            op = _showAbout_js__WEBPACK_IMPORTED_MODULE_2__["default"];
            break;
    };

    btn.addEventListener('click',op);
}

/***/ }),

/***/ "./src/addFooter.js":
/*!**************************!*\
  !*** ./src/addFooter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(body){
    const footer = document.createElement('footer');
    footer.classList.add('flex','footer');
    footer.textContent = 'Front-end project by MPenunuri.';
    body.insertAdjacentElement('beforeend',footer);
}

/***/ }),

/***/ "./src/addNavBar.js":
/*!**************************!*\
  !*** ./src/addNavBar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListener */ "./src/addEventListener.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(body){

    const navBar = document.createElement('nav');
    navBar.classList.add('flex','nav');
    body.insertAdjacentElement('afterbegin',navBar);

    const header = document.createElement('header');
    header.classList.add('flex','header');
    header.textContent = 'Name'
    body.insertAdjacentElement('afterbegin',header);

    const buttonsNames = ['Home','Menu','About'];

    buttonsNames.forEach((name) =>{
        let btn = document.createElement('button');
        btn.classList.add('navBtn');
        btn.textContent = name;
        (0,_addEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(btn,name);
        navBar.appendChild(btn);
    });
};

/***/ }),

/***/ "./src/displaySection.js":
/*!*******************************!*\
  !*** ./src/displaySection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeClass */ "./src/removeClass.js");
/* harmony import */ var _removeChildElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeChildElements */ "./src/removeChildElements.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(newClass,classToDelete1,classToDelete2){
    const content = document.getElementById('content');
    (0,_removeChildElements__WEBPACK_IMPORTED_MODULE_1__["default"])(content);
    (0,_removeClass__WEBPACK_IMPORTED_MODULE_0__["default"])(content,classToDelete1);
    (0,_removeClass__WEBPACK_IMPORTED_MODULE_0__["default"])(content,classToDelete2);
    content.classList.add('flex','column','content',newClass);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
const menu = 
{
  "drinks": [
    {
      "name": "Coca-Cola",
      "description": "Classic cola soda, the perfect thirst-quencher.",
      "price": 2.99
    },
    {
      "name": "Lemonade",
      "description": "Refreshing lemon-flavored soda, a zesty delight.",
      "price": 2.49
    },
    {
      "name": "Iced Tea",
      "description": "Chilled and revitalizing iced tea for a hot day.",
      "price": 1.99
    }
    ],
  "appetizers": [
    {
      "name": "Chicken Wings",
      "description": "Crispy chicken wings served with spicy dipping sauce.",
      "price": 6.99
    },
    {
      "name": "Nachos with Cheese",
      "description": "Crunchy nachos covered in melted cheese, perfect for sharing.",
      "price": 4.99
    },
    {
      "name": "Onion Rings",
      "description": "Golden and crispy onion rings, a savory snack.",
      "price": 3.49
    }
    ],
  "burgers": [
    {
      "name": "Classic Burger",
      "description": "A juicy burger topped with lettuce, tomato, and cheese.",
      "price": 5.99
    },
    {
      "name": "BBQ Burger",
      "description": "Burger with tangy BBQ sauce and crispy fried onions.",
      "price": 6.49
    },
    {
      "name": "Vegetarian Burger",
      "description": "Chickpea and vegetable patty for a meatless delight.",
      "price": 5.49
    }
    ],
  "hotdogs": [
    {
      "name": "Classic Hotdog",
      "description": "Sausage with mustard and ketchup in a soft bun.",
      "price": 3.99
    },
    {
      "name": "Chili Cheese Dog",
      "description": "Hotdog smothered in chili and melted cheese.",
      "price": 4.49
    },
    {
      "name": "Vegetarian Hotdog",
      "description": "Tofu dog with a variety of fresh toppings.",
      "price": 4.99
    }
    ],
  "pizzas": [
    {
      "name": "Margherita Pizza",
      "description": "Pizza with tomato, mozzarella, and basil leaves, a classic favorite.",
      "price": 8.99
    },
    {
      "name": "Pepperoni Pizza",
      "description": "Pizza topped with pepperoni and gooey cheese.",
      "price": 9.49
    },
    {
      "name": "Vegetarian Pizza",
      "description": "Pizza loaded with mushrooms, peppers, and onions.",
      "price": 8.49
    }
    ],
    "pasta": [
    {
      "name": "Spaghetti with Meatballs",
      "description": "Spaghetti and meatballs served with marinara sauce.",
      "price": 7.99
    },
    {
      "name": "Fettuccine Alfredo",
      "description": "Creamy fettuccine pasta with Alfredo sauce.",
      "price": 8.49
    },
    {
      "name": "Pasta Primavera",
      "description": "Pasta with mixed vegetables and pesto sauce.",
      "price": 7.49
    }
    ],
    "salads": [
    {
      "name": "Caesar Salad",
      "description": "Romaine lettuce, croutons, and Caesar dressing.",
      "price": 5.99
    },
    {
      "name": "Grilled Chicken Salad",
      "description": "Salad with grilled chicken and ranch dressing.",
      "price": 6.49
    },
    {
      "name": "Avocado and Tomato Salad",
      "description": "Salad with avocado, tomato, and balsamic vinaigrette.",
      "price": 5.49
    }
    ]
}


  

/***/ }),

/***/ "./src/removeChildElements.js":
/*!************************************!*\
  !*** ./src/removeChildElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/***/ }),

/***/ "./src/removeClass.js":
/*!****************************!*\
  !*** ./src/removeClass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element,className){
    if(element.classList.contains(className))element.classList.remove(className);
}

/***/ }),

/***/ "./src/showAbout.js":
/*!**************************!*\
  !*** ./src/showAbout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaySection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaySection */ "./src/displaySection.js");
/* harmony import */ var _aboutText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutText */ "./src/aboutText.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    
    (0,_displaySection__WEBPACK_IMPORTED_MODULE_0__["default"])('about','menu','home');
    
    const aboutHeader = document.createElement('h2');
    aboutHeader.classList.add('aboutHeader')
    aboutHeader.textContent = 'About us'
    content.appendChild(aboutHeader);

    const text = document.createElement('p');
    text.classList.add('aboutText');
    text.innerHTML = (0,_aboutText__WEBPACK_IMPORTED_MODULE_1__["default"])();
    content.appendChild(text);
}

/***/ }),

/***/ "./src/showHome.js":
/*!*************************!*\
  !*** ./src/showHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaySection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaySection */ "./src/displaySection.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    
    (0,_displaySection__WEBPACK_IMPORTED_MODULE_0__["default"])('home','menu','about');
    
    const greeting = document.createElement('h2');
    greeting.classList.add('greeting')
    greeting.textContent = 'Welcome to our restaurant!'
    content.appendChild(greeting);
}

/***/ }),

/***/ "./src/showItems.js":
/*!**************************!*\
  !*** ./src/showItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(btn,parent,array){
    if(btn.classList.contains('activeCategorie')){
        btn.classList.remove('activeCategorie')
        while (parent.lastChild && parent.children.length > 1) {
            parent.removeChild(parent.lastChild);
        }
    } else{
        btn.classList.add('activeCategorie')
        array.forEach(item => {
            let itemContainer = document.createElement('div');
            itemContainer.classList.add('itemContainer');
            
            let name = document.createElement('p');
            name.classList.add('itemName');
            name.textContent = item.name;
            itemContainer.appendChild(name);

            let description = document.createElement('p');
            description.classList.add('itemDescription');
            description.textContent = item.description;
            itemContainer.appendChild(description);

            let price = document.createElement('p')
            price.classList.add('itemPrice')
            price.textContent = item.price;
            itemContainer.appendChild(price); 

            parent.appendChild(itemContainer);
        });
    }
};

/***/ }),

/***/ "./src/showMenu.js":
/*!*************************!*\
  !*** ./src/showMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaySection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaySection.js */ "./src/displaySection.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _showItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showItems.js */ "./src/showItems.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    (0,_displaySection_js__WEBPACK_IMPORTED_MODULE_0__["default"])('menu','home','about');
    for(const categorie in _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu){
        let categorieContainer = document.createElement('div');
        categorieContainer.classList.add('flex','column','menuCategorie');

        let dropDownBtn = document.createElement('button');
        dropDownBtn.classList.add('dropDownIcon');
        dropDownBtn.textContent = '> ' + categorie;
        dropDownBtn.addEventListener('click',() => {
            (0,_showItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dropDownBtn,categorieContainer,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu[categorie])
        })
        categorieContainer.appendChild(dropDownBtn);

        content.appendChild(categorieContainer);
    };
};

/***/ }),

/***/ "./assets/home_pic_1.jpg":
/*!*******************************!*\
  !*** ./assets/home_pic_1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8b162f5cddd04965fe.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addNavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNavBar.js */ "./src/addNavBar.js");
/* harmony import */ var _addFooter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addFooter.js */ "./src/addFooter.js");
/* harmony import */ var _showHome_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showHome.js */ "./src/showHome.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const body = document.querySelector('body');
body.classList.add('body');

(0,_addNavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(body);
(0,_showHome_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_addFooter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0E7QUFDRjtBQUNoQjs7QUFFckI7QUFDQTs7QUFFQSx5REFBUztBQUNULHdEQUFRO0FBQ1IseURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYWJvdXRUZXh0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hZGRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2FkZE5hdkJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvZGlzcGxheVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3JlbW92ZUNoaWxkRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zaG93QWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nob3dIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zaG93SXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nob3dNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaG9tZV9waWNfMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbHVtbntcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ubmF2e1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5oZWFkZXJ7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5hdkJ0bntcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLm5hdkJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCA5OCwgOTUpO1xufVxuXG4uZm9vdGVye1xuICAgIGhlaWdodDogNXZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uY29udGVudHtcbiAgICB0b3A6IDEwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uaG9tZXtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ncmVldGluZ3tcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDUzLCA1NiwgNTYsIDAuOSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwuNik7XG59XG5cbi5tZW51e1xuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xuICAgIHRvcDogMjB2aDtcbn1cblxuLm1lbnVDYXRlZ29yaWV7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGdhcDogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCx5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseURBQWlEO0lBQ2pELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGV4e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbHVtbntcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLm5hdntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5hdkJ0bntcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4ubmF2QnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCA5OCwgOTUpO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgdG9wOiAxMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uaG9tZXtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9ob21lX3BpY18xLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZ3JlZXRpbmd7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSg1MywgNTYsIDU2LCAwLjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwuNik7XFxufVxcblxcbi5tZW51e1xcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcXG4gICAgdG9wOiAyMHZoO1xcbn1cXG5cXG4ubWVudUNhdGVnb3JpZXtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRleHQgPVxuICAgIGA8cD5XZWxjb21lIHRvIEN1bGluYXJ5IE9hc2lzLCBhIHBsYWNlIHdoZXJlIGEgcGFzc2lvbiBmb3IgZ3JlYXQgZm9vZCBtZWV0cyBhIHdhcm0gYW5kIGZyaWVuZGx5IGF0bW9zcGhlcmUuIFdlJ3JlIG1vcmUgdGhhbiBqdXN0IGEgcmVzdGF1cmFudDsgd2UncmUgYSBjdWxpbmFyeSBkZXN0aW5hdGlvbiBpbnZpdGluZyB5b3UgdG8gc2F2b3IgYW4gZXhjZXB0aW9uYWwgZGluaW5nIGV4cGVyaWVuY2UuPC9wPlxuICAgIFxuICAgIDxwPkF0IEN1bGluYXJ5IE9hc2lzLCB3ZSBhcmUgY29tbWl0dGVkIHRvIG9mZmVyaW5nIHlvdSBhIHZhcmlldHkgb2YgZmxhdm9ycyBhbmQgZGlzaGVzIHRoYXQgd2lsbCBzYXRpc2Z5IGFsbCB5b3VyIGNyYXZpbmdzLiBGcm9tIG91ciByZWZyZXNoaW5nIGJldmVyYWdlcyB0byBvdXIgZGVsaWdodGZ1bCBjaG9pY2VzIG9mIGFwcGV0aXplcnMsIGJ1cmdlcnMsIGhvdGRvZ3MsIHBpenphcywgcGFzdGEsIGFuZCBzYWxhZHMsIGV2ZXJ5IGJpdGUgaXMgYSBidXJzdCBvZiBjYXJlZnVsbHkgY3JhZnRlZCBmbGF2b3IgYnkgb3VyIHRhbGVudGVkIHRlYW0gb2YgY2hlZnMuPC9wPlxuICAgIFxuICAgIDxwPk91ciBkcmluayBtZW51IGZlYXR1cmVzIGNsYXNzaWNzIGxpa2UgXCJDb2NhLUNvbGEsXCIgYSBwZXJmZWN0IHRoaXJzdC1xdWVuY2hlciwgYXMgd2VsbCBhcyB0aGUgcmVmcmVzaGluZyBcIkxlbW9uYWRlXCIgYW5kIHRoZSByZXZpdGFsaXppbmcgXCJJY2VkIFRlYS5cIiBQYWlyIHlvdXIgZHJpbmtzIHdpdGggb3VyIG1vdXRod2F0ZXJpbmcgYXBwZXRpemVycywgc3VjaCBhcyBjcmlzcHkgXCJDaGlja2VuIFdpbmdzLFwiIG5hY2hvcyBjb3ZlcmVkIGluIG1lbHRlZCBjaGVlc2UsIG9yIGlycmVzaXN0aWJsZSBcIk9uaW9uIFJpbmdzLlwiPC9wPlxuICAgIFxuICAgIDxwPklmIHlvdSdyZSBhIGJ1cmdlciBlbnRodXNpYXN0LCB5b3UnbGwgbG92ZSBvdXIgb3B0aW9ucywgZnJvbSB0aGUganVpY3kgXCJDbGFzc2ljIEJ1cmdlclwiIHRvIHRoZSB0YW5neSBcIkJCUSBCdXJnZXJcIiBvciB0aGUgbWVhdGxlc3MgXCJWZWdldGFyaWFuIEJ1cmdlci5cIiBIb3Rkb2cgbG92ZXJzIGNhbiBpbmR1bGdlIGluIHRoZSBcIkNsYXNzaWMgSG90ZG9nLFwiIHRoZSBpbmR1bGdlbnQgXCJDaGlsaSBDaGVlc2UgRG9nLFwiIG9yIHRoZSBkZWxpY2lvdXMgXCJWZWdldGFyaWFuIEhvdGRvZy5cIjwvcD5cbiAgICBcbiAgICA8cD5PdXIgc2VsZWN0aW9uIG9mIHBpenphcyBpbmNsdWRlcyB0aGUgY2xhc3NpYyBcIk1hcmdoZXJpdGEgUGl6emEsXCIgdGhlIHNhdm9yeSBcIlBlcHBlcm9uaSBQaXp6YSxcIiBhbmQgdGhlIHZlZ2V0YXJpYW4gXCJWZWdldGFyaWFuIFBpenphLlwiIEZvciB0aG9zZSB3aG8gcHJlZmVyIHBhc3RhLCB3ZSBvZmZlciBjaG9pY2VzIGxpa2UgXCJTcGFnaGV0dGkgd2l0aCBNZWF0YmFsbHMsXCIgXCJGZXR0dWNjaW5lIEFsZnJlZG8sXCIgYW5kIFwiUGFzdGEgUHJpbWF2ZXJhLlwiPC9wPlxuICAgIFxuICAgIDxwPklmIHlvdSdyZSBsb29raW5nIGZvciBsaWdodGVyIG9wdGlvbnMsIG91ciBzYWxhZHMsIHN1Y2ggYXMgdGhlIFwiQ2Flc2FyIFNhbGFkLFwiIHRoZSBcIkdyaWxsZWQgQ2hpY2tlbiBTYWxhZCxcIiBhbmQgdGhlIFwiQXZvY2FkbyBhbmQgVG9tYXRvIFNhbGFkLFwiIHByb3ZpZGUgYSBmcmVzaCBhbmQgZGVsaWdodGZ1bCBtaXguPC9wPlxuICAgIFxuICAgIDxwPkF0IEN1bGluYXJ5IE9hc2lzLCB0aGUgcXVhbGl0eSBvZiBvdXIgaW5ncmVkaWVudHMgYW5kIGF0dGVudGlvbiB0byBkZXRhaWwgaW4gZXZlcnkgZGlzaCBhcmUgb3VyIHRvcCBwcmlvcml0aWVzLiBXZSB0YWtlIHByaWRlIGluIHByb3ZpZGluZyBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQgd2lsbCBoYXZlIHlvdSBjb21pbmcgYmFjayBmb3IgbW9yZS48L3A+XG4gICAgXG4gICAgPHA+V2UgbG9vayBmb3J3YXJkIHRvIHdlbGNvbWluZyB5b3Ugc29vbiBhdCBDdWxpbmFyeSBPYXNpcyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBtZWFsIGluIGEgY296eSBhdG1vc3BoZXJlITwvcD5cbiAgYDtcbiAgICByZXR1cm4gdGV4dFxufSIsImltcG9ydCBzaG93SG9tZSBmcm9tIFwiLi9zaG93SG9tZS5qc1wiO1xuaW1wb3J0IHNob3dNZW51IGZyb20gXCIuL3Nob3dNZW51LmpzXCJcbmltcG9ydCBzaG93QWJvdXQgZnJvbSBcIi4vc2hvd0Fib3V0LmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYnRuLG5hbWUpe1xuXG4gICAgbGV0IG9wO1xuXG4gICAgc3dpdGNoIChuYW1lKXtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBvcCA9IHNob3dIb21lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgb3AgPSBzaG93TWVudTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBvcCA9IHNob3dBYm91dDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH07XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG9wKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihib2R5KXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdGcm9udC1lbmQgcHJvamVjdCBieSBNUGVudW51cmkuJztcbiAgICBib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJyxmb290ZXIpO1xufSIsImltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCIuL2FkZEV2ZW50TGlzdGVuZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYm9keSl7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsJ25hdicpO1xuICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJyxuYXZCYXIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTmFtZSdcbiAgICBib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsaGVhZGVyKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNOYW1lcyA9IFsnSG9tZScsJ01lbnUnLCdBYm91dCddO1xuXG4gICAgYnV0dG9uc05hbWVzLmZvckVhY2goKG5hbWUpID0+e1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihidG4sbmFtZSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xufTsiLCJpbXBvcnQgcmVtb3ZlQ2xhc3MgZnJvbSBcIi4vcmVtb3ZlQ2xhc3NcIjtcbmltcG9ydCByZW1vdmVDaGlsZEVsZW1lbnRzIGZyb20gXCIuL3JlbW92ZUNoaWxkRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmV3Q2xhc3MsY2xhc3NUb0RlbGV0ZTEsY2xhc3NUb0RlbGV0ZTIpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHJlbW92ZUNoaWxkRWxlbWVudHMoY29udGVudCk7XG4gICAgcmVtb3ZlQ2xhc3MoY29udGVudCxjbGFzc1RvRGVsZXRlMSk7XG4gICAgcmVtb3ZlQ2xhc3MoY29udGVudCxjbGFzc1RvRGVsZXRlMik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdmbGV4JywnY29sdW1uJywnY29udGVudCcsbmV3Q2xhc3MpO1xufSIsImNvbnN0IG1lbnUgPSBcbntcbiAgXCJkcmlua3NcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvY2EtQ29sYVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNsYXNzaWMgY29sYSBzb2RhLCB0aGUgcGVyZmVjdCB0aGlyc3QtcXVlbmNoZXIuXCIsXG4gICAgICBcInByaWNlXCI6IDIuOTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxlbW9uYWRlXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVmcmVzaGluZyBsZW1vbi1mbGF2b3JlZCBzb2RhLCBhIHplc3R5IGRlbGlnaHQuXCIsXG4gICAgICBcInByaWNlXCI6IDIuNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkljZWQgVGVhXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ2hpbGxlZCBhbmQgcmV2aXRhbGl6aW5nIGljZWQgdGVhIGZvciBhIGhvdCBkYXkuXCIsXG4gICAgICBcInByaWNlXCI6IDEuOTlcbiAgICB9XG4gICAgXSxcbiAgXCJhcHBldGl6ZXJzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDaGlja2VuIFdpbmdzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3Jpc3B5IGNoaWNrZW4gd2luZ3Mgc2VydmVkIHdpdGggc3BpY3kgZGlwcGluZyBzYXVjZS5cIixcbiAgICAgIFwicHJpY2VcIjogNi45OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTmFjaG9zIHdpdGggQ2hlZXNlXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3J1bmNoeSBuYWNob3MgY292ZXJlZCBpbiBtZWx0ZWQgY2hlZXNlLCBwZXJmZWN0IGZvciBzaGFyaW5nLlwiLFxuICAgICAgXCJwcmljZVwiOiA0Ljk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJPbmlvbiBSaW5nc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdvbGRlbiBhbmQgY3Jpc3B5IG9uaW9uIHJpbmdzLCBhIHNhdm9yeSBzbmFjay5cIixcbiAgICAgIFwicHJpY2VcIjogMy40OVxuICAgIH1cbiAgICBdLFxuICBcImJ1cmdlcnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNsYXNzaWMgQnVyZ2VyXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBqdWljeSBidXJnZXIgdG9wcGVkIHdpdGggbGV0dHVjZSwgdG9tYXRvLCBhbmQgY2hlZXNlLlwiLFxuICAgICAgXCJwcmljZVwiOiA1Ljk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJCQlEgQnVyZ2VyXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQnVyZ2VyIHdpdGggdGFuZ3kgQkJRIHNhdWNlIGFuZCBjcmlzcHkgZnJpZWQgb25pb25zLlwiLFxuICAgICAgXCJwcmljZVwiOiA2LjQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJWZWdldGFyaWFuIEJ1cmdlclwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNoaWNrcGVhIGFuZCB2ZWdldGFibGUgcGF0dHkgZm9yIGEgbWVhdGxlc3MgZGVsaWdodC5cIixcbiAgICAgIFwicHJpY2VcIjogNS40OVxuICAgIH1cbiAgICBdLFxuICBcImhvdGRvZ3NcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNsYXNzaWMgSG90ZG9nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2F1c2FnZSB3aXRoIG11c3RhcmQgYW5kIGtldGNodXAgaW4gYSBzb2Z0IGJ1bi5cIixcbiAgICAgIFwicHJpY2VcIjogMy45OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2hpbGkgQ2hlZXNlIERvZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhvdGRvZyBzbW90aGVyZWQgaW4gY2hpbGkgYW5kIG1lbHRlZCBjaGVlc2UuXCIsXG4gICAgICBcInByaWNlXCI6IDQuNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlZlZ2V0YXJpYW4gSG90ZG9nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVG9mdSBkb2cgd2l0aCBhIHZhcmlldHkgb2YgZnJlc2ggdG9wcGluZ3MuXCIsXG4gICAgICBcInByaWNlXCI6IDQuOTlcbiAgICB9XG4gICAgXSxcbiAgXCJwaXp6YXNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk1hcmdoZXJpdGEgUGl6emFcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQaXp6YSB3aXRoIHRvbWF0bywgbW96emFyZWxsYSwgYW5kIGJhc2lsIGxlYXZlcywgYSBjbGFzc2ljIGZhdm9yaXRlLlwiLFxuICAgICAgXCJwcmljZVwiOiA4Ljk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQZXBwZXJvbmkgUGl6emFcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQaXp6YSB0b3BwZWQgd2l0aCBwZXBwZXJvbmkgYW5kIGdvb2V5IGNoZWVzZS5cIixcbiAgICAgIFwicHJpY2VcIjogOS40OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVmVnZXRhcmlhbiBQaXp6YVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBpenphIGxvYWRlZCB3aXRoIG11c2hyb29tcywgcGVwcGVycywgYW5kIG9uaW9ucy5cIixcbiAgICAgIFwicHJpY2VcIjogOC40OVxuICAgIH1cbiAgICBdLFxuICAgIFwicGFzdGFcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNwYWdoZXR0aSB3aXRoIE1lYXRiYWxsc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwYWdoZXR0aSBhbmQgbWVhdGJhbGxzIHNlcnZlZCB3aXRoIG1hcmluYXJhIHNhdWNlLlwiLFxuICAgICAgXCJwcmljZVwiOiA3Ljk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGZXR0dWNjaW5lIEFsZnJlZG9cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDcmVhbXkgZmV0dHVjY2luZSBwYXN0YSB3aXRoIEFsZnJlZG8gc2F1Y2UuXCIsXG4gICAgICBcInByaWNlXCI6IDguNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlBhc3RhIFByaW1hdmVyYVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBhc3RhIHdpdGggbWl4ZWQgdmVnZXRhYmxlcyBhbmQgcGVzdG8gc2F1Y2UuXCIsXG4gICAgICBcInByaWNlXCI6IDcuNDlcbiAgICB9XG4gICAgXSxcbiAgICBcInNhbGFkc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQ2Flc2FyIFNhbGFkXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUm9tYWluZSBsZXR0dWNlLCBjcm91dG9ucywgYW5kIENhZXNhciBkcmVzc2luZy5cIixcbiAgICAgIFwicHJpY2VcIjogNS45OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiR3JpbGxlZCBDaGlja2VuIFNhbGFkXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2FsYWQgd2l0aCBncmlsbGVkIGNoaWNrZW4gYW5kIHJhbmNoIGRyZXNzaW5nLlwiLFxuICAgICAgXCJwcmljZVwiOiA2LjQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBdm9jYWRvIGFuZCBUb21hdG8gU2FsYWRcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTYWxhZCB3aXRoIGF2b2NhZG8sIHRvbWF0bywgYW5kIGJhbHNhbWljIHZpbmFpZ3JldHRlLlwiLFxuICAgICAgXCJwcmljZVwiOiA1LjQ5XG4gICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IHsgbWVudSB9O1xuICAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCxjbGFzc05hbWUpe1xuICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59IiwiaW1wb3J0IGRpc3BsYXlTZWN0aW9uIGZyb20gXCIuL2Rpc3BsYXlTZWN0aW9uXCI7XG5pbXBvcnQgYWJvdXRUZXh0IGZyb20gXCIuL2Fib3V0VGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICAgIFxuICAgIGRpc3BsYXlTZWN0aW9uKCdhYm91dCcsJ21lbnUnLCdob21lJyk7XG4gICAgXG4gICAgY29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFib3V0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SGVhZGVyJylcbiAgICBhYm91dEhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCB1cydcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dFRleHQnKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IGFib3V0VGV4dCgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG59IiwiaW1wb3J0IGRpc3BsYXlTZWN0aW9uIGZyb20gXCIuL2Rpc3BsYXlTZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgZGlzcGxheVNlY3Rpb24oJ2hvbWUnLCdtZW51JywnYWJvdXQnKTtcbiAgICBcbiAgICBjb25zdCBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZCgnZ3JlZXRpbmcnKVxuICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnQhJ1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGJ0bixwYXJlbnQsYXJyYXkpe1xuICAgIGlmKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZUNhdGVnb3JpZScpKXtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUNhdGVnb3JpZScpXG4gICAgICAgIHdoaWxlIChwYXJlbnQubGFzdENoaWxkICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVDYXRlZ29yaWUnKVxuICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbU5hbWUnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtRGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1QcmljZScpXG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTsgXG5cbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJpbXBvcnQgZGlzcGxheVNlY3Rpb24gZnJvbSBcIi4vZGlzcGxheVNlY3Rpb24uanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCBzaG93SXRlbXMgZnJvbSBcIi4vc2hvd0l0ZW1zLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgZGlzcGxheVNlY3Rpb24oJ21lbnUnLCdob21lJywnYWJvdXQnKTtcbiAgICBmb3IoY29uc3QgY2F0ZWdvcmllIGluIG1lbnUpe1xuICAgICAgICBsZXQgY2F0ZWdvcmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhdGVnb3JpZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4JywnY29sdW1uJywnbWVudUNhdGVnb3JpZScpO1xuXG4gICAgICAgIGxldCBkcm9wRG93bkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkcm9wRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdkcm9wRG93bkljb24nKTtcbiAgICAgICAgZHJvcERvd25CdG4udGV4dENvbnRlbnQgPSAnPiAnICsgY2F0ZWdvcmllO1xuICAgICAgICBkcm9wRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgc2hvd0l0ZW1zKGRyb3BEb3duQnRuLGNhdGVnb3JpZUNvbnRhaW5lcixtZW51W2NhdGVnb3JpZV0pXG4gICAgICAgIH0pXG4gICAgICAgIGNhdGVnb3JpZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wRG93bkJ0bik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYXRlZ29yaWVDb250YWluZXIpO1xuICAgIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFkZE5hdkJhciBmcm9tICcuL2FkZE5hdkJhci5qcyc7XG5pbXBvcnQgYWRkRm9vdGVyIGZyb20gJy4vYWRkRm9vdGVyLmpzJztcbmltcG9ydCBzaG93SG9tZSBmcm9tICcuL3Nob3dIb21lLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbmFkZE5hdkJhcihib2R5KTtcbnNob3dIb21lKCk7XG5hZGRGb290ZXIoYm9keSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9