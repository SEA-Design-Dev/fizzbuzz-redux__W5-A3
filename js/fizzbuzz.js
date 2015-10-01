'use strict'

var FizzBuzz = (function() {

  var array = [];
  var fizzBuzz = function (firstWord, secondWord) {

    if (firstWord !== '') {
      this.firstWord = firstWord;
    }
    else {
      this.firstWord = 'Fizz';
    }

    if (secondWord !== '') {
      this.secondWord = secondWord;
    }
    else {
      this.secondWord = 'Buzz';
    }

    console.log(this.firstWord);

  }

  fizzBuzz.prototype.readArray = function(lowNumber, highNumber) {

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
    console.log(array);
    return array;
  };

  fizzBuzz.prototype.writeArray = function (el) {

    var fizzBuzzData = document.createElement('ul');

    for (var j = 0; j < array.length; j++) {
      var temp = document.createElement('li');
      var tempText = document.createTextNode(array[j]);
      temp.appendChild(tempText);
      fizzBuzzData.appendChild(temp);
    }

      el.appendChild(fizzBuzzData);

    return el;
  };

  return fizzBuzz;

}());
