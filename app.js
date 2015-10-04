
var FizzBuzz = require('sea-d44-fizz-buzz-mb');

// set words and create new instance of fizzbuzz object
var wordOne, wordTwo, result;
var fuzzBuzz = new FizzBuzz(wordOne || "fizz", wordTwo || "buzz");

// set vars for button events
var btnFizzBuzz = document.getElementById("form_submit");
var btnWords = document.getElementById("form_words");

//event function for fizzbuzz
function fizzHandler(e) {
  e.preventDefault();
  var startVal = document.getElementById("number_start").value;
  var endVal = document.getElementById("number_end").value;
  fuzzBuzz.input(parseInt(startVal), parseInt(endVal));
  result = fuzzBuzz.output();
  renderHeading(startVal, endVal);
  renderList();
}

function renderList() {
  var fuzzList = document.createElement("ol");
  var elResults = document.getElementById("results_fizzbuzz");
  while (elResults.hasChildNodes()) {
    elResults.removeChild(elResults.firstChild);
  }
  for (var i = 0; i < result.length; i++ ) {
    var fuzzListItem = document.createElement("li");
    fuzzListItem.appendChild(document.createTextNode(result[i]));
    fuzzList.appendChild(fuzzListItem);
    elResults.appendChild(fuzzList);
  }
}

//render heading displaying number start to end
function renderHeading(first, second) {
  var elFirstNum = document.getElementById("firstnum");
  var elLastNum = document.getElementById("secondnum");
  elFirstNum.textContent = "";
  elLastNum.textContent = "";
  elFirstNum.textContent = " -- " + first + " to ";
  elLastNum.textContent = second;
}

//event function for word change form
function wordHandler(e) {
  e.preventDefault();
  wordOne = document.getElementById("word_one").value;
  wordTwo = document.getElementById("word_two").value;
  var elWordOne = document.getElementById("display_word_one");
  var elWordTwo = document.getElementById("display_word_two");
  fuzzBuzz = new FizzBuzz(wordOne, wordTwo);
  elWordOne.textContent = "";
  elWordTwo.textContent = "";
  elWordOne.textContent = wordOne;
  elWordTwo.textContent = wordTwo;
}

//event listeners
btnFizzBuzz.addEventListener("submit", fizzHandler);
btnWords.addEventListener("submit", wordHandler);
