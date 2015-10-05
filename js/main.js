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

	"use strict";

	(function() {

	  var FizzBuzz = __webpack_require__(1);

	  var fizzBuzz = new FizzBuzz("Bull", "Shit");
	  var _userInputArray;

	  function _clearTable(anchor, table) {
	    if (table) {
	      anchor.removeChild(table);
	    }
	  }

	  fizzBuzz.read = function(startNode, endNode) {
	    _userInputArray = [parseInt(startNode.value), parseInt(endNode.value)];
	    this.input(_userInputArray[0], _userInputArray[1]);
	  }

	  fizzBuzz.write = function(node) {
	    var output = this.output();
	    var anchor = node;
	    var table = document.getElementById("results");
	    var newTable = document.createElement("table");
	    var newMessage = document.createElement("caption");
	    var newTableHead = document.createElement("thead");
	    var newTableBody = document.createElement("tbody");
	    var newTableHeaders = document.createElement("th");
	    var newTableRow = document.createElement("tr");

	    _clearTable(anchor, table);

	    anchor.appendChild(newTable).setAttribute("id", "results");
	    table = document.getElementById("results");
	    table.appendChild(newMessage).textContent = "Your Results";
	    table.appendChild(newTableHead).appendChild(newTableRow).appendChild(newTableHeaders)
	         .textContent = _userInputArray[0] + " to " + _userInputArray[1] + ":";
	    table.appendChild(newTableBody);

	    for(var i = 0; i < output.length; i++) {
	      var newTableRow = document.createElement("tr");
	      var newTableData = document.createElement("td");

	      table.lastChild.appendChild(newTableRow).appendChild(newTableData)
	           .textContent = output[i];
	    }
	  }

	  function handler(e) {
	    e.preventDefault();
	    fizzBuzz.read(document.getElementById("start-value"), document.getElementById("end-value"));
	    fizzBuzz.write(document.getElementById("fizz-buzz"));
	  }

	  document.getElementById("user-input").addEventListener("submit", handler, false);

	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function() {

	  var _generateOutput = __webpack_require__(2);

	  var _stringsArray = [];
	  var _outputArray;

	  var FizzBuzz = function(string1, string2) {
	    _stringsArray.push(string1, string2);
	  }

	  FizzBuzz.prototype = {
	    input: function(min, max) {
	      _outputArray = _generateOutput(min, max, _stringsArray);
	    },
	    output: function() {
	      return _outputArray;
	    }
	  }

	  module.exports = FizzBuzz;

	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	(function() {

	  function _generateOutput(min, max, strings) {
	    var string1 = strings[0] || "Fizz";
	    var string2 = strings[1] || "Buzz";
	    var outputArray = [];

	    for(var i = min; i <= max; i++) {
	      var output = "";

	      if (i % 3 === 0) {
	        output = string1;
	      }
	      if (i % 5 === 0) {
	        output += string2;
	      }
	      if (!output) {
	        output = i;
	      }
	      outputArray.push(output);
	    }

	    return outputArray;
	  }

	  module.exports = _generateOutput;

	})();


/***/ }
/******/ ]);
