"use strict";

(function() {

  var fizzBuzz = new FizzBuzz("Bull", "Shit");

  function handler(e) {
    e.preventDefault();
    fizzBuzz.read(document.getElementById("start-value"), document.getElementById("end-value"));
    fizzBuzz.write(document.getElementById("results"));
  }

  document.getElementById("user-input").addEventListener("submit", handler, false);

})();
