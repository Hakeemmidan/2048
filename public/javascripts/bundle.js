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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/background.js":
/*!******************************************!*\
  !*** ./public/javascripts/background.js ***!
  \******************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background =
/*#__PURE__*/
function () {
  function Background(game) {
    _classCallCheck(this, Background);

    this.cellHeight = game.cellHeight;
    this.gameHeight = game.gameHeight;
    this.padding = game.padding;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw(ctx) {
      var gridLimit = this.gameHeight;
      var increment = this.cellHeight + this.padding;

      for (var col = 0; col <= gridLimit; col += increment) {
        for (var row = 0; row <= gridLimit; row += increment) {
          ctx.beginPath();
          ctx.rect(row, col, this.cellHeight, this.cellHeight);
          ctx.fillStyle = '#1876b5';
          ctx.fill();
        }
      }
    }
  }]);

  return Background;
}();

/***/ }),

/***/ "./public/javascripts/cell.js":
/*!************************************!*\
  !*** ./public/javascripts/cell.js ***!
  \************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cell =
/*#__PURE__*/
function () {
  function Cell(id, game, location, value) {
    _classCallCheck(this, Cell);

    this.id = id;
    this.cellHeight = game.cellHeight;
    this.gameHeight = game.gameHeight;
    this.padding = game.padding;
    this.position = {
      x: location[0],
      y: location[1]
    };
    this.game = game;
    this.value = value;
    this.maxSpeed = 70;
    this.speed = 0;
    this.movementAxis = 'x';
    this.backgroundColors = {
      2: '#a7d3fa',
      4: '#82c2fa',
      8: '#ffa500',
      16: '#ff8400',
      32: '#e36200',
      64: '#bf0000',
      128: '#e8dd4a',
      256: '#bf8104',
      512: '#ff009d',
      1024: '#fc0061',
      2048: '#fa0000'
    };
    this.fontColors = {
      2: '#1876b5',
      4: '#1876b5'
    };
  }

  _createClass(Cell, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.value > 2048 ? '#000000' : this.backgroundColors[this.value];
      ctx.fillRect(this.position.x, this.position.y, this.cellHeight, this.cellHeight);
      ctx.font = '60px sans-serif';
      ctx.fillStyle = this.value > 4 ? '#ffffff' : this.fontColors[this.value];

      if (this.value < 10) {
        ctx.fillText(String(this.value), this.position.x + 40, this.position.y + 80);
      } else if (this.value >= 10 && this.value < 100) {
        ctx.fillText(String(this.value), this.position.x + 23, this.position.y + 80);
      } else if (this.value >= 100 && this.value < 1000) {
        ctx.fillText(String(this.value), this.position.x + 9, this.position.y + 80);
      } else if (this.value >= 1000 && this.value < 10000) {
        ctx.font = '48px sans-serif';
        ctx.fillText(String(this.value), this.position.x + 5, this.position.y + 80);
      }
    }
  }, {
    key: "checkCollusion",
    value: function checkCollusion(cell) {
      if (this.bottom < cell.top || this.left > cell.right || this.top > cell.bottom || this.right < cell.left) {
        this.topColided = false;
        this.bottomColided = false;
        this.rightColided = false;
        this.leftColided = false;
        return false;
      } else {
        // top to bottom
        if (cell.speed < 0 && cell.movementAxis === 'y' && this.value === cell.value) {
          this.game.mergeCells(this, cell, Object.values(this.position));
        } else if (this.speed < 0 && this.movementAxis === 'y' && this.value === cell.value) {
          this.game.mergeCells(this, cell, Object.values(cell.position));
        } else if (this.speed < 0 && this.movementAxis === 'y') {
          this.topColided = true;
          this.speed = 0;
          this.position['y'] = cell.position.y + this.padding + this.cellHeight;
        } else if (cell.speed < 0 && cell.movementAxis === 'y') {
          cell.topColided = true;
          cell.speed = 0;
          cell.position['y'] = this.position.y + cell.padding + cell.cellHeight;
        } // bottom to top
        else if (this.speed > 0 && this.movementAxis === 'y' && this.value === cell.value) {
            this.game.mergeCells(this, cell, Object.values(cell.position));
          } else if (cell.speed > 0 && cell.movementAxis === 'y' && this.value === cell.value) {
            this.game.mergeCells(this, cell, Object.values(this.position));
          } else if (cell.speed > 0 && cell.movementAxis === 'y') {
            cell.bottomColided = true;
            cell.speed = 0;
            cell.position['y'] = this.position.y - cell.padding - cell.cellHeight;
          } else if (this.speed > 0 && this.movementAxis === 'y') {
            this.bottomColided = true;
            this.speed = 0;
            this.position['y'] = cell.position.y - this.padding - this.cellHeight;
          } // left to right
          else if (this.speed > 0 && this.movementAxis === 'x' && this.value === cell.value) {
              this.game.mergeCells(this, cell, Object.values(cell.position));
            } else if (cell.speed > 0 && cell.movementAxis === 'x' && this.value === cell.value) {
              this.game.mergeCells(this, cell, Object.values(this.position));
            } else if (this.speed > 0 && this.movementAxis === 'x') {
              this.rightColided = true;
              this.speed = 0;
              this.position['x'] = cell.position.x - this.padding - this.cellHeight;
            } else if (cell.speed > 0 && cell.movementAxis === 'x') {
              cell.rightColided = true;
              cell.speed = 0;
              cell.position['x'] = this.position.x - cell.padding - cell.cellHeight;
            } // right to left
            else if (this.speed < 0 && this.movementAxis === 'x' && this.value === cell.value) {
                this.game.mergeCells(this, cell, Object.values(cell.position));
              } else if (cell.speed < 0 && cell.movementAxis === 'x' && this.value === cell.value) {
                this.game.mergeCells(this, cell, Object.values(this.position));
              } else if (this.speed < 0 && this.movementAxis === 'x') {
                this.leftColided = true;
                this.speed = 0;
                this.position['x'] = cell.position.x + this.padding + this.cellHeight;
              } else if (cell.speed < 0 && cell.movementAxis === 'x') {
                cell.leftColided = true;
                cell.speed = 0;
                cell.position['x'] = this.position.x + cell.padding + cell.cellHeight;
              }

        this.isCollided = true;
        return true;
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!deltaTime) return;
      this.position[this.movementAxis] += this.speed;

      if (this.position.x < 0) {
        this.speed = 0;
        this.position.x = 0;
      } else if (this.position.x > this.gameHeight - this.cellHeight - this.padding) {
        this.speed = 0;
        this.position.x = this.gameHeight - this.cellHeight - this.padding;
      } else if (this.position.y < 0) {
        this.speed = 0;
        this.position.y = 0;
      } else if (this.position.y > this.gameHeight - this.cellHeight - this.padding) {
        this.speed = 0;
        this.position.y = this.gameHeight - this.cellHeight - this.padding;
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (this.speed != 0) return; // if (this.rightColided) return

      this.movementAxis = 'x';
      this.speed = this.maxSpeed;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      if (this.speed != 0) return; // if (this.leftColided) return

      this.movementAxis = 'x';
      this.speed = -this.maxSpeed;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.speed != 0) return; // if (this.topColided) return

      this.movementAxis = 'y';
      this.speed = -this.maxSpeed; // Because canvas axis go from the top left of screen
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.speed != 0) return; // if (this.bottomColided) return

      this.movementAxis = 'y';
      this.speed = this.maxSpeed;
    }
  }, {
    key: "top",
    get: function get() {
      return this.position.y;
    }
  }, {
    key: "right",
    get: function get() {
      return this.position.x + this.cellHeight;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.position.y + this.cellHeight;
    }
  }, {
    key: "left",
    get: function get() {
      return this.position.x;
    }
  }]);

  return Cell;
}();

/***/ }),

/***/ "./public/javascripts/game.js":
/*!************************************!*\
  !*** ./public/javascripts/game.js ***!
  \************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./public/javascripts/background.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./public/javascripts/cell.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./public/javascripts/input.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game(gameHeight, cellHeight, padding) {
    _classCallCheck(this, Game);

    this.cellHeight = cellHeight;
    this.gameHeight = gameHeight;
    this.padding = padding;
    this.allLocations = this.generateAllLocations();
    this.gameStaticObjects = [];
    this.gameMovingObjects = [];
    this.currentScore = 0;
    this.bestScore = 0;
  }

  _createClass(Game, [{
    key: "generateAllLocations",
    value: function generateAllLocations() {
      // Generates all the locations where a cell can park
      var gridLimit = this.gameHeight + this.cellHeight;
      var increment = this.cellHeight + this.padding;
      var allLocations = [];

      for (var col = 0; col < gridLimit - increment; col += increment) {
        for (var row = 0; row < gridLimit - increment; row += increment) {
          allLocations.push([row, col]);
        }
      }

      return allLocations;
    } // Source : https://gist.github.com/gordonbrander/2230317

  }, {
    key: "generateCellId",
    value: function generateCellId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  }, {
    key: "setCookie",
    // Inspired by : https://www.w3schools.com/js/js_cookies.asp
    value: function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays);
      document.cookie = cname + "=" + cvalue;
    }
  }, {
    key: "getBestScoreFromCookie",
    value: function getBestScoreFromCookie() {
      this.bestScore = document.cookie.split('=')[0] === 'bestScore' ? document.cookie.split('=')[1] : 0;
    }
  }, {
    key: "calculateCurrentScore",
    value: function calculateCurrentScore() {
      var _this = this;

      this.currentScore = 0;
      this.gameMovingObjects.forEach(function (cell) {
        _this.currentScore += cell.value;
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.background = new _background__WEBPACK_IMPORTED_MODULE_0__["Background"](this);
      this.gameStaticObjects.push(this.background);
    } // VVVVVVVVVV adding, deleting, and merging cells END VVVVVVVVVV //

  }, {
    key: "generateRandomLocation",
    value: function generateRandomLocation() {
      var yesCellLocations = this.gameMovingObjects.map(function (cell) {
        return Object.values(cell.position);
      });
      var noCellLocations = this.allLocations.filter(function (loc) {
        return !JSON.stringify(yesCellLocations).includes(JSON.stringify(loc));
      }); // Used JSON.stringify b/c JS arrays don't use Arraay#inclues as expected

      var randomLocation = noCellLocations[parseInt(Math.random() * noCellLocations.length)];
      return randomLocation;
    }
  }, {
    key: "addCell",
    value: function addCell() {
      var _this2 = this;

      var randomValueArr = [2, 4];
      var randomValue = randomValueArr[parseInt(Math.random() * randomValueArr.length)];
      var that = this;
      setTimeout(function () {
        var randomLocation = that.generateRandomLocation();

        var id = _this2.generateCellId();

        var newCell = new _cell__WEBPACK_IMPORTED_MODULE_1__["Cell"](id, that, randomLocation, randomValue);
        that.gameMovingObjects.push(newCell);
        new _input__WEBPACK_IMPORTED_MODULE_2__["InputHandler"](newCell);
      }, 100);
    }
  }, {
    key: "deleteCellById",
    value: function deleteCellById(id) {
      var unwantedElementIdx = -1;

      for (var i = 0; i < this.gameMovingObjects.length; i++) {
        if (this.gameMovingObjects[i].id === id) {
          unwantedElementIdx = i;
          break;
        }
      }

      if (unwantedElementIdx === -1) return 'Not found';
      this.gameMovingObjects.splice(unwantedElementIdx, 1);
      return 'Deleted!';
    }
  }, {
    key: "mergeCells",
    value: function mergeCells(cell1, cell2, location) {
      var id = this.generateCellId();
      var newCell = new _cell__WEBPACK_IMPORTED_MODULE_1__["Cell"](id, this, location, cell1.value + cell2.value);
      this.gameMovingObjects.push(newCell);
      new _input__WEBPACK_IMPORTED_MODULE_2__["InputHandler"](newCell); // Delete old cells

      this.deleteCellById(cell1.id);
      this.deleteCellById(cell2.id);
    } // ^^^^^^^^^^ adding, deleting, and merging cells END ^^^^^^^^^^ //
    // ---------------------------------------------------------------------------------------- //
    // VVVVVVVVVV draw and update START VVVVVVVVVV //

  }, {
    key: "update",
    value: function update(deltaTime) {
      for (var i = 0; i < this.gameMovingObjects.length; i++) {
        var object1 = this.gameMovingObjects[i];

        for (var j = 0; j < this.gameMovingObjects.length; j++) {
          if (this.gameMovingObjects[i] === undefined || this.gameMovingObjects[j] === undefined) {
            continue;
          }

          if (!(this.gameMovingObjects[i].id === this.gameMovingObjects[j].id)) {
            var object2 = this.gameMovingObjects[j];
            object1.checkCollusion(object2);
          }
        }
      }

      if (this.currentScore > this.bestScore) {
        this.setCookie('bestScore', this.currentScore, 30);
      }

      this.gameMovingObjects.forEach(function (object) {
        return object.update(deltaTime);
      });
    }
  }, {
    key: "draw",
    value: function draw(ctx, currentScoreCtx, bestScoreCtx) {
      currentScoreCtx.fillStyle = '#1876b5';
      currentScoreCtx.fillRect(0, 0, 50, 50);
      currentScoreCtx.font = '22px sans-serif';
      currentScoreCtx.fillStyle = '#ffffff';
      this.calculateCurrentScore();

      if (this.currentScore < 10) {
        currentScoreCtx.fillText(String(this.currentScore), 19, 20);
      } else if (this.currentScore >= 10 && this.currentScore < 100) {
        currentScoreCtx.fillText(String(this.currentScore), 12, 20);
      } else if (this.currentScore >= 100 && this.currentScore < 1000) {
        currentScoreCtx.fillText(String(this.currentScore), 7, 20);
      } else if (this.currentScore >= 1000) {
        currentScoreCtx.fillText(String(this.currentScore), 0, 20);
      }

      bestScoreCtx.fillStyle = '#1876b5';
      bestScoreCtx.fillRect(0, 0, 80, 50);
      bestScoreCtx.font = '22px sans-serif';
      bestScoreCtx.fillStyle = '#ffffff';
      this.getBestScoreFromCookie();

      if (this.bestScore < 10) {
        bestScoreCtx.fillText(String(this.bestScore), 27, 20);
      } else if (this.bestScore >= 10 && this.bestScore < 100) {
        bestScoreCtx.fillText(String(this.bestScore), 20, 20);
      } else if (this.bestScore >= 100 && this.bestScore < 1000) {
        bestScoreCtx.fillText(String(this.bestScore), 15, 20);
      } else if (this.bestScore >= 1000) {
        bestScoreCtx.fillText(String(this.bestScore), 9.5, 20);
      }

      this.gameStaticObjects.forEach(function (object) {
        return object.draw(ctx);
      });
      this.gameMovingObjects.forEach(function (object) {
        return object.draw(ctx);
      });
    } // ^^^^^^^^^^ draw and update END ^^^^^^^^^^ //
    // ---------------------------------------------------------------------------------------- //
    // VVVVVVVVVV check game over START VVVVVVVVVV //
    // Gets a row at a certain y position

  }, {
    key: "getRow",
    value: function getRow(rowYPos) {
      var resultRows = [];
      this.gameMovingObjects.forEach(function (cell) {
        if (cell.position.y === rowYPos) {
          resultRows.push(cell);
        }
      });
      return resultRows;
    } // Gets a col at a certain x position

  }, {
    key: "getColumn",
    value: function getColumn(colXPos) {
      var resultCols = [];
      this.gameMovingObjects.forEach(function (cell) {
        if (cell.position.x === colXPos) {
          resultCols.push(cell);
        }
      });
      return resultCols;
    }
  }, {
    key: "hasConsecutiveEqualValues",
    value: function hasConsecutiveEqualValues(cells) {
      var resultBool = false;
      cells.forEach(function (cell, idx) {
        if (cells[idx + 1]) {
          if (cell.value === cells[idx + 1].value) {
            resultBool = true;
          }
        }
      });
      return resultBool;
    }
  }, {
    key: "getAllColumns",
    value: function getAllColumns() {
      var columns = [];

      for (var i = 0; i <= 375; i += 125) {
        columns.push(this.getColumn(i));
      }

      return columns;
    }
  }, {
    key: "getAllRows",
    value: function getAllRows() {
      var rows = [];

      for (var i = 0; i <= 375; i += 125) {
        rows.push(this.getRow(i));
      }

      return rows;
    }
  }, {
    key: "checkGameOver",
    value: function checkGameOver() {
      var _this3 = this;

      var rows = this.getAllRows();
      var columns = this.getAllColumns();
      this.gameOverBool = true;

      if (this.gameMovingObjects.length < 16) {
        return false;
      }

      rows.forEach(function (row) {
        row.sort(function (cell1, cell2) {
          return cell1.position.x - cell2.position.x;
        });

        if (_this3.hasConsecutiveEqualValues(row)) {
          _this3.gameOverBool = false;
        }
      });
      columns.forEach(function (col) {
        col.sort(function (cell1, cell2) {
          return cell1.position.y - cell2.position.y;
        });

        if (_this3.hasConsecutiveEqualValues(col)) {
          _this3.gameOverBool = false;
        }
      });
      return this.gameOverBool;
    } // ^^^^^^^^^^ check game over END ^^^^^^^^^^ //

  }]);

  return Game;
}();

/***/ }),

/***/ "./public/javascripts/index.js":
/*!*************************************!*\
  !*** ./public/javascripts/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./public/javascripts/game.js");

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext('2d');
  var currentScoreCanvas = document.getElementById('current-score-value-canvas');
  var currentScoreCtx = currentScoreCanvas.getContext('2d');
  var bestScoreCanvas = document.getElementById('best-score-value-canvas');
  var bestScoreCtx = bestScoreCanvas.getContext('2d');
  var padding = 10;
  var GAME_HEIGHT = 500;
  var CELL_HEIGHT = GAME_HEIGHT / 4 - padding;
  ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT);
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](GAME_HEIGHT, CELL_HEIGHT, padding);
  game.start();
  game.addCell();
  document.getElementById('new-game-button').addEventListener('click', function () {
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT);
    currentScoreCtx.clearRect(0, 0, 65, 50);
    bestScoreCtx.clearRect(0, 0, 80, 50);
    game.currentScore = 0;
    game.gameMovingObjects = [];
    game.gameOverBool = false;
    game.start();
    game.addCell();
    gameLoop();
  }); // Disable arrow key scrolling
  // Source : https://stackoverflow.com/a/8916697/7974948

  document.addEventListener("keydown", function (e) {
    if (e.repeat) return;

    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      game.addCell();
    }
  }, false); // Add cell on-click of AWSD as well

  document.addEventListener("keydown", function (e) {
    if ([87, 65, 83, 68].indexOf(e.keyCode) > -1) {
      if (e.repeat) return;
      game.addCell();
    }
  }, false);
  var lastTime = 0;

  function gameLoop(timeStamp) {
    var deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    currentScoreCtx.clearRect(0, 0, 65, 50);
    bestScoreCtx.clearRect(0, 0, 80, 50);
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx, currentScoreCtx, bestScoreCtx);
    var myReq = requestAnimationFrame(gameLoop);

    if (game.checkGameOver()) {
      cancelAnimationFrame(myReq);
      ctx.fillStyle = '#000000';
      ctx.globalAlpha = 0.85;
      ctx.fillRect(0, 0, GAME_HEIGHT - 10, GAME_HEIGHT - 10);
      ctx.font = '50px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('Game over', GAME_HEIGHT / 4, GAME_HEIGHT / 2);
    }
  }

  gameLoop();
});

/***/ }),

/***/ "./public/javascripts/input.js":
/*!*************************************!*\
  !*** ./public/javascripts/input.js ***!
  \*************************************/
/*! exports provided: InputHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHandler", function() { return InputHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(cell) {
  _classCallCheck(this, InputHandler);

  document.addEventListener('keydown', function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }

    if (e.repeat) return;

    switch (e.keyCode) {
      case 38:
      case 87:
        cell.moveUp();
        break;

      case 39:
      case 68:
        cell.moveRight();
        break;

      case 40:
      case 83:
        cell.moveDown();
        break;

      case 37:
      case 65:
        cell.moveLeft();
        break;

      default:
        break;
    }
  });
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map