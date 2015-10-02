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

	'use strict';

	var FizzyBuzzy = __webpack_require__(1);

	(function() {
	  var word1 = 'Fla';
	  var word2 = 'Floo';
	  var fizzbuzz = new FizzyBuzzy(word1,word2);  
	  var elSubmit = document.getElementById('goForFizzBuzz');
	  
	  // render function
	  function renderFizzBuzz(destination) {
	    var startValue = parseInt(document.getElementById('beginValue').value);
	    var stopValue = parseInt(document.getElementById('endValue').value);
	    fizzbuzz.input(startValue,stopValue);

	    while (destination.firstChild) {
	      destination.removeChild(destination.firstChild);
	    }
	    if (startValue < stopValue) {
	      var heading = document.createElement('h2');
	      heading.appendChild(document.createTextNode('Your ' + word1 + word2 + ' from ' + startValue + ' to ' + stopValue + ':'));
	      destination.appendChild(heading);
	      var newList = document.createElement('ul');
	      destination.appendChild(newList);
	    }
	    for (var i = 0; i < fizzbuzz.output().length; i++) {
	      var resultItem = document.createElement('li');
	      resultItem.appendChild(document.createTextNode(fizzbuzz.output()[i]));
	      newList.appendChild(resultItem);
	    }
	    
	    
	    document.getElementById('beginValue').value = '';
	    document.getElementById('endValue').value = '';

	  };

	  // event listener
	  elSubmit.addEventListener('click', function(evt) {
	    evt.preventDefault();
	    renderFizzBuzz(document.getElementById('fizzbuzz'));
	  });

	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = (function() {  
	  // defining _FizzBuzz as a constructor function
	  var _FizzBuzz = function(word1,word2) {
	    this.word1 = word1 || 'Fizz';
	    this.word2 = word2 || 'Buzz';
	  }; 
	  
	  // PRIVATE function, not a method on _FizzBuzz
	  // start and stop come from the INPUT function where doFizzBuzz is called
	  function doFizzBuzz(start,stop,word1,word2) {  
	    // array to store the results
	    var resultArr = [];
	    // for loop to generate results
	    for (var i = start; i < stop + 1; i++) {
	      if (i % 3 === 0 && i % 5 !== 0) {
	        resultArr.push(word1); 
	      } else if (i % 5 === 0 && i % 3 !== 0) {
	        resultArr.push(word2); 
	      } else if (i % 3 === 0 && i % 5 === 0) {
	        resultArr.push(word1 + word2); 
	      } else {
	        resultArr.push(i); 
	      }
	    }
	    // return the array so it can be assigned to this.result in INPUT
	    return resultArr; 
	  };
	  
	  _FizzBuzz.prototype.input = function(min,max) {
	    this.min = min;
	    this.max = max + 1;
	    // pass values into doFizzBuzz
	    this.result = doFizzBuzz(min,max,this.word1,this.word2);
	    // error checking
	    if (min >= max) {
	      alert('Your stop value must be larger than your start value.');
	    }
	  };
	  
	  _FizzBuzz.prototype.output = function() { 
	    return this.result;
	  };
	  return _FizzBuzz; 
	})();


/***/ }
/******/ ]);