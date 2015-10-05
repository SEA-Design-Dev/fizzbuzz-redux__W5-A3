var fizzbuzz = require('sea-d44-fizz-buzz-ch');
var modifyArray = require('./array.js');

function renderFizzBuzz (name, lowId, highId, divId) {
  var game, lowNum, highNum, id, heading, hText;
  game = name;
  lowNum = parseInt(document.getElementById(lowId).value);
  highNum = parseInt(document.getElementById(highId).value);
  id = divId;

  var writeNums = document.getElementById(id);
  writeNums.innerHTML = "";
  heading = document.createElement("h2");
  hText = "<em>You chose the numbers " + lowNum + " and " + highNum + ".</em>";
  heading.innerHTML = hText;
  writeNums.appendChild(heading);

  if (game.input().length > 0) {
    game.input().length = 0;
  }

  game.input(lowNum, highNum);
  fizzBuzzResults = game.output();

  var writeFB = document.createElement("p");
  writeFB.innerHTML = modifyArray(fizzBuzzResults, game.fizz, game.buzz, game.fizzbuzz);
  writeNums.appendChild(writeFB);
}

var myFizzBuzz = new fizzbuzz("Shmizz", "Shmuzz");

var formId = document.getElementById("numbers");
formId.addEventListener("submit", function(e) {
  e.preventDefault();
  renderFizzBuzz(myFizzBuzz, "low", "high", "displayNums");
});
