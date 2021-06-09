(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function Component(name) {
  _classCallCheck(this, Component);

  this.name = name;
  this.html();

  var pushedThis = _objectSpread(_objectSpread({}, this), {}, {
    html: this.html()
  });

  window.Componenta.components.push(pushedThis);
};

module.exports = Component;

},{}],2:[function(require,module,exports){
"use strict";

module.exports = function (message) {
  if (window.Componenta.config.debug) {
    var _console;

    for (var _len = arguments.length, logargs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      logargs[_key - 1] = arguments[_key];
    }

    (_console = console).log.apply(_console, [message].concat(logargs));
  }
};

},{}],3:[function(require,module,exports){
"use strict";

var loadAllComponents = require("./loadAllComponents.js");

var Component = require("./component.js");

var Componenta = {
  "config": {},
  "components": [],
  Component: Component
};
window.Componenta = Componenta;
window.Component = Componenta.Component;

window.onload = function () {
  loadAllComponents();
};

},{"./component.js":1,"./loadAllComponents.js":4}],4:[function(require,module,exports){
"use strict";

var debug = require("./debug.js");

module.exports = function () {
  if (!window.Componenta) {
    throw new Error("Componenta is not initialized");
  }

  if (window.Componenta.components.length <= 0) {
    console.warn("[Componenta Warn] There are no components.");
    debug("[Componenta Tip] Create your components after loading the script.\nMake sure to not use async or defer scripts!");
    return false;
  }

  debug("[Debug] Component length is more than 0 and window.Componenta is initialized");
  window.Componenta.components.forEach(function (component) {
    debug("[Debug] Loaded component %s%o", component.name, component);
    document.querySelectorAll(component.name).forEach(function (element) {
      debug("[Debug] Found element for component%o", element);
      element.innerHTML = component.html;
      element.outerHTML = "<div class=\"".concat(component.name, "\">").concat(element.innerHTML, "</div>");
      debug("[Debug] Successfully added component %s to DOM", component.name);
    });
  });
};

},{"./debug.js":2}]},{},[3]);
