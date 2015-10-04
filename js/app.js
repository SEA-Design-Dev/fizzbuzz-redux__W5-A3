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

	function runGame (name, lowId, highId, divId) {
	  var game, lowNum, highNum, id, print;
	  game = name;
	  lowNum = parseInt(document.getElementById(lowId).value);
	  highNum = parseInt(document.getElementById(highId).value);
	  id = divId;

	  writeNums = document.getElementById(id);
	  writeNums.innerHTML = "";
	  var heading = document.createElement("h2");
	  var hText = "<em>You chose the numbers " + lowNum + " and " + highNum + ".</em>";
	  heading.innerHTML = hText;
	  writeNums.appendChild(heading);

	  if (game.input().length > 0) {
	    game.input().length = 0;
	  }

	  game.input(lowNum, highNum);
	  fizzBuzzResults = game.output();

	  var modifyArray = function() {
	    var print = '';

	    for (i = 0; i < fizzBuzzResults.length; i++) {
	      if (fizzBuzzResults[i] === game.fizz) {
	        print += "<span class='fizz'>" + fizzBuzzResults[i] + "</span>" + ' ';
	      }
	      else if (fizzBuzzResults[i] === game.buzz) {
	        print += "<span class='buzz'>" + fizzBuzzResults[i] +"</span>" + ' ';
	      }
	      else if (fizzBuzzResults[i] === game.fizzbuzz) {
	        print += "<span class='fizzbuzz'>" + fizzBuzzResults[i] +"</span>" + ' ';
	      }
	      else print += fizzBuzzResults[i] + ' ';
	    }
	    return print;
	  };

	  writeFB = document.createElement("p");
	  writeFB.innerHTML = modifyArray();
	  writeNums.appendChild(writeFB);
	}

	var myFizzBuzz = new fizzbuzz("Shmizz", "Shmuzz");

	var formId = document.getElementById("numbers");
	formId.addEventListener("submit", function(e) {
	  e.preventDefault();
	  runGame(myFizzBuzz, "low", "high", "displayNums");
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var fizzbuzz = (function() {
	  var _fizzBuzz = function(fizz, buzz) {
	    this.fizzbuzz = fizz + buzz || "fizzbuzz";
	    this.fizz = fizz || "fizz";
	    this.buzz = buzz || "buzz";
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


/***/ }
/******/ ]);