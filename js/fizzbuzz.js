'use strict';

var FizzBuzz = (function() { // IIFE
  var Fizzbuzz = function() { // the constructor!
    this.result = [];
    // assign stuff here that's fairly constant
    // unique to instance, may or may not change
  };

  Fizzbuzz.prototype.read = function(startNum, endNum) {
    for (var i = startNum; i <= endNum; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.result.push("FizzBuzz");
      }
      else if (i % 5 === 0) {
        this.result.push("Buzz");
      }
      else if (i % 3 === 0) {
        this.result.push("Fizz");
      }
      else {
        this.result.push(i);
      }
    }
    console.log(this.result);
    return this.result;
  };

  Fizzbuzz.prototype.write = function() {
    document.getElementById("output").innerHTML = "";
    var startVal = Number(document.getElementById("startVal").value);
    var endVal = Number(document.getElementById("endVal").value);

    document.getElementById("start").innerHTML = startVal;
    document.getElementById("end").innerHTML = endVal;
    // document.getElementById("output").innerHTML = this.result;

    // createElement
    for (var i = 0; i < this.result.length; i++) {
      var span = document.createElement("span");
      var text = this.result[i];
      var att = document.createAttribute("class"); // Add class
      span.appendChild(document.createTextNode(text));
      att.value = text;
      span.setAttributeNode(att);
      document.getElementById("output").appendChild(span);
    }
  };

  // A prototype function that can accept new words to replace 'fizz' 'buzz'
  // Use 'boop' and 'beep' to test!
  Fizzbuzz.prototype.changeString = function(x, y) {
    var newFizz = document.getElementById("newFizz").value;
    var newBuzz = document.getElementById("newBuzz").value;

    for (var i = 0; i < this.result.length; i++) {
      // if string is "Fizz", change to var newFizz
      if (this.result[i] == "Fizz") {
        // change to newFizz
        document.getElementsByClassName("Fizz").innerHTML = newFizz;
      }
      else if (this.result[i] == "Buzz") {
        // change to newBuzz
        document.getElementsByClassName("Buzz").innerHTML = newBuzz;
      }
      else if (this.result[i] == "FizzBuzz") {
        // change to newFizz + newBuzz
        document.getElementsByClassName("FizzBuzz").innerHTML = newFizz + newBuzz;
      }
    }
  };

  return Fizzbuzz;

}());
