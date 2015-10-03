(function() {

  var FizzBuzz = require('sea-d44-fizz-buzz-ps');
  var Printlist = require('./print-list.js');

  var myFizzy = new FizzBuzz("front", "end");
  var button = document.getElementById("submitBuzz");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    var min = parseInt(document.getElementById("first-value").value);
    var max = parseInt(document.getElementById("second-value").value);
    var createHead = document.createElement('h2');
    var headText = "Values " + min + " to " + max;
    // var createUl = document.createElement('ul');
    var fizzBuzzList = document.getElementById("fizz-list");

    myFizzy.input(min, max);

    if (!document.getElementById("check-box").checked) {
      while (fizzBuzzList.hasChildNodes()) {
        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
      }
    }

    if (isNaN(min) || isNaN(max)) {
      alert("Please enter a number");
    } else if (min >= max) {
      alert("First value must be less than the second");
    } else {

      // Write the head
      createHead.appendChild(document.createTextNode(headText)); // Create & append the h2
      fizzBuzzList.appendChild(createHead);

      var fizzArray = myFizzy.output();

      Printlist(fizzBuzzList, fizzArray);

      // for (var i = 0; i < fizzArray.length; i++) {
      //   var listItem = document.createElement('li');
      //   listItem.appendChild(document.createTextNode(fizzArray[i]));
      //   createUl.appendChild(listItem);
      // }

      // // I want to just say here is my div, make a ul in there with this array
      // fizzBuzzList.appendChild(createUl); // Append the ul

    }
  });
})();
