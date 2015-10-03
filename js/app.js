// var fizzbuzz = require('sea-d44-fizz-buzz-ch');

function runGame (name, lowId, highId, divId) {
  var name, lowNum, highNum, id, print;
  game = name;
  lowNum = parseInt(document.getElementById(lowId).value);
  highNum = parseInt(document.getElementById(highId).value);
  id = divId;

  writeNums = document.getElementById(id);
  writeNums.innerHTML = "";
  var heading = document.createElement("h2");
  var hText = "<em>You chose the numbers " + lowNum + " and " + highNum + ".</em>";
  heading.innerHTML = hText;
  writeNums.appendChild(heading);

  if (game.input().length > 0) {
    game.input().length = 0;
  }

  game.input(lowNum, highNum);
  print = game.output();

  var modifyArray = function() {
    var results = '';

    for (i = 0; i < print.length; i++) {
      results += print[i] + ' ';
    }
    return results;
  };

  writeFB = document.createElement("p");
  writeFB.innerHTML = modifyArray();
  writeNums.appendChild(writeFB);
}

var myFizzBuzz = new fizzbuzz("Shmizz", "Shmuzz");

var formId = document.getElementById("numbers");
formId.addEventListener("submit", function(e) {
  e.preventDefault();
  runGame(myFizzBuzz, "low", "high", "displayNums");
});
