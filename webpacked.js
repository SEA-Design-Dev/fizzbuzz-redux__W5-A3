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

	
	var FizzBuzz = __webpack_require__(1);

	// set words and create new instance of fizzbuzz object
	var wordOne, wordTwo, result;
	var fuzzBuzz = new FizzBuzz(wordOne || "fizz", wordTwo || "buzz");

	// set vars for button events
	var btnFizzBuzz = document.getElementById("form_submit");
	var btnWords = document.getElementById("form_words");

	//event function for fizzbuzz
	function fizzHandler(e) {
	  e.preventDefault();
	  var startVal = document.getElementById("number_start").value;
	  var endVal = document.getElementById("number_end").value;
	  fuzzBuzz.input(parseInt(startVal), parseInt(endVal));
	  result = fuzzBuzz.output();
	  renderHeading(startVal, endVal);
	  renderList();
	}

	function renderList() {
	  var fuzzList = document.createElement("ol");
	  var elResults = document.getElementById("results_fizzbuzz");
	  while (elResults.hasChildNodes()) {
	    elResults.removeChild(elResults.firstChild);
	  }
	  for (var i = 0; i < result.length; i++ ) {
	    var fuzzListItem = document.createElement("li");
	    fuzzListItem.appendChild(document.createTextNode(result[i]));
	    fuzzList.appendChild(fuzzListItem);
	    elResults.appendChild(fuzzList);
	  }
	}

	//render heading displaying number start to end
	function renderHeading(first, second) {
	  var elFirstNum = document.getElementById("firstnum");
	  var elLastNum = document.getElementById("secondnum");
	  elFirstNum.textContent = "";
	  elLastNum.textContent = "";
	  elFirstNum.textContent = " -- " + first + " to ";
	  elLastNum.textContent = second;
	}

	//event function for word change form
	function wordHandler(e) {
	  e.preventDefault();
	  wordOne = document.getElementById("word_one").value;
	  wordTwo = document.getElementById("word_two").value;
	  var elWordOne = document.getElementById("display_word_one");
	  var elWordTwo = document.getElementById("display_word_two");
	  fuzzBuzz = new FizzBuzz(wordOne, wordTwo);
	  elWordOne.textContent = "";
	  elWordTwo.textContent = "";
	  elWordOne.textContent = wordOne;
	  elWordTwo.textContent = wordTwo;
	}

	//event listeners
	btnFizzBuzz.addEventListener("submit", fizzHandler);
	btnWords.addEventListener("submit", wordHandler);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var FizzBuzz = __webpack_require__(2);

	module.exports = FizzBuzz;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict'

	var FizzBuzz = (function () {

	  var _fizzbuzz = function(word1, word2) {
	    this.word1 = word1;
	    this.word2 = word2;
	  };

	  var doFizzBuzz = function(start, end, word1, word2) {
	    var answer = [];
	    for (start; start <= end; start++) {
	      if ((start % 3 === 0) && (start % 5 === 0)) {
	        answer.push(word1 + word2);
	      } else if (start % 3 === 0) {
	        answer.push(word1);
	      } else if (start % 5 === 0) {
	        answer.push(word2);
	      } else {
	        answer.push(start);
	      }
	    }
	    return answer;
	  };

	  _fizzbuzz.prototype = {

	    input: function(min, max) {
	      this.min = min;
	      this.max = max;
	      this.result = doFizzBuzz(min, max, this.word1, this.word2);
	    },

	    output: function() {
	      return this.result;
	    }
	  };

	  return _fizzbuzz;
	})();

	module.exports = FizzBuzz



/***/ }
/******/ ]);