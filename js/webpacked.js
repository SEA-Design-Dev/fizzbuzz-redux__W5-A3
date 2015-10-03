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

	  var FizzBuzz = __webpack_require__(1);
	  var Printlist = __webpack_require__(2);

	  var myFizzy = new FizzBuzz("front", "end");
	  var button = document.getElementById("submitBuzz");

	  button.addEventListener("click", function (e) {
	    e.preventDefault();

	    var min = parseInt(document.getElementById("first-value").value);
	    var max = parseInt(document.getElementById("second-value").value);
	    var createHead = document.createElement('h2');
	    var headText = "Values " + min + " to " + max;
	    // var createUl = document.createElement('ul');
	    var fizzBuzzList = document.getElementById("fizz-list");

	    myFizzy.input(min, max);

	    if (!document.getElementById("check-box").checked) {
	      while (fizzBuzzList.hasChildNodes()) {
	        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
	      }
	    }

	    if (isNaN(min) || isNaN(max)) {
	      alert("Please enter a number");
	    } else if (min >= max) {
	      alert("First value must be less than the second");
	    } else {

	      // Write the head
	      createHead.appendChild(document.createTextNode(headText)); // Create & append the h2
	      fizzBuzzList.appendChild(createHead);

	      var fizzArray = myFizzy.output();

	      Printlist(fizzBuzzList, fizzArray);

	      // for (var i = 0; i < fizzArray.length; i++) {
	      //   var listItem = document.createElement('li');
	      //   listItem.appendChild(document.createTextNode(fizzArray[i]));
	      //   createUl.appendChild(listItem);
	      // }

	      // // I want to just say here is my div, make a ul in there with this array
	      // fizzBuzzList.appendChild(createUl); // Append the ul

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

	  var _printList = function(elementID, array) {

	    // Pass in an ID and an array, Output a UL of the array in the ID
	    var createUl = document.createElement('ul');

	    for (var i = 0; i < array.length; i++) {
	      var createLi = document.createElement('li');
	      createLi.appendChild(document.createTextNode(array[i]));
	      createUl.appendChild(createLi);
	    }
	    elementID.appendChild(createUl);
	  };

	  return _printList;

	})();

	module.exports = Printlist;

	// Printlist.printlist(fizzBuzzList, fizzArray);






	    // var createUl = document.createElement('ul'); // Create UL
	    // var createHead = document.createElement('h2'); // Create H2
	    // var headText = "Values " + this.min + " to " + this.max; // H2 Text

	    // createHead.appendChild(document.createTextNode(headText)); // Create & append the h2
	    // elementID.appendChild(createHead);

	  //   for (var i = 0; i < array.length; i++) {
	  //       var listItem = document.createElement('li');
	  //       listItem.appendChild(document.createTextNode(fizzArray[i]));
	  //       createUl.appendChild(listItem);
	  //     }

	  //   for (var i = 0; i < array.length; i++) { // Loop through the array
	  //     var listItem = document.createElement('li'); // Create a li
	  //     listItem.appendChild(document.createTextNode(array[i])); // Attach a text node (the array value)
	  //     createUl.appendChild(listItem); // Append li + text to the ul
	  //   }
	  //   elementID.appendChild(createUl); // Append the ul
	  // };


/***/ }
/******/ ]);