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

	(function() {

	  "use strict";

	  var FizzBuzz = __webpack_require__(1); // Require the FizzBuzz module
	  var Printlist = __webpack_require__(2); // Require the Printlist module
	  var myFizzy = new FizzBuzz("front", "end"); // Instantiate FizzBuzz
	  var button = document.getElementById("submitBuzz"); // Variable with <button> id

	  button.addEventListener("click", function (e) {
	    e.preventDefault();

	    var min = parseInt(document.getElementById("first-value").value);
	    var max = parseInt(document.getElementById("second-value").value);
	    var createHead = document.createElement('h2');
	    var headText = "Values " + min + " to " + max;
	    var fizzBuzzList = document.getElementById("fizz-list");

	    myFizzy.input(min, max); // Pass in the min max to the input method

	    if (!document.getElementById("check-box").checked) { // If no checked box, then remove children
	      while (fizzBuzzList.hasChildNodes()) {
	        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
	      }
	    }

	    if (isNaN(min) || isNaN(max)) { // Alerts to enter values correctly
	      alert("Please enter a number");
	    } else if (min >= max) {
	      alert("First value must be less than the second");
	    } else {
	      // Write the head
	      createHead.appendChild(document.createTextNode(headText)); // Create & append the H2
	      fizzBuzzList.appendChild(createHead);
	      new Printlist(fizzBuzzList, myFizzy.output()); // Create the List
	    }

	  });
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	var FizzBuzz = (function () {

	  'use strict';

	  var _fizzBuzz = function (x, y) {
	    this.wordOne = x || "Fizz";
	    this.wordTwo = y || "Buzz";
	  };

	  var createArray = function(min, max, word1, word2, array) {
	    for (var i = min; i <= max; i++) {
	      array.push(i % 15 === 0 ? word1 + word2 : i % 3 === 0 ? word1 : i % 5 === 0 ? word2 : i);
	    }
	    return array;
	  };

	  _fizzBuzz.prototype = {

	    input: function (min, max) {
	      this.fizzArray = [];
	      createArray(min, max, this.wordOne, this.wordTwo, this.fizzArray);
	    },

	    output: function () {
	      return this.fizzArray;
	    }
	  };

	  return _fizzBuzz;

	}());

	module.exports = FizzBuzz;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Printlist = (function () {

	  "use strict";

	  var _printList = function(elementID, array) {

	    var createUl = document.createElement('ul'); // Create a UL

	    for (var i = 0; i < array.length; i++) {
	      var createLi = document.createElement('li');  // Create an LI for each value in the array
	      createLi.appendChild(document.createTextNode(array[i])); // Create Text Node with array the value; append to LI
	      createUl.appendChild(createLi); // Append LI to UL
	    }
	    elementID.appendChild(createUl); // Append UL to elementID
	  };

	  return _printList;

	})();

	module.exports = Printlist; // Export the function


/***/ }
/******/ ]);