'use strict';

// On Click, run the .read and .write methods
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  var fizzbuzz = new FizzBuzz("butt", "hole");
  var startVal = Number(document.getElementById("startVal").value);
  var endVal = Number(document.getElementById("endVal").value);
  fizzbuzz.read(startVal, endVal);
  fizzbuzz.write(document.getElementById("output"));
  console.log(startVal);
  console.log(endVal);
  document.getElementById("startVal").value = "";
  document.getElementById("endVal").value = "";
});

