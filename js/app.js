/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var fizzbuzz = __webpack_require__(1);
	var modifyArray = __webpack_require__(2);

	function renderFizzBuzz (name, lowId, highId, divId) {
	  var game, lowNum, highNum, id, heading, hText, print;
	  game = name;
	  lowNum = parseInt(document.getElementById(lowId).value);
	  highNum = parseInt(document.getElementById(highId).value);
	  id = divId;

	  var writeNums = document.getElementById(id);
	  writeNums.innerHTML = "";
	  heading = document.createElement("h2");
	  hText = "<em>You chose the numbers " + lowNum + " and " + highNum + ".</em>";
	  heading.innerHTML = hText;
	  writeNums.appendChild(heading);

	  if (game.input().length > 0) {
	    game.input().length = 0;
	  }

	  game.input(lowNum, highNum);
	  fizzBuzzResults = game.output();

	  var writeFB = document.createElement("p");
	  writeFB.innerHTML = modifyArray(fizzBuzzResults, game.fizz, game.buzz, game.fizzbuzz);
	  writeNums.appendChild(writeFB);
	}

	var myFizzBuzz = new fizzbuzz("Shmizz", "Shmuzz");

	var formId = document.getElementById("numbers");
	formId.addEventListener("submit", function(e) {
	  e.preventDefault();
	  renderFizzBuzz(myFizzBuzz, "low", "high", "displayNums");
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var fizzbuzz = (function() {
	  var _fizzBuzz = function(fizz, buzz) {
	    this.fizzbuzz = fizz + buzz || "Fizzbuzz";
	    this.fizz = fizz || "Fizz";
	    this.buzz = buzz || "Buzz";
	    this.nums = [];
	  };

	  _fizzBuzz.prototype = {
	    input: function(low, high) {

	      this.low = low;
	      this.high = high;

	      this.nums.push(low);
	      this.nums.push(high);

	    return this.nums;
	    },

	    output: function() {
	      var input, resultArray;

	      lowNumber = this.nums[0];
	      highNumber = this.nums[1];
	      resultArray = [];

	      for (var i = lowNumber; i <= highNumber; i++) {
	        if ((i % 3 === 0) && (i % 5 === 0)) {
	          resultArray.push(this.fizzbuzz);
	        }
	        else if (i % 3 === 0) {
	          resultArray.push(this.fizz);
	        }
	        else if (i % 5 === 0) {
	          resultArray.push(this.buzz);
	        } else {
	          resultArray.push(i);
	        }
	      }
	      return resultArray;
	    },
	  };
	  return _fizzBuzz;
	}());

	module.exports = fizzbuzz;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function modifyArray(resultsArray, string1, string2, string3) {
	  this.resultsArray = resultsArray;
	  this.string1 = string1;
	  this.string2 = string2;
	  this.string3 = string3;

	  var print = '';

	  for (i = 0; i < this.resultsArray.length; i++) {
	    if (this.resultsArray[i] === this.string1) {
	      print += "<span class='" + "s-" + this.string1 + "'>" + this.resultsArray[i] + "</span>" + ' ';
	    }
	    else if (this.resultsArray[i] === this.string2) {
	      print += "<span class='" + "s-" + this.string2 + "'>" + this.resultsArray[i] +"</span>" + ' ';
	    }
	    else if (this.resultsArray[i] === this.string3) {
	      print += "<span class='" + "s-" + this.string3 + "'>" + this.resultsArray[i] +"</span>" + ' ';
	    }
	    else print += this.resultsArray[i] + ' ';
	  }
	  return print;
	}

	module.exports = modifyArray;


/***/ }
/******/ ]);