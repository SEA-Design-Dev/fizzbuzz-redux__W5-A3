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
