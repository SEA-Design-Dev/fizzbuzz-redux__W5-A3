(function() {
  var myFizzy = new FizzBuzz("bleep", "blorp");
  var button = document.getElementById("submitBuzz");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    var startVal = document.getElementById("first-value").value;
    var endVal = document.getElementById("second-value").value;
    var fizzBuzzList = document.getElementById("fizz-list");

    myFizzy.getValues(startVal, endVal);

    if (!document.getElementById("check-box").checked) { // If the check-box is checked,
      while (fizzBuzzList.hasChildNodes()) { // Remove all child nodes from elementID
        fizzBuzzList.removeChild(fizzBuzzList.firstChild);
      }
    }

    if (startVal === "" || endVal === "") { // Throw up an alert if there isn't one or both values
      alert("Please enter a number");
    } else {
      myFizzy.writeValues(fizzBuzzList);
    }
  });
})();
