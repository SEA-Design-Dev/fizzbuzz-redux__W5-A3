'use strict';

var FizzBuzz = (function() { // IIFE
  var Fizzbuzz = function(newFizz, newBuzz) { // the constructor!
    this.result = [];
    this.newFizz = newFizz || "Fizz";
    this.newBuzz = newBuzz || "Buzz";
    // assign stuff here that's fairly constant
    // unique to instance, may or may not change
  };

  Fizzbuzz.prototype.read = function(startNum, endNum) {

    for (var i = startNum; i <= endNum; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.result.push(this.newFizz + this.newBuzz);
      }
      else if (i % 5 === 0) {
        this.result.push(this.newBuzz);
      }
      else if (i % 3 === 0) {
        this.result.push(this.newFizz);
      }
      else {
        this.result.push(i);
      }
    }
    console.log(this.result);

  };

  Fizzbuzz.prototype.write = function () {
    document.getElementById("output").innerHTML = "";
    var startVal = Number(document.getElementById("startVal").value);
    var endVal = Number(document.getElementById("endVal").value);

    document.getElementById("start").innerHTML = startVal;
    document.getElementById("end").innerHTML = endVal;

    // createElement
    for (var i = 0; i < this.result.length; i++) {
      var span = document.createElement("span");
      var text = this.result[i];
      var att = document.createAttribute("class"); // Add class attribute
      span.appendChild(document.createTextNode(text));
      att.value = text;
      span.setAttributeNode(att);
      document.getElementById("output").appendChild(span);
    }
  };

  return Fizzbuzz;

}());

  // A prototype function that can accept new words to replace 'fizz' 'buzz'
  // Use 'boop' and 'beep' to test!

  // NOT WORKING YET
  // Fizzbuzz.prototype.changeString = function() {
  //   var newFizz = document.getElementById("newFizz").value;
  //   var newBuzz = document.getElementById("newBuzz").value;
  //   // change to newFizz
  //   document.getElementsByClassName("Fizz").innerHTML = newFizz;
  //   // change to newBuzz
  //   document.getElementsByClassName("Buzz").innerHTML = newBuzz;
  //   // change to newFizz + newBuzz
  //   document.getElementsByClassName("FizzBuzz").innerHTML = newFizz + newBuzz;
  // };


