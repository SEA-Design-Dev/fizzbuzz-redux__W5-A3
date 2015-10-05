(function() {

  var FizzBuzz = require('sea-d44-fizz-buzz-ps'); // Require the FizzBuzz module
  var Printlist = require('./print-list.js'); // Require the Printlist module
  var myFizzy = new FizzBuzz("front", "end"); // Instantiate FizzBuzz
  var button = document.getElementById("submitBuzz"); // Variable with <button> id

  button.addEventListener("click", function (e) {
    e.preventDefault();

    var min = parseInt(document.getElementById("first-value").value);
    var max = parseInt(document.getElementById("second-value").value);
    var createHead = document.createElement('h2');
    var headText = "Values " + min + " to " + max;
    var fizzBuzzList = document.getElementById("fizz-list");

    myFizzy.input(min, max); // Pass in the min max to the input method

    if (!document.getElementById("check-box").checked) { // If no checked box, then remove children
      while (fizzBuzzList.hasChildNodes()) {
        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
      }
    }

    if (isNaN(min) || isNaN(max)) { // Alerts to enter values correctly
      alert("Please enter a number");
    } else if (min >= max) {
      alert("First value must be less than the second");
    } else {
      // Write the head
      createHead.appendChild(document.createTextNode(headText)); // Create & append the H2
      fizzBuzzList.appendChild(createHead);
      Printlist(fizzBuzzList, myFizzy.output()); // Create the List
    }

  });
})();
