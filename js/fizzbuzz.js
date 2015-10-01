'use strict';

var FizzBuzz = (function() { // IIFE

  var Fizzbuzz = function(newFizz, newBuzz) { // the constructor!
    this.result = [];
    this.newFizz = newFizz || "Fizz";
    this.newBuzz = newBuzz || "Buzz";
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
    console.log(this.result); // For debugging
  };

  Fizzbuzz.prototype.write = function () {
    document.getElementById("output").innerHTML = "";
    var startVal = Number(document.getElementById("startVal").value);
    var endVal = Number(document.getElementById("endVal").value);

    document.getElementById("start").innerHTML = startVal;
    document.getElementById("end").innerHTML = endVal;

    // createElement
    for (var i = 0; i < this.result.length; i++) {
      var p = document.createElement("p");
      var text = this.result[i];
      var att = document.createAttribute("class"); // Add class attribute
      p.appendChild(document.createTextNode(text));
      att.value = text; // Specify what class name to attach
      p.setAttributeNode(att);
      document.getElementById("output").appendChild(p);
    }
  };
  return Fizzbuzz;
}());


