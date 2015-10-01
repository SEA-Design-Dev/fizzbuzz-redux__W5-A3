(function() {
  var myFizzy = new FizzBuzz("front", "end");
  var button = document.getElementById("submitBuzz");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    var startVal = parseInt(document.getElementById("first-value").value);
    var endVal = parseInt(document.getElementById("second-value").value);
    var fizzBuzzList = document.getElementById("fizz-list");

    myFizzy.getValues(startVal, endVal);

    if (!document.getElementById("check-box").checked) { // If the check-box is checked,
      while (fizzBuzzList.hasChildNodes()) { // Remove all child nodes from elementID
        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
      }
    }

    if (isNaN(startVal) || isNaN(endVal)) { // Throw up an alert if there isn't one or both values
      alert("Please enter a number");
    } else if (startVal >= endVal) {
      alert("First value must be less than the second");
    } else {
      myFizzy.writeValues(fizzBuzzList);
    }
  });
})();
