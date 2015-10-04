var fizzbuzz = require('sea-d44-fizz-buzz-ch');

function render (name, lowId, highId, divId) {
  var game, lowNum, highNum, id, print;
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
  fizzBuzzResults = game.output();

  var modifyArray = function() {
    var print = '';

    for (i = 0; i < fizzBuzzResults.length; i++) {
      if (fizzBuzzResults[i] === game.fizz) {
        print += "<span class='fizz'>" + fizzBuzzResults[i] + "</span>" + ' ';
      }
      else if (fizzBuzzResults[i] === game.buzz) {
        print += "<span class='buzz'>" + fizzBuzzResults[i] +"</span>" + ' ';
      }
      else if (fizzBuzzResults[i] === game.fizzbuzz) {
        print += "<span class='fizzbuzz'>" + fizzBuzzResults[i] +"</span>" + ' ';
      }
      else print += fizzBuzzResults[i] + ' ';
    }
    return print;
  };

  writeFB = document.createElement("p");
  writeFB.innerHTML = modifyArray();
  writeNums.appendChild(writeFB);
}

var myFizzBuzz = new fizzbuzz("Shmizz", "Shmuzz");

var formId = document.getElementById("numbers");
formId.addEventListener("submit", function(e) {
  e.preventDefault();
  render(myFizzBuzz, "low", "high", "displayNums");
});
