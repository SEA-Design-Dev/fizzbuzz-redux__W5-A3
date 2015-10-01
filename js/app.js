function runGame (name, lowId, highId, divId) {
  var game = name;
  var lowNum = parseInt(document.getElementById(lowId).value);
  var highNum = parseInt(document.getElementById(highId).value);
  game.getNums(lowNum, highNum);
  game.renderFB(divId);
}

var myFizzBuzz = new FizzBuzz("Shmizz", "Shmuzz");

var formId = document.getElementById("numbers");
formId.addEventListener("submit", function(e) {
  e.preventDefault();
  runGame(myFizzBuzz, "low", "high", "displayNums");
});
