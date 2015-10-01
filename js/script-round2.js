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
    var startVal = Number(document.getElementById("startVal").value); // input start value
    var endVal = Number(document.getElementById("endVal").value);

    document.getElementById("start").innerHTML = startVal;
    document.getElementById("end").innerHTML = endVal;
    // document.getElementById("output").innerHTML = this.result;

    // createElement
    for (var i = 0; i < this.result.length; i++) {
      var span = document.createElement("span");
      var text = this.result[i];
      span.appendChild(document.createTextNode(text));
      document.getElementById("output").appendChild(span);
    }
    // this.result = [];

  };
  return Fizzbuzz;

}());

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  var fizzbuzz = new FizzBuzz();
  // input start value
  var startVal = Number(document.getElementById("startVal").value);
  // input end value
  var endVal = Number(document.getElementById("endVal").value);
  fizzbuzz.read(startVal, endVal);
  fizzbuzz.write();
  console.log(startVal);
  console.log(endVal);
  document.getElementById("startVal").value = "";
  document.getElementById("endVal").value = "";
});





