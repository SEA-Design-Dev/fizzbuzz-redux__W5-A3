'use strict';

var fizzbuzz = new FizzBuzz();

// On Click, run the .read and .write methods
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  // var fizzbuzz = new FizzBuzz();
  var startVal = Number(document.getElementById("startVal").value);
  var endVal = Number(document.getElementById("endVal").value);
  fizzbuzz.read(startVal, endVal);
  fizzbuzz.write();

  console.log(startVal);
  console.log(endVal);
  document.getElementById("startVal").value = "";
  document.getElementById("endVal").value = "";
});

// On Click, run the .changeString method
document.getElementById("changeString").addEventListener("click", function(e) {
  e.preventDefault();
  // var fizzbuzz = new FizzBuzz();
  var newFizz = document.getElementById("newFizz").value;
  var newBuzz = document.getElementById("newBuzz").value;

  fizzbuzz.changeString(newFizz, newBuzz); // only this not working

  console.log(newFizz);
  console.log(newBuzz);
  document.getElementById("newFizz").value = "";
  document.getElementById("newBuzz").value = "";

});
