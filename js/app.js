var myFizzy = new FizzBuzz("bleep", "blorp");
var button = document.getElementById("submitBuzz");

button.addEventListener("click", function (e) {
  e.preventDefault();

  var startVal = document.getElementById("first-value").value;
  var endVal = document.getElementById("second-value").value;


  myFizzy.getValues(startVal, endVal);
  console.log(myFizzy.fizzArray);

  // Throw up an alert if there isn't one or both values
  if (startVal === "" || endVal === "") {
    alert("Please enter a number");
  } else {
    myFizzy.writeValues(document.getElementById("fizz-list"));
  }

});
