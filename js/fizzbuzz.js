'use strict'

var FizzBuzz = (function() {

  var fizzBuzz = function (a, b) {
    this.lowNumber = a;
    this.highNumber = b;
  }

  fizzBuzz.prototype.readArray = function() {
    var array = [];

    for (var i = 0; i < (this.highNumber - this.lowNumber + 1); i++) {

      array[i] = this.lowNumber + i;
        if (array[i] === 0) {
          array[i] = 0;
        }
        else if (array[i] % 3 === 0 && array[i] % 5 === 0){
            array[i] = "fizzbuzz"
        }
        else if (array[i] % 5 === 0){
            array[i] = "buzz"
        }
        else if (array[i] % 3 === 0){
            array[i] = "fizz"
        }

      }
      return array;
  };

  fizzBuzz.prototype.writeArray = function (array) {
    this.array = array;

    var el = document.getElementById('FizzBuzz');

    el.removeChild(el.firstChild);

    var fizzBuzzData = document.createElement('ul');

    for (var j = 0; j < array.length; j++) {
      var temp = document.createElement('li');
      var tempText = document.createTextNode(array[j]);
      temp.appendChild(tempText);
      fizzBuzzData.appendChild(temp);
    }

    document.getElementById('FizzBuzz').appendChild(fizzBuzzData);

  };

  return fizzBuzz;

}());




