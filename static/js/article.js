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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./armydotmil.github.io/_js/modules/PhotoSlideshow.js":
/*!************************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/PhotoSlideshow.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Helper = _interopRequireDefault(__webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PhotoSlideshow = /*#__PURE__*/function () {
  function PhotoSlideshow() {
    _classCallCheck(this, PhotoSlideshow);

    var slideshows = document.getElementsByClassName('photo-slideshow'),
        i;

    for (i = 0; i < slideshows.length; i++) {
      this.addClicks(slideshows[i]);
    }
  }

  _createClass(PhotoSlideshow, [{
    key: "toggleCaption",
    value: function toggleCaption(el, ss) {
      if (!_Helper["default"].hasClass(el, 'has-click')) {
        el.addEventListener('click', function () {
          _Helper["default"].toggleClass(ss, 'show-captions');
        }, false);

        _Helper["default"].addClass(el, 'has-click');
      }
    }
  }, {
    key: "navigateSlideshow",
    value: function navigateSlideshow(el, p, ss) {
      if (!_Helper["default"].hasClass(el, 'has-click')) {
        el.addEventListener('click', function () {
          _Helper["default"].removeClass(p[ss.curPos], 'cur-photo');

          if (_Helper["default"].hasClass(this, 'ss-next')) {
            ss.curPos++;
          } else {
            ss.curPos--;
          }

          if (ss.curPos < 0) ss.curPos = p.length - 1;
          if (ss.curPos >= p.length) ss.curPos = 0;

          _Helper["default"].addClass(p[ss.curPos], 'cur-photo');
        }, false);

        _Helper["default"].addClass(el, 'has-click');
      }
    }
  }, {
    key: "addClicks",
    value: function addClicks(ss) {
      var captionBtn = ss.getElementsByClassName('image-caption-button'),
          moveBtn = ss.getElementsByClassName('ss-move'),
          photos = ss.getElementsByClassName('photo'),
          context = this,
          i,
          j;
      /*
       * save curPos value to slideshow object
       * allows us to have multiple slideshows
       * on one page if its ever necessary
       */

      ss.curPos = 0; // click event for caption toggle

      for (i = 0; i < captionBtn.length; i++) {
        context.toggleCaption(captionBtn[i], ss);
      } // click event for prev/next navigation


      for (j = 0; j < moveBtn.length; j++) {
        context.navigateSlideshow(moveBtn[j], photos, ss);
      }
    }
  }]);

  return PhotoSlideshow;
}();

;
var _default = PhotoSlideshow;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./armydotmil.github.io/_js/modules/Playlist.js":
/*!******************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/Playlist.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Helper = _interopRequireDefault(__webpack_require__(/*! ./Helper */ "./armydotmil.github.io/_js/modules/Helper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var youtube = __webpack_require__(/*! youtube-iframe-player */ "./node_modules/youtube-iframe-player/index.js");

var Playlist = /*#__PURE__*/function () {
  function Playlist(context) {
    _classCallCheck(this, Playlist);

    this.domContext = context || document;
    this.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    this.ytPlayers = {};
    this.resetToggles();
  }

  _createClass(Playlist, [{
    key: "resetToggles",
    value: function resetToggles() {
      var _this = this,
          toggles,
          i,
          plHeader;

      plHeader = this.domContext.getElementsByClassName('playlist-info');
      toggles = this.domContext.getElementsByClassName('playlist-toggle');

      for (i = 0; i < plHeader.length; i++) {
        if (!_Helper["default"].hasClass(plHeader[i], 'enable-playlist')) {
          plHeader[i].addEventListener('click', function () {
            _this.toggle(this.parentNode.parentNode);
          }, false);

          _Helper["default"].addClass(plHeader[i], 'enable-playlist');
        }
      }

      for (i = 0; i < toggles.length; i++) {
        if (!_Helper["default"].hasClass(toggles[i], 'enable-playlist')) {
          toggles[i].addEventListener('click', function () {
            _this.toggle(this.parentNode.parentNode);
          }, false);

          _Helper["default"].addClass(toggles[i], 'enable-playlist');
        }
      }
    }
  }, {
    key: "toggle",
    value: function toggle(list) {
      if (_Helper["default"].hasClass(list, 'open-playlist')) {
        _Helper["default"].removeClass(list, 'open-playlist');
      } else {
        _Helper["default"].addClass(list, 'open-playlist');
      }
    }
  }, {
    key: "setYTPlayer",
    value: function setYTPlayer(elem) {
      var ytPlayer = elem.getElementsByClassName('ytPlayer'),
          playerId = null,
          videoList,
          ytid,
          isPlaylist,
          isCustomList,
          vidObj,
          _this = this;

      if (ytPlayer.length > 0) {
        playerId = ytPlayer[0].getAttribute('id');
      } // only continue if the player does not have an Id already


      if (!playerId && ytPlayer.length > 0) {
        ytPlayer = ytPlayer[0];
        videoList = elem.getElementsByClassName('videos');
        playerId = 'ytPlayer' + _Helper["default"].randomNumberToken();
        ytid = ytPlayer.getAttribute('data-ytid');
        isPlaylist = ytPlayer.hasAttribute('data-playlist');
        isCustomList = videoList.length;
        vidObj = {
          width: '560',
          height: '315'
        };
        vidObj.playerVars = {
          'autoplay': 0,
          'controls': 1,
          'modestbranding': 1,
          'rel': 0,
          'wmode': 'opaque'
        };

        if (!isPlaylist) {
          vidObj.videoId = ytid;
        } else {
          vidObj.playerVars.listType = 'playlist';
          vidObj.playerVars.list = ytid;
        }

        if (isCustomList) {
          vidObj.events = {
            'onReady': function onReady(e) {
              _this.playerReady(e, _this);
            },
            'onStateChange': function onStateChange(e) {
              _this.playerStateChange(e, _this);
            }
          };
          vidObj.playerVars.showinfo = 0;
        } // create the actual player and store playlist reference


        this.ytPlayers[playerId] = elem;
        ytPlayer.setAttribute('id', playerId);
        youtube.createPlayer(playerId, vidObj);
      }
    }
  }, {
    key: "resetYTPlayer",
    value: function resetYTPlayer() {
      this.resetToggles();
      this.loadYTPlayer();
    }
  }, {
    key: "loadYTPlayer",
    value: function loadYTPlayer() {
      var _this = this;

      if (this.domContext.getElementsByClassName('ytPlayer').length) {
        youtube.init(function () {
          _this.loadYTPlayers();
        });
      }
    }
  }, {
    key: "loadYTPlayers",
    value: function loadYTPlayers() {
      var plElems = this.domContext.getElementsByClassName('playlist'),
          i;

      for (i = 0; i < plElems.length; i++) {
        this.setYTPlayer(plElems[i]);
      }
    }
  }, {
    key: "playerReady",
    value: function playerReady(event, context) {
      var videoData = event.target.getIframe(),
          key = videoData.id,
          videos = context.ytPlayers[key].querySelectorAll('.videos .video-item');

      _Helper["default"].addClass(context.ytPlayers[key], 'playlist-ready');

      [].map.call(videos, function (elem) {
        elem.addEventListener('click', function () {
          if (!_Helper["default"].hasClass(this, 'active')) {
            context.selectVideo(event, this, context.ytPlayers[key]);
          } else if (!context.iOS) {
            context.toggleVideo(event.target);
          }
        }, false);
      });
    }
  }, {
    key: "toggleVideo",
    value: function toggleVideo(vid) {
      if (vid.getPlayerState() === 1) {
        vid.pauseVideo();
      } else {
        vid.playVideo();
      }
    }
  }, {
    key: "selectVideo",
    value: function selectVideo(event, vidItem, plElement) {
      var index = 0,
          videos = plElement.querySelectorAll('.videos .video-item'),
          vidCounter = plElement.querySelectorAll('.sel-vid-index'),
          thisytid = vidItem.dataset ? vidItem.dataset.ytid : vidItem.getAttribute('data-ytid');
      [].map.call(videos, function (elem) {
        _Helper["default"].removeClass(elem, 'active');
      });

      _Helper["default"].addClass(vidItem, 'active'); // this is for showing a 5/33 type of counter...


      if (vidCounter.length) {
        index = Array.prototype.indexOf.call(videos, vidItem);
        vidCounter[0].innerHTML = index + 1;
      }

      if (this.iOS) {
        event.target.cueVideoById(thisytid);
      } else {
        event.target.loadVideoById(thisytid);
      }

      this.scrollToVideo(plElement);
    }
  }, {
    key: "playerStateChange",
    value: function playerStateChange(event, context) {
      var videoData = event.target.getIframe(),
          key = videoData.id,
          current = context.ytPlayers[key].getElementsByClassName('active')[0],
          nextVid; // if playing...

      if (event.data == 1) {
        _Helper["default"].addClass(current, 'playing');
      } else {
        _Helper["default"].removeClass(current, 'playing');
      } // if video finishes, auto-progress to next video...


      if (event.data == 0) {
        nextVid = current.nextElementSibling;

        if (nextVid && _Helper["default"].hasClass(nextVid, 'video-item')) {
          context.selectVideo(event, nextVid, context.ytPlayers[key]);
        }
      }
    }
  }, {
    key: "scrollToVideo",
    value: function scrollToVideo(vidObj) {
      var vidPos = vidObj.getBoundingClientRect(),
          doc = document.documentElement,
          top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
          header = document.getElementsByTagName('header')[0],
          diff;

      if (vidPos.top - 15 < 0) {
        diff = parseInt(header.offsetHeight + 15 - vidPos.top) * -1;
        window.scrollBy(0, diff);
      }
    }
  }]);

  return Playlist;
}();

;
var _default = Playlist;
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

/***/ "./armydotmil.github.io/_js/modules/TwoColumnBody.js":
/*!***********************************************************!*\
  !*** ./armydotmil.github.io/_js/modules/TwoColumnBody.js ***!
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

/**
 * Maintain position of box in right column
 * as you scroll to the bottom, the box needs to stay within
 * the main content container aka show above the footer
 */
var ScrollRightColumn = /*#__PURE__*/function () {
  /*
   * Creates ScrollRightColumn object
   * @param {obj} mainCont - container object of two-column-body
   * @param {int} margin - top and bottom margin to edge of screen
   * @param {int} topMargin - overrides default top margin
   */
  function ScrollRightColumn(mainCont, margin, topMargin) {
    _classCallCheck(this, ScrollRightColumn);

    var context = this;
    this.rightCol = mainCont.getElementsByClassName('right-column');

    if (this.rightCol.length) {
      this.scrollPos = -1;
      this.innerTop = -1;
      this.mobile = true;
      this.rightCol = this.rightCol[0];
      this.inner = this.rightCol.firstElementChild;
      this.margin = margin ? margin : 20;
      this.topMargin = topMargin ? topMargin : this.margin;
      this.positionVal = 'none';
      this.winH = 0;
      this.noScroll = false;
      this.hold = false;
      window.addEventListener('scroll', function () {
        context.runOnScroll();
      });
      window.addEventListener('resize', function () {
        context.runOnResize();
      });
      this.runOnResize();
    }
  }
  /**
   * Get updated window dimensions and update right column box if switched
   * between desktop and mobile
   */


  _createClass(ScrollRightColumn, [{
    key: "runOnResize",
    value: function runOnResize() {
      var totHeight = this.inner.clientHeight + this.topMargin + this.margin,
          docElem = document.documentElement;
      this.winW = Math.max(docElem.clientWidth, window.innerWidth || 0);
      this.winH = Math.max(docElem.clientHeight, window.innerHeight || 0); // if desktop size

      if (this.winW > 992) {
        this.noScroll = this.winH - totHeight >= 0; // if switching from mobile or positioned on bottom

        if (this.mobile || this.positionVal === 'bottom') {
          this.mobile = false;
          this.innerTop = -1;
          this.hold = false;
          this.runOnScroll();
        } // if mobile size position is static

      } else {
        this.mobile = true;

        if (this.inner.style.position !== 'static') {
          this.inner.style.position = 'static';
        }
      }
    }
    /*
     * Called using onscroll event
     * Checks if scrolled up or down, then calls setPosition
     */

  }, {
    key: "runOnScroll",
    value: function runOnScroll() {
      var d = document,
          bodyElem = d.getElementsByTagName('body')[0],
          scrolledAmt = bodyElem.scrollTop || d.documentElement.scrollTop,
          scrollDown = scrolledAmt > this.scrollPos;
      this.scrollPos = scrolledAmt;
      this.setPosition(scrollDown);
    }
    /*
     * Sets the top position of the right column inner element
     * @param {bool} scrollDown - is scrolling down
     */

  }, {
    key: "setPosition",
    value: function setPosition(scrollDown) {
      var position = this.rightCol.getBoundingClientRect(),
          innerHeight = this.inner.clientHeight,
          adjustTop = this.topMargin - position.top,
          adjustBottom = this.winH - this.margin - innerHeight - position.top,
          max = !scrollDown || this.innerTop === -1 || this.noScroll ? adjustTop : adjustBottom;
      max += innerHeight; // above the point of transitioning to sticky

      if (position.top > this.topMargin || this.winW <= 992) {
        this.holdStatic(); // if box is at lowest point
      } else if (max >= this.rightCol.clientHeight) {
        this.maxBottom(adjustTop); // if box fits in viewport
      } else if (this.noScroll) {
        if (this.innerTop === -1) this.hold = true;
        this.fixedTop(adjustTop);
      } else {
        // initialize box to top position
        if (this.innerTop === -1) {
          this.hold = true;
          this.fixedTop(adjustTop); // scrolling down page
        } else if (scrollDown) {
          // box scrolled down to lower margin
          if (adjustBottom >= this.innerTop) {
            this.fixedBottom(adjustBottom);
          } else {
            this.absoluteTop(adjustTop);
          } // scrolling up page

        } else {
          // box scrolled up to top margin
          if (this.innerTop >= adjustTop) {
            this.fixedTop(adjustTop);
          } else {
            this.absoluteBottom(adjustBottom);
          }
        }
      }
    }
    /*
     * Holds the position as static
     */

  }, {
    key: "holdStatic",
    value: function holdStatic() {
      if (this.innerTop !== 0 || !this.hold) {
        this.inner.style.position = 'static';
        this.positionVal = 'top';
        this.innerTop = 0;
        this.hold = true;
      }
    }
    /*
     * Positions at very bottom of right column
     * @param {int} adjustTop - pixel amount from top of right column
     */

  }, {
    key: "maxBottom",
    value: function maxBottom(adjustTop) {
      this.innerTop = adjustTop;

      if (!this.hold) {
        this.inner.style.position = 'absolute';
        this.positionVal = 'max';
        this.inner.style.top = 'auto';
        this.inner.style.bottom = '0px';
        this.hold = true;
      }
    }
    /*
     * Fixed position to topMargin
     * @param {int} adjustTop - pixel amount from top of right column
     */

  }, {
    key: "fixedTop",
    value: function fixedTop(adjustTop) {
      this.innerTop = adjustTop;

      if (this.hold) {
        this.inner.style.position = 'fixed';
        this.positionVal = 'top';
        this.inner.style.top = this.topMargin + 'px';
        this.inner.style.bottom = 'auto';
        this.hold = false;
      }
    }
    /*
     * Fixed position to bottom margin
     * @param {int} adjustBottom - pixel amount from top of right column,
     * when the box is at bottom margin
     */

  }, {
    key: "fixedBottom",
    value: function fixedBottom(adjustBottom) {
      this.innerTop = adjustBottom;

      if (this.hold) {
        this.inner.style.position = 'fixed';
        this.positionVal = 'bottom';
        this.inner.style.top = 'auto';
        this.inner.style.bottom = this.margin + 'px';
        this.hold = false;
      }
    }
    /*
     * Absolute position at current value and hold
     * @param {int} adjustTop - pixel amount from top of right column
     */

  }, {
    key: "absoluteTop",
    value: function absoluteTop(adjustTop) {
      if (!this.hold) {
        this.innerTop = adjustTop;
        this.inner.style.position = 'absolute';
        this.positionVal = 'top';
        this.inner.style.top = adjustTop + 'px';
        this.inner.style.bottom = 'auto';
        this.hold = true;
      }
    }
    /*
     * Absolute position at current value and hold
     * @param {int} adjustBottom - pixel amount from top of right column,
     * when the box is at bottom margin
     */

  }, {
    key: "absoluteBottom",
    value: function absoluteBottom(adjustBottom) {
      if (!this.hold) {
        this.innerTop = adjustBottom;
        this.inner.style.position = 'absolute';
        this.positionVal = 'bottom';
        this.inner.style.top = adjustBottom + 'px';
        this.inner.style.bottom = 'auto';
        this.hold = true;
      }
    }
  }]);

  return ScrollRightColumn;
}();

;

var TwoColumnBody =
/*
 * Creates ScrollRightColumn object(s)
 * @param {int} margin - top and bottom margin to edge of screen
 * @param {int} topMargin - overrides default top margin
 */
function TwoColumnBody(margin, topMargin) {
  _classCallCheck(this, TwoColumnBody);

  var mainCont = document.getElementsByClassName('two-column-body'),
      i;

  for (i = 0; i < mainCont.length; i++) {
    new ScrollRightColumn(mainCont[i], margin, topMargin);
  }
};

;
var _default = TwoColumnBody;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ "./node_modules/pubsub/index.js":
/*!**************************************!*\
  !*** ./node_modules/pubsub/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PubSub;

function PubSub(mix){

  var proxy = mix || function pubsubProxy(){
    arguments.length && sub.apply(undefined, arguments);
  };

  function sub(callback){
    subscribe(proxy, callback);
  }

  function subOnce(callback){
    once(proxy, callback);
  }

  function unsubOnce(callback){
    unsubscribeOnce(proxy, callback);
  }

  function unsub(callback){
    unsubscribe(proxy, callback);
  }

  function pub(){
    var args = [proxy];
    Array.prototype.push.apply(args, arguments);
    publish.apply(undefined, args);
  }

  proxy.subscribers        = [];
  proxy.subscribersForOnce = [];

  proxy.subscribe          = sub;
  proxy.subscribe.once     = subOnce;
  proxy.unsubscribe        = unsub;
  proxy.unsubscribe.once   = unsubOnce;
  proxy.publish            = pub;

  return proxy;
}

/**
 * Publish "from" by applying given args
 *
 * @param {Function} from
 * @param {...Any} args
 */
function publish(from){

  var args = Array.prototype.slice.call(arguments, 1);

  if (from && from.subscribers && from.subscribers.length > 0) {
    from.subscribers.forEach(function(cb, i){
      if(!cb) return;

      try {
        cb.apply(undefined, args);
      } catch(exc) {
        setTimeout(function(){ throw exc; }, 0);
      }
    });
  }

  if (from && from.subscribersForOnce && from.subscribersForOnce.length > 0) {
    from.subscribersForOnce.forEach(function(cb, i){
      if(!cb) return;

      try {
        cb.apply(undefined, args);
      } catch(exc) {
        setTimeout(function(){ throw exc; }, 0);
      }
    });

    from.subscribersForOnce = [];

  }

}

/**
 * Subscribe callback to given pubsub object.
 *
 * @param {Pubsub} to
 * @param {Function} callback
 */
function subscribe(to, callback){
  if(!callback) return false;
  return to.subscribers.push(callback);
}


/**
 * Subscribe callback to given pubsub object for only one publish.
 *
 * @param {Pubsub} to
 * @param {Function} callback
 */
function once(to, callback){
  if(!callback) return false;

  return to.subscribersForOnce.push(callback);
}

/**
 * Unsubscribe callback to given pubsub object.
 *
 * @param {Pubsub} to
 * @param {Function} callback
 */
function unsubscribe(to, callback){
  var i = to.subscribers.length;

  while(i--){
    if(to.subscribers[i] && to.subscribers[i] == callback){
      to.subscribers[i] = undefined;

      return i;
    }
  }

  return false;
}


/**
 * Unsubscribe callback subscribed for once to specified pubsub.
 *
 * @param {Pubsub} to
 * @param {Function} callback
 * @return {Boolean or Number}
 */
function unsubscribeOnce(to, callback){
  var i = to.subscribersForOnce.length;

  while(i--){
    if(to.subscribersForOnce[i] && to.subscribersForOnce[i] == callback){
      to.subscribersForOnce[i] = undefined;

      return i;
    }
  }

  return false;
}


/***/ }),

/***/ "./node_modules/require-sdk/index.js":
/*!*******************************************!*\
  !*** ./node_modules/require-sdk/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pubsub = __webpack_require__(/*! pubsub */ "./node_modules/pubsub/index.js");
var loadScript = __webpack_require__(/*! load-script */ "./node_modules/load-script/index.js");

module.exports = requireSDK;

function requireSDK (url, global) {
  var onReady = pubsub();

  var hasManualTrigger;
  var isLoading;
  var isLoaded;

  load.trigger = setManualTrigger;

  return load;

  function isAlreadyLoaded () {
    return window[global];
  }

  function load (callback) {
    if (isAlreadyLoaded() || isLoaded) {
      return callback && callback(undefined, window[global]);
    }

    callback && onReady.subscribe(callback);

    if (isLoading) return;

    isLoading = true;

    if (!url) return;

    loadScript(url, function (error) {
      if (hasManualTrigger) return;

      if (error) {
        isLoaded = true;
        return onReady.publish(error);
      }

      trigger();
    });

  };

  function trigger () {
    isLoaded = true;
    onReady.publish(undefined, global ? window[global] : undefined);
  }

  function setManualTrigger () {
    hasManualTrigger = true;
    return trigger;
  }


}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/youtube-iframe-player/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/youtube-iframe-player/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var requireSDK = __webpack_require__(/*! require-sdk */ "./node_modules/require-sdk/index.js");

/**
 * This module give you access to youtube iframe player api.
 * @type {Object}
 */
module.exports = {
  //Direct reference to the original player (https://developers.google.com/youtube/iframe_api_reference)
  player: null,

  init: function(onComplete) {
    var requireYoutube = requireSDK('https://www.youtube.com/iframe_api', 'YT');
    /**
     * @todo We need try to avoid the use of window.
     * YouTube API call onYouTubeIframeAPIReady() when is loaded,
     * it is the only way to know when is ready to be used.
     */
    global.onYouTubeIframeAPIReady = requireYoutube.trigger();

    //Load youtube api
    requireYoutube(function () {
      onComplete();
    }.bind(this));
  },
  /**
   * Call YT.player(), this will create a player inside the container element.
   * @param  {[type]} containerID Container element id
   * @param  {[type]} params      See https://developers.google.com/youtube/iframe_api_reference
   * @return player             A reference of the player.
   */
  createPlayer: function(containerID, params) {
    return this.player = new YT.Player(containerID, params);
  },
  /**
   * Load a video (youtube video ID) in the player.
   * @param  {[type]} videoID [description]
   * @return {[type]}         [description]
   */
  loadVideo: function(videoID) {
    if(this.player) {
        this.player.loadVideoById(videoID);
    } else {
        console.log('You should create.');
    }
  },
  /**
   * Play video.
   * https://developers.google.com/youtube/iframe_api_reference#playVideo
   * @return void
   */
  play: function() {
    this.player.playVideo();
  },
  /**
   * Stops and cancels loading of the current video.
   * This function should be reserved for rare situations when you know that the user will not be
   * watching additional video in the player.
   * https://developers.google.com/youtube/iframe_api_reference#stopVideo
   * @return void
   */
  stop: function() {
    this.player.stopVideo();
  },
  /**
   * Pauses the currently playing video.
   * https://developers.google.com/youtube/iframe_api_reference#pauseVideo
   * @return void
   */
  pause: function() {
    this.player.pauseVideo();
  },
  /**
   * Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused.
   * https://developers.google.com/youtube/iframe_api_reference#seekTo
   * @param  {Number} seconds         time to which the player should advance.
   * @param  {[type]} allowSeekAhead parameter determines whether the player will make a new request to the server if the seconds parameter specifies a time outside of the currently buffered video data. (https://developers.google.com/youtube/iframe_api_reference#seekTo)
   * @return {void}                void
   */
  seekTo: function(seconds, allowSeekAhead) {
    this.player.seekTo(seconds, allowSeekAhead);
  },
  /**
   * Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused.
   * @return {[type]} [description]
   */
  clear: function() {
    this.player.clearVideo();
  },
  /**
   * Removes the <iframe> containing the player.
   * @return void
   */
  destroy: function() {
    this.player.getDuration();
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/article.js":
/*!*********************************!*\
  !*** ./resources/js/article.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global window,require*/
var LightboxPhotopage = __webpack_require__(/*! ./modules/LightboxPhotopage */ "./resources/js/modules/LightboxPhotopage.js"),
    ScrollRightColumn = __webpack_require__(/*! ./globals/modules/TwoColumnBody */ "./armydotmil.github.io/_js/modules/TwoColumnBody.js"),
    SocialBar = __webpack_require__(/*! ./modules/SocialBar */ "./resources/js/modules/SocialBar.js"),
    ResponsiveImages = __webpack_require__(/*! ./modules/ResponsiveImages */ "./resources/js/modules/ResponsiveImages.js"),
    PhotoSlideshow = __webpack_require__(/*! ./globals/modules/PhotoSlideshow */ "./armydotmil.github.io/_js/modules/PhotoSlideshow.js"),
    YTPlaylist = __webpack_require__(/*! ./globals/modules/Playlist */ "./armydotmil.github.io/_js/modules/Playlist.js");

(function () {
  'use strict';

  var socialbarwaypoint = document.getElementsByTagName('footer')[0],
      header = document.getElementsByClassName('navbar'),
      headerHeight = header.length ? header[0].clientHeight : 0,
      articleBody = document.getElementsByClassName('article-body'),
      playlist;
  new LightboxPhotopage('a.rich-text-img-link');

  if (articleBody.length > 0) {
    playlist = new YTPlaylist(articleBody[0]);
    setTimeout(playlist.resetYTPlayer.bind(playlist), 0);
  }

  new PhotoSlideshow();
  ResponsiveImages.reloadOnOrientationChange(); //Social Bar Functionality

  SocialBar.initWaypoint(socialbarwaypoint);
  headerHeight += 20;
  new ScrollRightColumn(20, headerHeight);
})();

/***/ }),

/***/ "./resources/js/modules/Lightbox.js":
/*!******************************************!*\
  !*** ./resources/js/modules/Lightbox.js ***!
  \******************************************/
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
var Helper = __webpack_require__(/*! ../globals/modules/Helper */ "./armydotmil.github.io/_js/modules/Helper.js"),
    Hammer = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");

delete Hammer.defaults.cssProps.userSelect; // Allows user to select text.

/**
 * Sets up a lightbox
 */

var Lightbox = /*#__PURE__*/function () {
  /**
   * Initialize Lightbox
   */
  function Lightbox() {
    _classCallCheck(this, Lightbox);

    this.lbElem = document.getElementById('lightbox');
    this.bodyElem = document.getElementsByTagName('body')[0];
    this.imgContainer = document.getElementById('lb-img');
    this.lbImg = document.getElementById('current-elem');
    this.prev = document.getElementById('prev-button');
    this.next = document.getElementById('next-button');
    this.closeElems = document.getElementsByClassName('click-close');
    this.thumbnailButton = document.getElementById('thumbnail');
    this.thumbnailView = document.getElementById('thumbnail-view');
    this.singleViewButton = document.getElementById('single-view');
    this.downloadButton = document.getElementById('download');
    this.shareButton = document.getElementById('share');
    this.shareBox = document.getElementById('share-box');
    this.photosIndex = document.getElementById('image-index');
    this.Helper = Helper;
  }
  /**
   * This is the init function called by subclasses
   */


  _createClass(Lightbox, [{
    key: "initLightbox",
    value: function initLightbox() {
      var i = 0,
          len; // Display lightbox

      this.showElement(this.lbElem);
      Helper.addClass(this.bodyElem, 'no-scroll'); // Set lb closing event

      for (i, len = this.closeElems.length; i < len; i++) {
        this.setLightboxCloseEvent(this.closeElems[i]);
      }
    }
    /**
     * DRY Close lightbox function
     */

  }, {
    key: "closeLightBox",
    value: function closeLightBox() {
      var _this = this;

      _this.hideElement(_this.lbElem);

      Helper.removeClass(_this.bodyElem, 'no-scroll');

      _this.resetLightboxDisplay();

      _this.index = 0;
    }
    /**
     * Click listener to close lightbox
     * @param {element} el
     */

  }, {
    key: "setLightboxCloseEvent",
    value: function setLightboxCloseEvent(el) {
      var _this = this;

      el.addEventListener('click', function (e) {
        if (Helper.hasClass(e.target, 'click-close')) {
          _this.closeLightBox();

          e.stopPropagation();
        }
      }, false);
    }
    /**
     * Places lightbox in its original state so that you can
     * switch between different lightboxes
     */

  }, {
    key: "resetLightboxDisplay",
    value: function resetLightboxDisplay() {
      this.hideElement(this.thumbnailButton);
      this.hideElement(this.singleViewButton);
      this.hideElement(this.photosIndex);
      this.hideElement(this.downloadButton);
      this.hideElement(this.shareButton);
      Helper.addClass(this.shareBox, 'opacity-zero');
      this.hideElement(this.thumbnailView);
    }
    /**
     * Click listener for prev and next buttons
     */

  }, {
    key: "setPrevNextEvents",
    value: function setPrevNextEvents() {
      var _this = this,
          isEnabled = true;

      Helper.addClass(this.next, 'is-visible'); // on click right

      this.next.addEventListener('click', function (e) {
        e.preventDefault();

        if (isEnabled === true) {
          isEnabled = false; // disable future mouseover for now

          _this.setNext();

          setTimeout(function () {
            isEnabled = true;
          }, 1000); // restore functionality after 1 seconds
        }
      }, false); // on click left

      this.prev.addEventListener('click', function (e) {
        e.preventDefault();

        if (isEnabled === true) {
          isEnabled = false; // disable future mouseover for now

          _this.setPrev();

          setTimeout(function () {
            isEnabled = true;
          }, 1000); // restore functionality after 1 seconds
        }
      }, false);
    }
    /**
     * Swipe listener for lightbox photos
     */

  }, {
    key: "setupHammerSwipe",
    value: function setupHammerSwipe() {
      var _this = this,
          isEnabled = true,
          hammertime = new Hammer(this.lbElem);

      hammertime.on('swipeleft swiperight', function (ev) {
        Hammer.off(ev.target, 'click');

        if (ev.deltaX < 0) {
          if (isEnabled === true) {
            isEnabled = false; // disable future mouseover for now

            if (_this.imgContainer.style.display != 'none') {
              if (_this.index != _this.len - 1) {
                _this.setNext();
              }
            }

            setTimeout(function () {
              isEnabled = true;
            }, 1000); // restore functionality after 1 seconds
          }
        } else {
          if (isEnabled === true) {
            isEnabled = false; // disable future mouseover for now

            if (_this.imgContainer.style.display != 'none') {
              if (_this.index !== 0) {
                _this.setPrev();
              }
            }

            setTimeout(function () {
              isEnabled = true;
            }, 1000); // restore functionality after 1 seconds
          }
        }

        Hammer.on(ev.target, 'click');
      });
    }
    /**
     * Click listener for thumbnail and single view buttons
     * @param {display} which element to display (thumb or single)
     */

  }, {
    key: "setThumbButton",
    value: function setThumbButton() {
      var _this = this; // thumbnail button


      this.thumbnailButton.addEventListener('click', function () {
        _this.prev.style.display = 'none';
        _this.next.style.display = 'none';
        Helper.addClass(_this.lbElem, 'thumb-view-active');

        _this.toggleThumbView();
      }, false); // single view button

      this.singleViewButton.addEventListener('click', function () {
        var i = 0;
        _this.next.style.display = 'block';
        _this.prev.style.display = 'block';

        if (_this.index === 0) {
          _this.prev.style.display = 'none';
        }

        if (_this.index === _this.len - 1) {
          _this.next.style.display = 'none';
        }

        Helper.removeClass(_this.lbElem, 'thumb-view-active');

        _this.toggleThumbView();
      }, false);
    }
    /**
     * Click listener for share button
     */

  }, {
    key: "setShareButton",
    value: function setShareButton() {
      var _this = this; // share button


      this.shareButton.addEventListener('click', function () {
        if (Helper.hasClass(_this.shareBox, 'opacity-zero')) {
          Helper.removeClass(_this.shareBox, 'opacity-zero');
        } else {
          Helper.addClass(_this.shareBox, 'opacity-zero');
        }
      }, false);
    }
    /**
     * Function to set the display to the next image
     */

  }, {
    key: "setNext",
    value: function setNext() {
      this.right = true;
      if (this.index < this.len - 1) this.index++;
      Helper.removeClass(this.lbImg, 'current-elem');
      Helper.addClass(this.lbImg, 'next-elem');
      this.prevLbImg.style.left = "0px";
      this.setDisplay(this.images[this.index]);
    }
    /**
     * Function to set the display to the previous image
     */

  }, {
    key: "setPrev",
    value: function setPrev() {
      this.left = true;
      if (this.index > 0) this.index--;
      Helper.removeClass(this.lbImg, 'current-elem');
      Helper.addClass(this.lbImg, 'prev-elem');
      this.nextLbImg.style.left = "0px";
      this.setDisplay(this.images[this.index]);
    }
    /**
     * Sets the single view
     */

  }, {
    key: "setSingleView",
    value: function setSingleView() {
      this.showElement(this.thumbnailButton);
      this.hideElement(this.singleViewButton);
      this.hideElement(this.thumbnailView);
      this.showElement(this.imgContainer);
    }
    /**
     * Toggle the thumb/single view
     */

  }, {
    key: "toggleThumbView",
    value: function toggleThumbView() {
      this.toggleVisibility(this.thumbnailButton);
      this.toggleVisibility(this.singleViewButton);
      this.toggleVisibility(this.thumbnailView);
      this.toggleVisibility(this.imgContainer);
    }
    /**
     * Toggle the thumb button
     */

  }, {
    key: "toggleThumbButton",
    value: function toggleThumbButton() {
      this.toggleVisibility(this.thumbnailButton);
    }
    /**
     * Toggle the share button
     */

  }, {
    key: "toggleShareButton",
    value: function toggleShareButton() {
      this.toggleVisibility(this.shareButton);
    }
    /**
     * Update the share buttons
     * @param {url, title} URL and Title of the share buttons
     */

  }, {
    key: "updateShareButtons",
    value: function updateShareButtons(url, title) {
      var facebook = document.getElementById('fb-social'),
          twitter = document.getElementById('twitter-social'),
          pinterest = document.getElementById('pint-social');
      facebook.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url);
      twitter.setAttribute('href', 'https://twitter.com/home?status=' + url + '%0A%0A' + title);
      pinterest.setAttribute('href', 'https://pinterest.com/pin/create/button/?url=' + url + '&media=' + url + '&description=' + title);
    }
    /**
     * Toggle download button
     */

  }, {
    key: "toggleDownloadButton",
    value: function toggleDownloadButton() {
      this.toggleVisibility(this.downloadButton);
    }
    /**
     * Update the download button
     * @param {url, fileName} URL and File Name of the download image
     */

  }, {
    key: "updateDownloadButton",
    value: function updateDownloadButton(url, fileName) {
      this.downloadButton.setAttribute('href', url);
      this.downloadButton.setAttribute('download', fileName);
    }
    /**
     * Toggle photos index
     */

  }, {
    key: "togglePhotosIndex",
    value: function togglePhotosIndex() {
      this.toggleVisibility(this.photosIndex);
    }
    /**
     * Update photos index
     * @param {index, total} Index of current photo being viewed and Total amount of photos
     */

  }, {
    key: "updatePhotosIndex",
    value: function updatePhotosIndex(index, total) {
      this.photosIndex.textContent = index + " of " + total;
    }
    /**
     * Simple toggle display of elements
     * @param {element} el
     */

  }, {
    key: "toggleVisibility",
    value: function toggleVisibility(el) {
      if (Helper.hasClass(el, 'hidden')) {
        Helper.removeClass(el, 'hidden');
        Helper.addClass(el, 'is-visible');
      } else if (Helper.hasClass(el, 'is-visible')) {
        Helper.removeClass(el, 'is-visible');
        Helper.addClass(el, 'hidden');
      }
    }
    /**
     * Hide element
     * @param {element} el
     */

  }, {
    key: "hideElement",
    value: function hideElement(el) {
      if (Helper.hasClass(el, 'hidden')) {//do nothing
      } else if (Helper.hasClass(el, 'is-visible')) {
        Helper.removeClass(el, 'is-visible');
        Helper.addClass(el, 'hidden');
      } else {
        Helper.addClass(el, 'hidden');
      }
    }
    /**
     * Hide element
     * @param {element} el
     */

  }, {
    key: "showElement",
    value: function showElement(el) {
      if (Helper.hasClass(el, 'hidden')) {
        Helper.removeClass(el, 'hidden');
        Helper.addClass(el, 'is-visible');
      } else if (Helper.hasClass(el, 'is-visible')) {//do nothing
      } else {
        Helper.addClass(el, 'is-visible');
      }
    }
  }]);

  return Lightbox;
}();

;
var _default = Lightbox;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/modules/LightboxPhoto.js":
/*!***********************************************!*\
  !*** ./resources/js/modules/LightboxPhoto.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*jshint -W032 */

/* ignore unnecessary semicolon */
var Lightbox = __webpack_require__(/*! ./Lightbox */ "./resources/js/modules/Lightbox.js"),
    LoadingBar = __webpack_require__(/*! ./LoadingBar */ "./resources/js/modules/LoadingBar.js");
/**
 * Sets up a lightbox
 */


var LightboxPhoto = /*#__PURE__*/function (_Lightbox) {
  _inherits(LightboxPhoto, _Lightbox);

  var _super = _createSuper(LightboxPhoto);

  /**
   * Initialize Lightbox
   */
  function LightboxPhoto() {
    var _this2;

    _classCallCheck(this, LightboxPhoto);

    var requestElem = document.getElementById('requestId'),
        rId = requestElem ? requestElem.textContent : '',
        url;
    _this2 = _super.call(this); //allows use of this

    LoadingBar = new LoadingBar();
    return _this2;
  }
  /*
   * Lightbox init function for this subclass
   */


  _createClass(LightboxPhoto, [{
    key: "initLightboxPhoto",
    value: function initLightboxPhoto(el, section) {
      var _this = this,
          i,
          len;

      el.addEventListener('click', function () {
        _this.preSetDisplay(el, section);
      }, false);
    }
  }, {
    key: "preSetPhotoCloseEvent",
    value: function preSetPhotoCloseEvent() {
      var i, len; // Set lb closing event (specifically for this subclass)

      for (i, len = this.closeElems.length; i < len; i++) {
        this.setPhotoCloseEvent(this.closeElems[i]);
      }
    }
    /*
     * Click listener to avoid "Don't make functions in loop warning"
     */

  }, {
    key: "setPhotoCloseEvent",
    value: function setPhotoCloseEvent(el) {
      var _this = this;

      el.addEventListener('click', function (e) {
        if (_this.Helper.hasClass(e.target, 'click-close')) {
          Helper.removeClass(_this.lbElem, 'thumb-view-active');

          _this.toggleThumbView();

          _this.lbElem.getElementsByTagName('p')[0].textContent = '<span id="author"></span>';
          e.stopPropagation();
        }
      }, false);
    }
    /**
     * Click event function
     * @param {element} el is the element that is clicked
     */

  }, {
    key: "preSetDisplay",
    value: function preSetDisplay(el, section) {
      var photos, ul;

      if (section) {
        photos = document.getElementsByClassName(section)[0];
        ul = photos.getElementsByTagName('ul')[0];
        this.index = [].slice.call(ul.children).indexOf(el.parentNode);
      } else {
        this.index = this.mainImageKeys.indexOf(el.getAttribute('href'));
      }

      this.lbImg = document.getElementById('current-elem');
      this.nextLbImg = document.getElementById('next-elem');
      this.prevLbImg = document.getElementById('prev-elem');
      this.Helper.addClass(this.lbElem, 'is-visible');
      this.Helper.addClass(this.bodyElem, 'no-scroll');
      this.Helper.removeClass(this.lbElem, 'thumb-view-active');
      this.setDisplay(this.images[this.index]);
    }
    /**
     * Update the lightbox with the
     * appropiate content
     * @param {element} el
     */

  }, {
    key: "setDisplay",
    value: function setDisplay(el) {
      var _this = this,
          i = 0,
          newSrc,
          size1200,
          sizeOrig,
          newImage = new Image(),
          preloadNextImg = new Image(),
          preloadPrevImg = new Image(),
          preloadNextImgAlt,
          preloadNextImgSrc,
          preloadPrevImgAlt,
          preloadPrevImgSrc,
          w = window.innerWidth || this.bodyElem.clientWidth,
          span = document.createElement("span"),
          imageIndex = parseInt(this.index);

      if (this.images[imageIndex + 1]) {
        preloadNextImgAlt = this.images[imageIndex + 1].getElementsByTagName('img')[0].getAttribute('alt');
        preloadNextImgSrc = this.images[imageIndex + 1].getElementsByTagName('img')[0].getAttribute('src').replace('size1', w < 769 ? w < 481 ? 'size1' : 'size0' : 'max1200');
      }

      if (this.images[imageIndex - 1]) {
        preloadPrevImgAlt = this.images[imageIndex - 1].getElementsByTagName('img')[0].getAttribute('alt');
        preloadPrevImgSrc = this.images[imageIndex - 1].getElementsByTagName('img')[0].getAttribute('src').replace('size1', w < 769 ? w < 481 ? 'size1' : 'size0' : 'max1200');
      }

      this.img = el.getElementsByTagName('img')[0];
      this.alt_text = this.img.getAttribute('alt');
      this.description = this.lbElem.getElementsByTagName('p')[0];
      this.title = this.img.getAttribute('data-title');
      this.authorText = this.img.getAttribute('data-author'); // sets new image

      span.setAttribute('id', 'author');
      this.description.textContent = this.alt_text;

      if (this.authorText !== '') {
        span.innerHTML = ' (' + this.authorText + ')';
      }

      this.description.appendChild(span);
      newSrc = this.img.getAttribute('src').replace('size1', w < 769 ? w < 481 ? 'size1' : 'size0' : 'max1200');
      size1200 = this.img.getAttribute('src').replace('size1', 'max1200');
      sizeOrig = this.img.getAttribute('src').replace('size1', 'original'); // runs when new image is initialized

      LoadingBar.setLoadingBar(10);
      newImage.addEventListener('load', function () {
        _this.lbImg.setAttribute('alt', _this.alt_text);

        _this.lbImg.setAttribute('src', newSrc);

        LoadingBar.setLoadingBar(100);

        if (_this.right) {
          _this.prevLbImg.style.opacity = "1";
          window.setTimeout(function () {
            // allows animation to run
            _this.lbImg.className = 'current-elem';
            _this.prevLbImg.style.transition = "left 0.5s linear";
            _this.prevLbImg.style.left = "calc(-200% + -204px)";
          }, 500);
          window.setTimeout(function () {
            // allows animation to run
            _this.prevLbImg.style.opacity = "0";

            if (_this.prevLbImg.style.removeProperty) {
              _this.prevLbImg.style.removeProperty('transition');
            } else {
              _this.prevLbImg.style.removeAttribute('transition');
            }
          }, 1000);
          _this.right = false;
        }

        if (_this.left) {
          _this.nextLbImg.style.opacity = "1";
          window.setTimeout(function () {
            // allows animation to run
            _this.lbImg.className = 'current-elem';
            _this.nextLbImg.style.transition = "left 0.5s linear";
            _this.nextLbImg.style.left = "calc(100% + 102px)";
          }, 500);
          window.setTimeout(function () {
            // allows animation to run
            _this.nextLbImg.style.opacity = "0";

            if (_this.nextLbImg.style.removeProperty) {
              _this.nextLbImg.style.removeProperty('transition');
            } else {
              _this.nextLbImg.style.removeAttribute('transition');
            }
          }, 1000);
          _this.left = false;
        }
      }); // runs when next image is initialized

      if (typeof preloadNextImg != 'undefined') {
        preloadNextImg.addEventListener('load', function () {
          _this.nextLbImg.setAttribute('alt', preloadNextImgAlt);

          _this.nextLbImg.setAttribute('src', preloadNextImgSrc);
        });
      } // runs when prev image is initialized


      if (typeof preloadPrevImg != 'undefined') {
        preloadPrevImg.addEventListener('load', function () {
          _this.prevLbImg.setAttribute('alt', preloadPrevImgAlt);

          _this.prevLbImg.setAttribute('src', preloadPrevImgSrc);
        });
      } // updates share buttons


      this.updateShareButtons(size1200, this.title); // updates photos index (shows image counter: "10 of 14")

      this.updatePhotosIndex(imageIndex + 1, this.len); // updates download links

      this.updateDownloadButton(sizeOrig, this.title); // sets prev and next images and buttons

      this.prev.style.display = 'block';
      this.next.style.display = 'block';

      if (this.index === 0) {
        this.prev.style.display = 'none';
        this.prevLbImg.setAttribute('alt', '');
        this.prevLbImg.setAttribute('src', '');
      } else {
        preloadPrevImg.setAttribute('src', preloadPrevImgSrc);
      }

      if (this.index === this.len - 1) {
        this.next.style.display = 'none';
        this.nextLbImg.setAttribute('alt', '');
        this.nextLbImg.setAttribute('src', '');
      } else {
        preloadNextImg.setAttribute('src', preloadNextImgSrc);
      }

      LoadingBar.setLoadingBar(60); // initialize new image

      newImage.setAttribute('src', newSrc); // disable image dragging

      this.lbImg.ondragstart = function () {
        return false;
      };

      this.lbImg.onmousedown = function () {
        return false;
      };
    }
  }, {
    key: "setKeyboardEvents",

    /**
     * Left/Right listener for lightbox photos
     */
    value: function setKeyboardEvents() {
      var _this = this,
          isEnabled = true; // triggers prev and next in slideshow by pressing left and right on keyboard


      document.addEventListener('keydown', function (evt) {
        var key;

        if (isEnabled === true) {
          isEnabled = false; // disable future mouseover for now

          if (_this.imgContainer.style.display != 'none') {
            if (!evt) {
              evt = window.event;

              if (!evt.which) {
                key = evt.keyCode;
              }
            } else if (evt) {
              key = evt.which;
            }

            switch (key) {
              case 37:
                if (_this.index !== 0) {
                  _this.setPrev();
                }

                break;

              case 39:
                if (_this.index != _this.len - 1) {
                  _this.setNext();
                }

                break;

              case 27:
                _this.closeLightBox();

                break;
            }
          }

          setTimeout(function () {
            isEnabled = true;
          }, 1000); // restore functionality after 1 seconds
        }
      }, false);
    }
  }]);

  return LightboxPhoto;
}(Lightbox);

;
var _default = LightboxPhoto;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/modules/LightboxPhotopage.js":
/*!***************************************************!*\
  !*** ./resources/js/modules/LightboxPhotopage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LightboxPhoto = __webpack_require__(/*! ./LightboxPhoto */ "./resources/js/modules/LightboxPhoto.js");
/**
 * Photos page Lightbox Subclass
 */


var LightboxPhotopage = /*#__PURE__*/function (_LightboxPhoto) {
  _inherits(LightboxPhotopage, _LightboxPhoto);

  var _super = _createSuper(LightboxPhotopage);

  /**
   * Initialize Lightbox
   */
  function LightboxPhotopage() {
    var _this2;

    var imgSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.photos-section ul li a';

    _classCallCheck(this, LightboxPhotopage);

    _this2 = _super.call(this); //allows use of this

    _this2.imgSection = imgSelector === '.photos-section ul li a' ? 'photos-section' : null;
    _this2.images = document.querySelectorAll(imgSelector);
    _this2.mainImageKeys = [];
    _this2.len = _this2.images.length;

    _this2.init();

    return _this2;
  }
  /*
   * Set up the click listner on the appropriate images
   */


  _createClass(LightboxPhotopage, [{
    key: "init",
    value: function init() {
      var _this = this,
          i = 0,
          len,
          j,
          dataSrc = '';

      this.index = 0;
      this.thumbnailImages = document.querySelectorAll('.thumbnail-view ul li a');
      this.thumbnailImagesImg = document.querySelectorAll('.thumbnail-view ul li a img');
      this.thumbnailLen = this.thumbnailImages.length; // setting up events

      this.setupHammerSwipe();
      this.setKeyboardEvents();
      this.setPrevNextEvents();
      this.setThumbButton();
      this.setShareButton(); // setting listener on main photos

      for (i, len = this.len; i < len; i++) {
        this.initLightboxPhoto(this.images[i], this.imgSection);
        this.images[i].addEventListener('click', function (e) {
          e.preventDefault();

          _this.initLightbox();

          _this.toggleShareButton();

          _this.toggleDownloadButton();

          _this.togglePhotosIndex();

          _this.toggleThumbButton();

          _this.preSetPhotoCloseEvent();

          _this.setSingleView();

          if (typeof ga !== 'undefined') ga('send', 'event', 'featured photos', 'click', _this.img.src + ' || ' + _this.img.getAttribute('data-title'));
        }, false);
      } // setting listener on thumbnail photos


      for (j = 0; j < this.thumbnailLen; j++) {
        dataSrc = this.thumbnailImagesImg[j].getAttribute('data-src');
        this.mainImageKeys[j] = dataSrc;
        dataSrc = dataSrc.replace('original.', 'size1.').replace('army.mil-', 'size1-army.mil-');
        this.thumbnailImagesImg[j].setAttribute('src', dataSrc);
        this.initLightboxPhoto(this.thumbnailImages[j], 'thumbnail-view');
        this.thumbnailImages[j].addEventListener('click', function () {
          _this.toggleThumbView();

          if (typeof ga !== 'undefined') ga('send', 'event', 'featured photos', 'click', _this.img.src + ' || ' + _this.img.getAttribute('data-title'));
        }, false);
      } // use the thumbnail images as the main resource for data used by lightbox


      this.images = this.thumbnailImages;
      this.len = this.images.length;
    }
  }]);

  return LightboxPhotopage;
}(LightboxPhoto);

var _default = LightboxPhotopage;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/modules/LoadingBar.js":
/*!********************************************!*\
  !*** ./resources/js/modules/LoadingBar.js ***!
  \********************************************/
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
var Helper = __webpack_require__(/*! ../globals/modules/Helper */ "./armydotmil.github.io/_js/modules/Helper.js");
/**
 * Sets up a Loading bar
 * Must use 10,20,30,40,50,60,70,80,90 or 100 as values
 * Must use a value below 100 first and then 100 to finish to loading progress.
 * to init just use setLoadingBar(20) <- any value below 100
 * to finish use setLoadingBar(100)
 */


var LoadingBar = /*#__PURE__*/function () {
  function LoadingBar() {
    _classCallCheck(this, LoadingBar);
  }

  _createClass(LoadingBar, [{
    key: "setLoadingBar",

    /**
     * Sets the sets loading animation
     */
    value: function setLoadingBar(width) {
      var _this = this,
          i;

      this.classes = ["loading-bar-10", "loading-bar-20", "loading-bar-30", "loading-bar-40", "loading-bar-50", "loading-bar-60", "loading-bar-70", "loading-bar-80", "loading-bar-90", "loading-bar-100"];
      this.classesRev = this.classes.reverse();
      this.parent = document.getElementById("loading");
      this.elem = document.getElementById("loading-bar");
      this.width = width;
      this.lastPercentDiff = 0;
      this.parent.style.display = "block"; // if loading is set to 100

      if (this.width >= 100) {
        for (i = 0; i < this.classesRev.length; i++) {
          if (Helper.hasClass(this.elem, this.classesRev[i]) && this.classesRev[i] != 'loading-bar-100') {
            this.lastPercentDiff = this.width - this.classesRev[i].slice(-2);
            break;
          }
        }

        if (this.lastPercentDiff === 0) {
          this.animTime = 1;
        } else {
          this.animTime = this.lastPercentDiff / 10;
        }

        this.setAnimTime();
        window.setTimeout(function () {
          _this.parent.style.display = "none";

          _this.clearLoadingBar();
        }, this.lastPercentDiff * 10);
      } else {
        // for loading not set to 100
        for (i = 0; i < this.classesRev.length; i++) {
          if (Helper.hasClass(this.elem, this.classesRev[i])) {
            this.lastPercent = this.classesRev[i].slice(-2);
            this.lastPercentDiff = this.width - this.classesRev[i].slice(-2);
            break;
          }
        }

        if (this.lastPercentDiff === 0) {
          this.animTime = this.width / 10;
        } else {
          this.animTime = this.width / 10 - this.lastPercent / 10;
        }

        this.setAnimTime();
      }
    }
    /**
     * Set Animation Time
     */

  }, {
    key: "setAnimTime",
    value: function setAnimTime() {
      this.elem.style.WebkitTransition = 'width 0.' + this.animTime + 's linear';
      this.elem.style.MozTransition = 'width 0.' + this.animTime + 's linear';
      Helper.addClass(this.elem, 'loading-bar-' + this.width);
    }
    /**
     * Clear Loading Bar
     */

  }, {
    key: "clearLoadingBar",
    value: function clearLoadingBar() {
      var i;

      for (i = 0; i < this.classes.length; i++) {
        Helper.removeClass(this.elem, this.classes[i]);
      }
    }
  }]);

  return LoadingBar;
}();

;
var _default = LoadingBar;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/modules/ResponsiveImages.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/ResponsiveImages.js ***!
  \**************************************************/
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
var ResponsiveImages = /*#__PURE__*/function () {
  function ResponsiveImages() {
    _classCallCheck(this, ResponsiveImages);
  }

  _createClass(ResponsiveImages, null, [{
    key: "reloadOnOrientationChange",
    value: function reloadOnOrientationChange() {
      window.addEventListener('orientationchange', function () {
        switch (window.orientation) {
          case -90:
          case 90:
            var images = document.getElementsByClassName('resp-image'),
                i,
                len = images.length;

            for (i = 0; i < len; i++) {
              images[i].outerHTML = images[i].outerHTML;
            }

            break;

          default:
            //No need to reload a smaller image
            break;
        }
      });
    }
  }]);

  return ResponsiveImages;
}();

;
var _default = ResponsiveImages;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/modules/SocialBar.js":
/*!*******************************************!*\
  !*** ./resources/js/modules/SocialBar.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint -W032 */

/* ignore unnecessary semicolon */
var WaypointClass = __webpack_require__(/*! ./commonjs.waypoints.js */ "./resources/js/modules/commonjs.waypoints.js"),
    Helper = __webpack_require__(/*! ../globals/modules/Helper */ "./armydotmil.github.io/_js/modules/Helper.js");

var SocialBar = /*#__PURE__*/function () {
  function SocialBar() {
    _classCallCheck(this, SocialBar);
  }

  _createClass(SocialBar, null, [{
    key: "initWaypoint",
    value: function initWaypoint(waypointElement) {
      var socialBar = document.getElementsByClassName('social-bar')[0];

      if (_typeof(waypointElement) === "object") {
        new WaypointClass({
          element: waypointElement,
          handler: function handler(direction) {
            if (direction === 'up') {
              Helper.removeClass(socialBar, 'scrolled-down');
            } else if (direction === 'down') {
              Helper.addClass(socialBar, 'scrolled-down');
            }
          },
          offset: '100%'
        });
      }
    }
  }]);

  return SocialBar;
}();

;
var _default = SocialBar;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./resources/js/modules/commonjs.waypoints.js":
/*!****************************************************!*\
  !*** ./resources/js/modules/commonjs.waypoints.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var keyCounter = 0;
var allWaypoints = {};
/* http://imakewebthings.com/waypoints/api/waypoint */

function Waypoint(options) {
  if (!options) {
    throw new Error('No options passed to Waypoint constructor');
  }

  if (!options.element) {
    throw new Error('No element option passed to Waypoint constructor');
  }

  if (!options.handler) {
    throw new Error('No handler option passed to Waypoint constructor');
  }

  this.key = 'waypoint-' + keyCounter;
  this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options);
  this.element = this.options.element;
  this.adapter = new Waypoint.Adapter(this.element);
  this.callback = options.handler;
  this.axis = this.options.horizontal ? 'horizontal' : 'vertical';
  this.enabled = this.options.enabled;
  this.triggerPoint = null;
  this.group = Waypoint.Group.findOrCreate({
    name: this.options.group,
    axis: this.axis
  });
  this.context = Waypoint.Context.findOrCreateByElement(this.options.context);

  if (Waypoint.offsetAliases[this.options.offset]) {
    this.options.offset = Waypoint.offsetAliases[this.options.offset];
  }

  this.group.add(this);
  this.context.add(this);
  allWaypoints[this.key] = this;
  keyCounter += 1;
}
/* Private */


Waypoint.prototype.queueTrigger = function (direction) {
  this.group.queueTrigger(this, direction);
};
/* Private */


Waypoint.prototype.trigger = function (args) {
  if (!this.enabled) {
    return;
  }

  if (this.callback) {
    this.callback.apply(this, args);
  }
};
/* Public */

/* http://imakewebthings.com/waypoints/api/destroy */


Waypoint.prototype.destroy = function () {
  this.context.remove(this);
  this.group.remove(this);
  delete allWaypoints[this.key];
};
/* Public */

/* http://imakewebthings.com/waypoints/api/disable */


Waypoint.prototype.disable = function () {
  this.enabled = false;
  return this;
};
/* Public */

/* http://imakewebthings.com/waypoints/api/enable */


Waypoint.prototype.enable = function () {
  this.context.refresh();
  this.enabled = true;
  return this;
};
/* Public */

/* http://imakewebthings.com/waypoints/api/next */


Waypoint.prototype.next = function () {
  return this.group.next(this);
};
/* Public */

/* http://imakewebthings.com/waypoints/api/previous */


Waypoint.prototype.previous = function () {
  return this.group.previous(this);
};
/* Private */


Waypoint.invokeAll = function (method) {
  var allWaypointsArray = [];

  for (var waypointKey in allWaypoints) {
    allWaypointsArray.push(allWaypoints[waypointKey]);
  }

  for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
    allWaypointsArray[i][method]();
  }
};
/* Public */

/* http://imakewebthings.com/waypoints/api/destroy-all */


Waypoint.destroyAll = function () {
  Waypoint.invokeAll('destroy');
};
/* Public */

/* http://imakewebthings.com/waypoints/api/disable-all */


Waypoint.disableAll = function () {
  Waypoint.invokeAll('disable');
};
/* Public */

/* http://imakewebthings.com/waypoints/api/enable-all */


Waypoint.enableAll = function () {
  Waypoint.invokeAll('enable');
};
/* Public */

/* http://imakewebthings.com/waypoints/api/refresh-all */


Waypoint.refreshAll = function () {
  Waypoint.Context.refreshAll();
};
/* Public */

/* http://imakewebthings.com/waypoints/api/viewport-height */


Waypoint.viewportHeight = function () {
  return window.innerHeight || document.documentElement.clientHeight;
};
/* Public */

/* http://imakewebthings.com/waypoints/api/viewport-width */


Waypoint.viewportWidth = function () {
  return document.documentElement.clientWidth;
};

Waypoint.adapters = [];
Waypoint.defaults = {
  context: window,
  continuous: true,
  enabled: true,
  group: 'default',
  horizontal: false,
  offset: 0
};
Waypoint.offsetAliases = {
  'bottom-in-view': function bottomInView() {
    return this.context.innerHeight() - this.adapter.outerHeight();
  },
  'right-in-view': function rightInView() {
    return this.context.innerWidth() - this.adapter.outerWidth();
  }
};
window.Waypoint = Waypoint;

function requestAnimationFrameShim(callback) {
  window.setTimeout(callback, 1000 / 60);
}

var keyCounter = 0;
var contexts = {}; // var Waypoint = window.Waypoint

var oldWindowLoad = window.onload;
/* http://imakewebthings.com/waypoints/api/context */

function Context(element) {
  this.element = element;
  this.Adapter = Waypoint.Adapter;
  this.adapter = new this.Adapter(element);
  this.key = 'waypoint-context-' + keyCounter;
  this.didScroll = false;
  this.didResize = false;
  this.oldScroll = {
    x: this.adapter.scrollLeft(),
    y: this.adapter.scrollTop()
  };
  this.waypoints = {
    vertical: {},
    horizontal: {}
  };
  element.waypointContextKey = this.key;
  contexts[element.waypointContextKey] = this;
  keyCounter += 1;
  this.createThrottledScrollHandler();
  this.createThrottledResizeHandler();
}
/* Private */


Context.prototype.add = function (waypoint) {
  var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical';
  this.waypoints[axis][waypoint.key] = waypoint;
  this.refresh();
};
/* Private */


Context.prototype.checkEmpty = function () {
  var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
  var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);

  if (horizontalEmpty && verticalEmpty) {
    this.adapter.off('.waypoints');
    delete contexts[this.key];
  }
};
/* Private */


Context.prototype.createThrottledResizeHandler = function () {
  var self = this;

  function resizeHandler() {
    self.handleResize();
    self.didResize = false;
  }

  this.adapter.on('resize.waypoints', function () {
    if (!self.didResize) {
      self.didResize = true;
      Waypoint.requestAnimationFrame(resizeHandler);
    }
  });
};
/* Private */


Context.prototype.createThrottledScrollHandler = function () {
  var self = this;

  function scrollHandler() {
    self.handleScroll();
    self.didScroll = false;
  }

  this.adapter.on('scroll.waypoints', function () {
    if (!self.didScroll || Waypoint.isTouch) {
      self.didScroll = true;
      Waypoint.requestAnimationFrame(scrollHandler);
    }
  });
};
/* Private */


Context.prototype.handleResize = function () {
  Waypoint.Context.refreshAll();
};
/* Private */


Context.prototype.handleScroll = function () {
  var triggeredGroups = {};
  var axes = {
    horizontal: {
      newScroll: this.adapter.scrollLeft(),
      oldScroll: this.oldScroll.x,
      forward: 'right',
      backward: 'left'
    },
    vertical: {
      newScroll: this.adapter.scrollTop(),
      oldScroll: this.oldScroll.y,
      forward: 'down',
      backward: 'up'
    }
  };

  for (var axisKey in axes) {
    var axis = axes[axisKey];
    var isForward = axis.newScroll > axis.oldScroll;
    var direction = isForward ? axis.forward : axis.backward;

    for (var waypointKey in this.waypoints[axisKey]) {
      var waypoint = this.waypoints[axisKey][waypointKey];
      var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
      var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
      var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
      var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;

      if (crossedForward || crossedBackward) {
        waypoint.queueTrigger(direction);
        triggeredGroups[waypoint.group.id] = waypoint.group;
      }
    }
  }

  for (var groupKey in triggeredGroups) {
    triggeredGroups[groupKey].flushTriggers();
  }

  this.oldScroll = {
    x: axes.horizontal.newScroll,
    y: axes.vertical.newScroll
  };
};
/* Private */


Context.prototype.innerHeight = function () {
  /*eslint-disable eqeqeq */
  if (this.element == this.element.window) {
    return Waypoint.viewportHeight();
  }
  /*eslint-enable eqeqeq */


  return this.adapter.innerHeight();
};
/* Private */


Context.prototype.remove = function (waypoint) {
  delete this.waypoints[waypoint.axis][waypoint.key];
  this.checkEmpty();
};
/* Private */


Context.prototype.innerWidth = function () {
  /*eslint-disable eqeqeq */
  if (this.element == this.element.window) {
    return Waypoint.viewportWidth();
  }
  /*eslint-enable eqeqeq */


  return this.adapter.innerWidth();
};
/* Public */

/* http://imakewebthings.com/waypoints/api/context-destroy */


Context.prototype.destroy = function () {
  var allWaypoints = [];

  for (var axis in this.waypoints) {
    for (var waypointKey in this.waypoints[axis]) {
      allWaypoints.push(this.waypoints[axis][waypointKey]);
    }
  }

  for (var i = 0, end = allWaypoints.length; i < end; i++) {
    allWaypoints[i].destroy();
  }
};
/* Public */

/* http://imakewebthings.com/waypoints/api/context-refresh */


Context.prototype.refresh = function () {
  /*eslint-disable eqeqeq */
  var isWindow = this.element == this.element.window;
  /*eslint-enable eqeqeq */

  var contextOffset = this.adapter.offset();
  var triggeredGroups = {};
  var axes;
  this.handleScroll();
  axes = {
    horizontal: {
      contextOffset: isWindow ? 0 : contextOffset.left,
      contextScroll: isWindow ? 0 : this.oldScroll.x,
      contextDimension: this.innerWidth(),
      oldScroll: this.oldScroll.x,
      forward: 'right',
      backward: 'left',
      offsetProp: 'left'
    },
    vertical: {
      contextOffset: isWindow ? 0 : contextOffset.top,
      contextScroll: isWindow ? 0 : this.oldScroll.y,
      contextDimension: this.innerHeight(),
      oldScroll: this.oldScroll.y,
      forward: 'down',
      backward: 'up',
      offsetProp: 'top'
    }
  };

  for (var axisKey in axes) {
    var axis = axes[axisKey];

    for (var waypointKey in this.waypoints[axisKey]) {
      var waypoint = this.waypoints[axisKey][waypointKey];
      var adjustment = waypoint.options.offset;
      var oldTriggerPoint = waypoint.triggerPoint;
      var elementOffset = 0;
      var freshWaypoint = oldTriggerPoint == null;
      var contextModifier, wasBeforeScroll, nowAfterScroll;
      var triggeredBackward, triggeredForward;

      if (waypoint.element !== waypoint.element.window) {
        elementOffset = waypoint.adapter.offset()[axis.offsetProp];
      }

      if (typeof adjustment === 'function') {
        adjustment = adjustment.apply(waypoint);
      } else if (typeof adjustment === 'string') {
        adjustment = parseFloat(adjustment);

        if (waypoint.options.offset.indexOf('%') > -1) {
          adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
        }
      }

      contextModifier = axis.contextScroll - axis.contextOffset;
      waypoint.triggerPoint = elementOffset + contextModifier - adjustment;
      wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
      nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
      triggeredBackward = wasBeforeScroll && nowAfterScroll;
      triggeredForward = !wasBeforeScroll && !nowAfterScroll;

      if (!freshWaypoint && triggeredBackward) {
        waypoint.queueTrigger(axis.backward);
        triggeredGroups[waypoint.group.id] = waypoint.group;
      } else if (!freshWaypoint && triggeredForward) {
        waypoint.queueTrigger(axis.forward);
        triggeredGroups[waypoint.group.id] = waypoint.group;
      } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
        waypoint.queueTrigger(axis.forward);
        triggeredGroups[waypoint.group.id] = waypoint.group;
      }
    }
  }

  for (var groupKey in triggeredGroups) {
    triggeredGroups[groupKey].flushTriggers();
  }

  return this;
};
/* Private */


Context.findOrCreateByElement = function (element) {
  return Context.findByElement(element) || new Context(element);
};
/* Private */


Context.refreshAll = function () {
  for (var contextId in contexts) {
    contexts[contextId].refresh();
  }
};
/* Public */

/* http://imakewebthings.com/waypoints/api/context-find-by-element */


Context.findByElement = function (element) {
  return contexts[element.waypointContextKey];
};

window.onload = function () {
  if (oldWindowLoad) {
    oldWindowLoad();
  }

  Context.refreshAll();
};

Waypoint.requestAnimationFrame = function (callback) {
  var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
  requestFn.call(window, callback);
};

Waypoint.Context = Context;

function byTriggerPoint(a, b) {
  return a.triggerPoint - b.triggerPoint;
}

function byReverseTriggerPoint(a, b) {
  return b.triggerPoint - a.triggerPoint;
}

var groups = {
  vertical: {},
  horizontal: {}
}; // var Waypoint = window.Waypoint

/* http://imakewebthings.com/waypoints/api/group */

function Group(options) {
  this.name = options.name;
  this.axis = options.axis;
  this.id = this.name + '-' + this.axis;
  this.waypoints = [];
  this.clearTriggerQueues();
  groups[this.axis][this.name] = this;
}
/* Private */


Group.prototype.add = function (waypoint) {
  this.waypoints.push(waypoint);
};
/* Private */


Group.prototype.clearTriggerQueues = function () {
  this.triggerQueues = {
    up: [],
    down: [],
    left: [],
    right: []
  };
};
/* Private */


Group.prototype.flushTriggers = function () {
  for (var direction in this.triggerQueues) {
    var waypoints = this.triggerQueues[direction];
    var reverse = direction === 'up' || direction === 'left';
    waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);

    for (var i = 0, end = waypoints.length; i < end; i += 1) {
      var waypoint = waypoints[i];

      if (waypoint.options.continuous || i === waypoints.length - 1) {
        waypoint.trigger([direction]);
      }
    }
  }

  this.clearTriggerQueues();
};
/* Private */


Group.prototype.next = function (waypoint) {
  this.waypoints.sort(byTriggerPoint);
  var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
  var isLast = index === this.waypoints.length - 1;
  return isLast ? null : this.waypoints[index + 1];
};
/* Private */


Group.prototype.previous = function (waypoint) {
  this.waypoints.sort(byTriggerPoint);
  var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
  return index ? this.waypoints[index - 1] : null;
};
/* Private */


Group.prototype.queueTrigger = function (waypoint, direction) {
  this.triggerQueues[direction].push(waypoint);
};
/* Private */


Group.prototype.remove = function (waypoint) {
  var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);

  if (index > -1) {
    this.waypoints.splice(index, 1);
  }
};
/* Public */

/* http://imakewebthings.com/waypoints/api/first */


Group.prototype.first = function () {
  return this.waypoints[0];
};
/* Public */

/* http://imakewebthings.com/waypoints/api/last */


Group.prototype.last = function () {
  return this.waypoints[this.waypoints.length - 1];
};
/* Private */


Group.findOrCreate = function (options) {
  return groups[options.axis][options.name] || new Group(options);
};

Waypoint.Group = Group; // var Waypoint = window.Waypoint

function isWindow(element) {
  return element === element.window;
}

function getWindow(element) {
  if (isWindow(element)) {
    return element;
  }

  return element.defaultView;
}

function NoFrameworkAdapter(element) {
  this.element = element;
  this.handlers = {};
}

NoFrameworkAdapter.prototype.innerHeight = function () {
  var isWin = isWindow(this.element);
  return isWin ? this.element.innerHeight : this.element.clientHeight;
};

NoFrameworkAdapter.prototype.innerWidth = function () {
  var isWin = isWindow(this.element);
  return isWin ? this.element.innerWidth : this.element.clientWidth;
};

NoFrameworkAdapter.prototype.off = function (event, handler) {
  function removeListeners(element, listeners, handler) {
    for (var i = 0, end = listeners.length - 1; i < end; i++) {
      var listener = listeners[i];

      if (!handler || handler === listener) {
        element.removeEventListener(listener);
      }
    }
  }

  var eventParts = event.split('.');
  var eventType = eventParts[0];
  var namespace = eventParts[1];
  var element = this.element;

  if (namespace && this.handlers[namespace] && eventType) {
    removeListeners(element, this.handlers[namespace][eventType], handler);
    this.handlers[namespace][eventType] = [];
  } else if (eventType) {
    for (var ns in this.handlers) {
      removeListeners(element, this.handlers[ns][eventType] || [], handler);
      this.handlers[ns][eventType] = [];
    }
  } else if (namespace && this.handlers[namespace]) {
    for (var type in this.handlers[namespace]) {
      removeListeners(element, this.handlers[namespace][type], handler);
    }

    this.handlers[namespace] = {};
  }
};
/* Adapted from jQuery 1.x offset() */


NoFrameworkAdapter.prototype.offset = function () {
  if (!this.element.ownerDocument) {
    return null;
  }

  var documentElement = this.element.ownerDocument.documentElement;
  var win = getWindow(this.element.ownerDocument);
  var rect = {
    top: 0,
    left: 0
  };

  if (this.element.getBoundingClientRect) {
    rect = this.element.getBoundingClientRect();
  }

  return {
    top: rect.top + win.pageYOffset - documentElement.clientTop,
    left: rect.left + win.pageXOffset - documentElement.clientLeft
  };
};

NoFrameworkAdapter.prototype.on = function (event, handler) {
  var eventParts = event.split('.');
  var eventType = eventParts[0];
  var namespace = eventParts[1] || '__default';
  var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {};
  var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || [];
  nsTypeList.push(handler);
  this.element.addEventListener(eventType, handler);
};

NoFrameworkAdapter.prototype.outerHeight = function (includeMargin) {
  var height = this.innerHeight();
  var computedStyle;

  if (includeMargin && !isWindow(this.element)) {
    computedStyle = window.getComputedStyle(this.element);
    height += parseInt(computedStyle.marginTop, 10);
    height += parseInt(computedStyle.marginBottom, 10);
  }

  return height;
};

NoFrameworkAdapter.prototype.outerWidth = function (includeMargin) {
  var width = this.innerWidth();
  var computedStyle;

  if (includeMargin && !isWindow(this.element)) {
    computedStyle = window.getComputedStyle(this.element);
    width += parseInt(computedStyle.marginLeft, 10);
    width += parseInt(computedStyle.marginRight, 10);
  }

  return width;
};

NoFrameworkAdapter.prototype.scrollLeft = function () {
  var win = getWindow(this.element);
  return win ? win.pageXOffset : this.element.scrollLeft;
};

NoFrameworkAdapter.prototype.scrollTop = function () {
  var win = getWindow(this.element);
  return win ? win.pageYOffset : this.element.scrollTop;
};

NoFrameworkAdapter.extend = function () {
  var args = Array.prototype.slice.call(arguments);

  function merge(target, obj) {
    if (_typeof(target) === 'object' && _typeof(obj) === 'object') {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          target[key] = obj[key];
        }
      }
    }

    return target;
  }

  for (var i = 1, end = args.length; i < end; i++) {
    merge(args[0], args[i]);
  }

  return args[0];
};

NoFrameworkAdapter.inArray = function (element, array, i) {
  return array == null ? -1 : array.indexOf(element, i);
};

NoFrameworkAdapter.isEmptyObject = function (obj) {
  /* eslint no-unused-vars: 0 */
  for (var name in obj) {
    return false;
  }

  return true;
};

Waypoint.adapters.push({
  name: 'noframework',
  Adapter: NoFrameworkAdapter
});
Waypoint.Adapter = NoFrameworkAdapter;
module.exports = Waypoint;

/***/ }),

/***/ 2:
/*!************************************************************************!*\
  !*** multi ./resources/js/globals/header.js ./resources/js/article.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/iancollins/Documents/core/ocpa/ocpa-home/trunk/web/us-army-homepage/resources/js/globals/header.js */"./armydotmil.github.io/_js/header.js");
module.exports = __webpack_require__(/*! /Users/iancollins/Documents/core/ocpa/ocpa-home/trunk/web/us-army-homepage/resources/js/article.js */"./resources/js/article.js");


/***/ })

/******/ });