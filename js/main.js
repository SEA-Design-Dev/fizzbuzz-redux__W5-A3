"use strict"

var FizzBuzz = (function() {
  var _outputStringsArray = [];

  var FizzyBuzzy = function(string1, string2) {
    _outputStringsArray.push(string1, string2);
  }

  FizzyBuzzy.prototype.getStrings = function() {
    return _outputStringsArray;
  }

  FizzyBuzzy.prototype.read = function() {
    var startValue = parseInt(document.getElementById("start-value").value);
    var endValue = parseInt(document.getElementById("end-value").value);
    var userInput = [];

    userInput.push(startValue, endValue);

    return userInput;
  }

  FizzyBuzzy.prototype.getOutput = function(inputs, strings) {
    return _generateOutput(inputs, strings);
  }

  FizzyBuzzy.prototype.write = function(node, output) {
    var table = node;
    var newTableHead = document.createElement("thead");
    var newTableBody = document.createElement("tbody");
    var newTableHeaders = document.createElement("th");
    var newTableRow = document.createElement("tr");

    if (table.firstChild.nextSibling) {
      this.clearTable(node);
    }

    table.appendChild(newTableHead).className = "clear";
    table.lastChild.appendChild(newTableRow).appendChild(newTableHeaders).textContent = "#1";
    table.appendChild(newTableBody).className = "clear";

    for(var i = 0; i < output.length; i++) {
      var newTableRow = document.createElement("tr");
      var newTableData = document.createElement("td");

      table.lastChild.appendChild(newTableRow).appendChild(newTableData)
           .textContent = output[i];
    }
  }

  FizzyBuzzy.prototype.clearTable = function(node) {
    var table = node;
    var clearElements = document.getElementsByClassName("clear");

    for (var i = 0; i < clearElements.length;) {
      table.removeChild(clearElements[0]);
    }
  }

  return FizzyBuzzy;

})();

var fizzBuzz = new FizzBuzz("Fizz", "Buzz");

document.getElementById("user-input").addEventListener("submit", _handler, false);

function _handler(e) {
  var userInput = fizzBuzz.read();
  var outputStrings = fizzBuzz.getStrings();
  var outputArray = fizzBuzz.getOutput(userInput, outputStrings);

  e.preventDefault();
  fizzBuzz.write(document.getElementById("results"), outputArray);
}
