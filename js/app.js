'use strict'

var myFizzBuzz = new FizzBuzz("Shmizz", "Shmuzz");

var formId = document.getElementById("numbers");
formId.addEventListener("submit", function(e) {
  e.preventDefault();
  var lowId = parseInt(document.getElementById("low").value);
  var highId = parseInt(document.getElementById("high").value);
  myFizzBuzz.getNums(lowId, highId);
  myFizzBuzz.renderFB("displayNums");
});
