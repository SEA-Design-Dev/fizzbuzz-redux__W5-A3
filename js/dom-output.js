'use strict';

// On Click, run the .read and .write methods
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  var fizzbuzz = new FizzBuzz();

  var startVal = Number(document.getElementById("startVal").value);
  var endVal = Number(document.getElementById("endVal").value);
  fizzbuzz.read(startVal, endVal);
  fizzbuzz.write(document.getElementById("output"));

  var newFizz = document.getElementById("newFizz").value;
  var newBuzz = document.getElementById("newBuzz").value;

  console.log(startVal);
  console.log(endVal);
  document.getElementById("startVal").value = "";
  document.getElementById("endVal").value = "";

//   console.log(newFizz);
//   console.log(newBuzz);
//   document.getElementById("newFizz").value = "";
//   document.getElementById("newBuzz").value = "";

});

