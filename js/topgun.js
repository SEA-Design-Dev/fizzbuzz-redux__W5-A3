(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

module.exports = (function() {

  var array = [];
  var fizzBuzz = function (firstWord, secondWord) {

    if (!firstWord) {
      this.firstWord = "Top";
    }
    else {
      this.firstWord = firstWord;
    }

    if (!secondWord) {
      this.secondWord = "Gun";
    }
    else {
      this.secondWord = secondWord;
    }
  }

  fizzBuzz.prototype.input = function(lowNumber, highNumber) {

    for (var i = 0; i < (highNumber - lowNumber + 1); i++) {

      array[i] = lowNumber + i;
        if (array[i] === 0) {
          array[i] = 0;
        }
        else if (array[i] % 3 === 0 && array[i] % 5 === 0){
            array[i] = this.firstWord + this.secondWord
        }
        else if (array[i] % 5 === 0){
            array[i] = this.secondWord
        }
        else if (array[i] % 3 === 0){
            array[i] = (this.firstWord)
        }
      }
  };

  fizzBuzz.prototype.output = function () {

    return array;

  };

  return fizzBuzz;

}());

},{}],2:[function(require,module,exports){
'use strict'

var FizzBuzz = require('./fizzbuzz.js');

var form = document.getElementById('form');
form.addEventListener('submit', function(e) {

  e.preventDefault();

  var el = document.getElementById('FizzBuzz');
  el.removeChild(el.firstChild);

  var low = Number(form.elements.lowNumber.value);
  var high = Number(form.elements.highNumber.value);

  var wordOne = form.elements.fizzOption.value;
  var wordTwo = form.elements.buzzOption.value;

  var buzzer = new FizzBuzz(wordOne, wordTwo);

  buzzer.input(low, high);

  var fizzBuzzData = document.createElement('ul');

    for (var j = 0; j < buzzer.output().length; j++) {
      var temp = document.createElement('li');
      var tempText = document.createTextNode(buzzer.output()[j]);
      temp.appendChild(tempText);
      fizzBuzzData.appendChild(temp);
    }

    el.appendChild(fizzBuzzData);

});

},{"./fizzbuzz.js":1}]},{},[2]);
