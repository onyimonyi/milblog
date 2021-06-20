/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./armydotmil.github.io/_js/header.js":
/*!********************************************!*\
  !*** ./armydotmil.github.io/_js/header.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global document, require*/
var Header = __webpack_require__(/*! ./modules/Header */ "./armydotmil.github.io/_js/modules/Header.js");

var ScrollNav = __webpack_require__(/*! ./modules/ScrollNav */ "./armydotmil.github.io/_js/modules/ScrollNav.js");

(function () {
  'use strict';

  var navbar = document.getElementsByClassName('navbar')[0].parentNode;
  new Header('menu');
  new Header('search');
  new ScrollNav(navbar, 150);
})();

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/CustomSelect.js":
/*!**********************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/CustomSelect.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*global document,window, init, require, class*/

/*jshint -W032 */

/* ignore unnecessary semicolon */
var Helper = __webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js");

var CustomSelect = /*#__PURE__*/function () {
  function CustomSelect(el) {
    _classCallCheck(this, CustomSelect);

    this.cselect = el;
    this.opened = false; // overlay spans the select box (prevents direct click on select)

    this.createOverlayElement(); // optionBox is the custom popup with select options

    this.createOptionsElement();
    document.body.addEventListener('click', this.hideOptions.bind(this));
  }

  _createClass(CustomSelect, [{
    key: "toggleOptions",
    value: function toggleOptions() {
      if (!this.opened) {
        this.opened = true;
      } else {
        this.opened = false;
      }

      Helper.toggleClass(this.cselect, 'show-options');
    }
  }, {
    key: "hideOptions",
    value: function hideOptions(e) {
      if (this.opened && e.target.className !== 'custom-overlay') {
        Helper.removeClass(this.cselect, 'show-options');
        this.opened = false;
      }
    }
  }, {
    key: "createOverlayElement",
    value: function createOverlayElement() {
      var overlay = document.createElement('div');
      overlay.setAttribute('class', 'custom-overlay');
      overlay.addEventListener('click', this.toggleOptions.bind(this));
      this.cselect.appendChild(overlay);
    }
  }, {
    key: "createOptionsElement",
    value: function createOptionsElement() {
      var evt = document.createEvent('HTMLEvents'),
          select = this.cselect.getElementsByTagName('select')[0],
          options = this.cselect.getElementsByTagName('option'),
          optionBox = document.createElement('div'),
          optionUl = document.createElement('ul'),
          optionLi,
          i;
      optionBox.setAttribute('class', 'custom-options');
      optionBox.appendChild(optionUl);

      for (i = 0; i < options.length; i++) {
        optionLi = document.createElement('li');
        optionLi.setAttribute('data-value', options[i].value);
        optionLi.setAttribute('class', 'custom-select-option');
        optionLi.innerHTML = options[i].textContent;
        optionLi.addEventListener('click', function () {
          evt.initEvent('change', false, true);
          select.value = this.getAttribute("data-value");
          select.dispatchEvent(evt);
        });
        optionUl.appendChild(optionLi);
      }

      this.cselect.appendChild(optionBox);
    }
  }]);

  return CustomSelect;
}();

;
var _default = CustomSelect;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/Header.js":
/*!****************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/Header.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint -W032 */

/* ignore unnecessary semicolon */
var Helper = __webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js");

var Header = /*#__PURE__*/function () {
  function Header(section) {
    _classCallCheck(this, Header);

    //This is for main navbar
    this.section = section;
    this.sectionBtn = document.getElementsByClassName(section + '-button')[0];
    this.sectionWin = document.getElementsByClassName(section + '-window')[0];
    this.headerElem = document.getElementsByTagName('header')[0];
    this.navbtns = document.getElementsByClassName('nav-button');
    this.navwins = document.getElementsByClassName('nav-window');
    this.sectionBtn.addEventListener('click', this.toggleNavOption.bind(this), false); // uncheck boxes on refresh

    var checkboxes = this.headerElem.querySelectorAll('input[type=checkbox]:checked'),
        i = 0,
        len;

    for (i, len = checkboxes.length; i < len; i++) {
      checkboxes[i].checked = false;
    }
  }

  _createClass(Header, [{
    key: "toggleNavOption",
    value: function toggleNavOption() {
      var body = document.getElementsByTagName('body')[0],
          html = document.getElementsByTagName('html')[0],
          i = 0,
          secClass = this.sectionBtn.className,
          sectionOpen = secClass.indexOf('close-button') === -1;

      for (i = 0; i < this.navbtns.length; i++) {
        Helper.removeClass(this.navbtns[i], 'close-button');
        Helper.removeClass(this.navwins[i], 'open-window');
        this.navbtns[i].setAttribute('aria-expanded', 'false');
        Helper.removeClass(html, 'menu-open');
        Helper.removeClass(body, 'menu-open');
      }

      if (sectionOpen) {
        Helper.addClass(this.sectionBtn, 'close-button');
        Helper.addClass(this.sectionWin, 'open-window');
        this.sectionBtn.setAttribute('aria-expanded', 'true');

        if (this.section === 'search') {
          document.getElementById('usagov-search-query').focus();
        } else {
          Helper.addClass(html, 'menu-open');
          Helper.addClass(body, 'menu-open');
        }
      }
    }
  }]);

  return Header;
}();

;
var _default = Header;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/Helper.js":
/*!****************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/Helper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint -W032 */

/* ignore unnecessary semicolon */
var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "hasClass",
    value: function hasClass(el, className) {
      if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  }, {
    key: "addClass",
    value: function addClass(el, className) {
      if (el.classList) el.classList.add(className);else if (!this.hasClass(el, className)) el.className += ' ' + className;
    }
  }, {
    key: "removeClass",
    value: function removeClass(el, className) {
      if (el.classList) el.classList.remove(className);else if (this.hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
      }
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(el, className) {
      if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
    }
  }, {
    key: "randomNumberToken",
    value: function randomNumberToken() {
      return new Date().valueOf();
    }
  }]);

  return Helper;
}();

;
var _default = Helper;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/ParallaxImage.js":
/*!***********************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/ParallaxImage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint -W032 */

/* ignore unnecessary semicolon */
var Helper = __webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js");
/**
 * Parallax image
 */


var FullWidthParallax = /*#__PURE__*/function () {
  /*
   * Creates FullWidthParallax object
   * @param {obj} elem - parallax container object
   */
  function FullWidthParallax(elem, topMargin) {
    _classCallCheck(this, FullWidthParallax);

    var context = this,
        fwi;
    this.imgCont = elem;
    fwi = elem.getElementsByClassName('full-width-image');
    this.img = fwi.length ? fwi[0].getElementsByTagName('img') : [];
    this.topVal = 0;
    this.longPage = false;
    this.isBanner = Helper.hasClass(elem, 'page-banner');
    this.toTop = Helper.hasClass(elem, 'image-to-top');
    this.centered = 0;

    if (this.img.length) {
      // there are images, so set as first
      this.img = this.img[0];
      this.scrollPos = -1;
      this.topMargin = topMargin ? topMargin : 0;
      window.addEventListener('scroll', function () {
        context.runOnScroll();
      });
      window.addEventListener('resize', function () {
        context.runOnResize();
      });
      this.img.addEventListener('load', function () {
        context.runOnResize();
      });
      this.runOnResize();
    }
  }
  /**
   * Get updated window dimensions and update right column box if switched
   * between desktop and mobile
   */


  _createClass(FullWidthParallax, [{
    key: "runOnResize",
    value: function runOnResize() {
      var de = document.documentElement,
          maxPos,
          absTop,
          minTop;
      this.imgH = this.img.clientHeight;
      this.contH = this.imgCont.clientHeight;
      this.centered = Math.round(this.imgH - this.contH) / -2;
      this.winW = Math.max(de.clientWidth, window.innerWidth || 0);
      this.winH = Math.max(de.clientHeight, window.innerHeight || 0);

      if (this.toTop || !this.isBanner || this.centered >= 0) {
        this.centered = 0;
      } // if desktop size and container visible


      if (this.winW > 769 && this.contH > 0) {
        // top position of container, when touching bottom of viewport
        maxPos = this.winH - this.contH; // top position of image within container at lowest point

        absTop = Math.round((this.topMargin - maxPos) / 2); // lowest value for top of image

        minTop = this.contH - this.imgH; // image does not stay within bounds, with standard
        // calculation (taller viewport)

        this.longPage = absTop < minTop;
        this.runOnScroll(); // if mobile size reset image to top
      } else if (this.topVal !== this.centered && this.contH > 0) {
        this.img.style.top = this.centered + 'px';
        this.topVal = this.centered;
      }
    }
    /*
     * Called using onscroll event
     * Checks if scrolled up or down, then calls setPosition
     */

  }, {
    key: "runOnScroll",
    value: function runOnScroll() {
      var viewPos = this.imgCont.getBoundingClientRect(),
          imgContPos = this.topMargin - viewPos.top,
          imgTop = Math.round(imgContPos / 2),
          minView = this.winH - viewPos.top,
          pPos,
          minPos,
          minTop = this.contH - this.imgH,
          percent; // do nothing if it's a smaller window or not in view

      if (this.winW > 769 && minView > 0 && imgContPos <= this.contH) {
        if (this.longPage && !this.isBanner) {
          // percent container has moved within viewport
          // (between top margin and bottom of screen)
          percent = (viewPos.top - this.topMargin) * 100;
          percent = percent / (this.winH - this.contH - this.topMargin); // apply percent to top position of image
          // (based on min top value)

          imgTop = percent * (this.contH - this.imgH) / 100;
        } else if (this.isBanner) {
          pPos = window.pageYOffset || document.documentElement.scrollTop;
          minPos = this.topMargin - (pPos + viewPos.top);
          imgTop -= Math.round(minPos / 2);
        }

        imgTop += this.centered;
        imgTop = imgTop < this.centered && this.isBanner ? this.centered : imgTop;
        this.img.style.top = imgTop + 'px';
        this.topVal = imgTop;
      } else if (this.topVal !== this.centered) {
        this.img.style.top = this.centered + 'px';
        this.topVal = this.centered;
      }
    }
  }, {
    key: "updateParallax",
    value: function updateParallax() {
      this.runOnResize();
    }
  }]);

  return FullWidthParallax;
}();

;

var ParallaxImage = /*#__PURE__*/function () {
  /*
   * Creates FullWidthParallax object(s)
   * @param {int} topMargin - margin to top of full width image object
   */
  function ParallaxImage(topMargin) {
    _classCallCheck(this, ParallaxImage);

    var banners = document.getElementsByClassName('parallax-image'),
        i;
    this.parallaxes = [];

    for (i = 0; i < banners.length; i++) {
      this.parallaxes.push(new FullWidthParallax(banners[i], topMargin));
    }
  }

  _createClass(ParallaxImage, [{
    key: "runUpdate",
    value: function runUpdate() {
      var i;

      for (i = 0; i < this.parallaxes.length; i++) {
        this.parallaxes[i].updateParallax();
      }
    }
  }]);

  return ParallaxImage;
}();

;
var _default = ParallaxImage;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/ScrollNav.js":
/*!*******************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/ScrollNav.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint -W032 */

/* ignore unnecessary semicolon */
var Helper = __webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js");
/**
 * Toggle class name on element as user scrolls page
 */


var ScrollNav = /*#__PURE__*/function () {
  /**
   * elem {obj}           - DOM element to add scroll class to
   * minTop {int}         - minimum px distance from top of page to start
                            adding scroll class
   */
  function ScrollNav(elem, minTop) {
    _classCallCheck(this, ScrollNav);

    this.navElem = elem; // window.pageYOffset for all browsers, except IE9 and lower

    this.scrollPos = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop;
    this.minTop = !minTop ? 0 : minTop;
    this.minScroll = 25; // minimum scrolling distance before transitioning

    window.addEventListener('scroll', this.runOnScroll.bind(this));
    this.runOnScroll(this);
  }

  _createClass(ScrollNav, [{
    key: "runOnScroll",
    value: function runOnScroll(e) {
      var newPos = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop,
          navOpen = document.getElementsByClassName('open-window');

      if (!navOpen.length) {
        // scrolling down
        if (this.scrollPos + this.minScroll <= newPos && newPos > this.minTop) {
          Helper.addClass(this.navElem, 'scrolled-down');
          this.scrollPos = newPos; // scrolling up
        } else if (this.scrollPos - this.minScroll >= newPos) {
          Helper.removeClass(this.navElem, 'scrolled-down');
          this.scrollPos = newPos;
        }
      }
    }
  }]);

  return ScrollNav;
}();

;
var _default = ScrollNav;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/Validity.js":
/*!******************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/Validity.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint esversion: 6 */

/* ignore unnecessary semicolon */

/*global require*/
var Helper = __webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js");

var Validity = /*#__PURE__*/function () {
  function Validity(form) {
    var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var normalSubmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Validity);

    var i = 0,
        len,
        $this = this;
    $this.validationFn = typeof form.checkValidity === 'function' ? function (el) {
      return el.checkValidity();
    } : function (el) {
      return $this.isValid(el);
    };

    for (i = 0, len = form.elements.length; i < len; i++) {
      $this.validateOnBlur(form.elements[i]);
    }

    form.validate = function () {
      var j = 0,
          invalid = 0,
          len; // check all items once more on submit

      for (j = 0, len = this.elements.length; j < len; j++) {
        if (!$this.markField($this.validationFn(this.elements[j]), this.elements[j])) invalid++;
      }

      if (invalid > 0) return false; // if you've gotten to this point, the form is good to go

      if (normalSubmit) this.submit();else return true;
    };

    form.onsubmit = submit || function () {
      if (!this.validate()) return false;
    };
  }

  _createClass(Validity, [{
    key: "validateOnBlur",
    value: function validateOnBlur(el) {
      var $this = this;

      if (el.getAttribute('type') === 'checkbox') {
        el.addEventListener('click', function () {
          $this.markField($this.validationFn(this), this);
        }, false);
      } else {
        el.addEventListener('blur', function () {
          if (!Helper.hasClass(this, 'no-validate')) $this.markField($this.validationFn(this), this);
        }, false);
      }
    }
  }, {
    key: "markField",
    value: function markField(valid, el) {
      if (!valid) {
        el.setCustomValidity('');
        Helper.addClass(el, 'invalid');
        return false;
      } else {
        if (Helper.hasClass(el, 'invalid')) Helper.removeClass(el, 'invalid');
      }

      return true;
    }
  }, {
    key: "isValid",
    value: function isValid(el) {
      if (el.getAttribute('type') === 'email') {
        return !this.isEmpty(el) && this.validateEmail(el) && !this.isPlaceholder(el);
      } else if (el.getAttribute('type') === 'tel') {
        return !this.isEmpty(el) && this.validatePhone(el) && !this.isPlaceholder(el);
      } else if (el.getAttribute('type') === 'url') {
        return !this.isEmpty(el) && this.validateUrl(el) && !this.isPlaceholder(el);
      } else if (el.getAttribute('type') === 'checkbox') {
        return this.validateCheckbox(el);
      } else {
        return !this.isEmpty(el) && !this.isPlaceholder(el);
      }
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(el) {
      // http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
      return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(el.value);
    }
  }, {
    key: "validatePhone",
    value: function validatePhone(el) {
      return /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/.test(el.value);
    }
  }, {
    key: "validateUrl",
    value: function validateUrl(el) {
      // custom URL validation... more flexible, more accurate
      return /^(https?:\/\/)?(\w+(-\w+)*\.){2,}[a-z]{2,}(:[0-9]+)?(\/[\w\-]+)*(\/([\w\-\x40$\.\x2B!*\x27(),]|(%[A-Z0-9]{2}))+)?((\.[a-z]{2,})|\/)?((\?[\w\-]+=([\w\-\x40$\.\x2B!*\x27(),]|(%[A-Z0-9]{2}))+)(\x26[\w\-]+=([\w\-\x40$\.\x2B!*\x27(),]|(%[A-Z0-9]{2}))+)*)?(#([\w\-\x40$\.\x2B!*\x27(),]|(%[A-Z0-9]{2}))+)?$/gi.test(el.value);
    }
  }, {
    key: "validateCheckbox",
    value: function validateCheckbox(el) {
      return el.checked;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(el) {
      return el.value.length === 0 || !el.value.trim();
    }
  }, {
    key: "isPlaceholder",
    value: function isPlaceholder(el) {
      return el.getAttribute('placeholder') && el.value === el.getAttribute('placeholder');
    }
  }]);

  return Validity;
}();

;
var _default = Validity;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/contact.js":
/*!*********************************!*\
  !*** ./resources/js/contact.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global require,document*/
var CustomSelect = __webpack_require__(/*! ./globals/modules/CustomSelect */ "./armydotmil.github.io/_js/modules/CustomSelect.js"),
    ParallaxImg = __webpack_require__(/*! ./globals/modules/ParallaxImage */ "./armydotmil.github.io/_js/modules/ParallaxImage.js"),
    Helper = __webpack_require__(/*! ./globals/modules/Helper */ "./armydotmil.github.io/_js/modules/Helper.js"),
    Validity = __webpack_require__(/*! ./globals/modules/Validity */ "./armydotmil.github.io/_js/modules/Validity.js");

(function () {
  'use strict';

  var form,
      inputs,
      commentTypeElem,
      header = document.getElementsByClassName('navbar'),
      headerHeight = header.length ? header[0].clientHeight : 0;
  new ParallaxImg(headerHeight);

  function addHttpOnBlur(el) {
    el.addEventListener('blur', function () {
      if (!/^(https?|s?ftp):\/\//i.test(this.value) && this.value.length > 0) this.value = 'http://' + this.value;
    }, false);
  }

  function showReasonInputs(type) {
    var conditionals = document.getElementsByClassName('conditional-input'),
        i = 0,
        j = 0,
        len,
        reasons = document.getElementsByClassName('reason-inputs'),
        selectedInputs,
        selectedType = document.getElementById(type),
        x = 0; // Set Required to False to avoid validation issues.

    for (i, len = conditionals.length; i < len; i++) {
      conditionals[i].removeAttribute('required');
      Helper.addClass(conditionals[i], 'no-validate');
    }

    for (j, len = reasons.length; j < len; j++) {
      reasons[j].style.display = 'none';
    }

    selectedType.style.display = 'block';
    selectedInputs = selectedType.getElementsByClassName('conditional-input');

    for (x, len = selectedInputs.length; x < len; x++) {
      selectedInputs[x].required = true;
      Helper.removeClass(selectedInputs[x], 'no-validate');
    }
  }

  function placeholderSupport(el) {
    return 'placeholder' in el;
  }

  function addPlaceholder(el) {
    var p = el.getAttribute('placeholder');
    el.value = p;
    el.addEventListener('click', function () {
      if (this.value === p) this.value = '';
    }, false);
    el.addEventListener('blur', function () {
      if (this.value === '') this.value = p;
    }, false);
  }

  if (document.getElementsByClassName('contact-us-form').length) {
    form = document.forms['contact-form'];
    inputs = form.elements;
    form.addEventListener('submit', function (e) {
      var response = grecaptcha.getResponse();
      document.getElementById('g-recaptcha-error').innerText = '';

      if (response.length === 0) {
        document.getElementById('g-recaptcha-error').innerText = 'This field is required.';
        e.preventDefault();
        return false;
      }
    });
    commentTypeElem = document.getElementById('comment-type'); // initialize comment selection

    showReasonInputs(commentTypeElem.value);

    commentTypeElem.onchange = function () {
      showReasonInputs(this.value);
    };

    for (var i = 0, len = inputs.length; i < len; i++) {
      if (inputs[i].getAttribute('type') === 'url') addHttpOnBlur(inputs[i]);

      if (inputs[i].getAttribute('placeholder') && !placeholderSupport(inputs[i])) {
        addPlaceholder(inputs[i]);
      }
    }

    new Validity(form);
    new CustomSelect(document.getElementsByClassName('custom-select')[0]);
  }
})();

/***/ }),

/***/ 6:
/*!************************************************************************!*\
  !*** multi ./resources/js/globals/header.js ./resources/js/contact.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/iancollins/Documents/core/ocpa/ocpa-home/trunk/web/us-army-homepage/resources/js/globals/header.js */"./armydotmil.github.io/_js/header.js");
module.exports = __webpack_require__(/*! /Users/iancollins/Documents/core/ocpa/ocpa-home/trunk/web/us-army-homepage/resources/js/contact.js */"./resources/js/contact.js");


/***/ })

/******/ });