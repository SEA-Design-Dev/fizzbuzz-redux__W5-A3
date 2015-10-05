"use strict";

(function() {

  var FizzBuzz = require("sea-d44-fizz-buzz-hl");

  var fizzBuzz = new FizzBuzz("Bull", "Shit");
  var _userInputArray;

  function _clearTable(anchor, table) {
    if (table) {
      anchor.removeChild(table);
    }
  }

  fizzBuzz.read = function(startNode, endNode) {
    _userInputArray = [parseInt(startNode.value), parseInt(endNode.value)];
    this.input(_userInputArray[0], _userInputArray[1]);
  }

  fizzBuzz.write = function(node) {
    var output = this.output();
    var anchor = node;
    var table = document.getElementById("results");
    var newTable = document.createElement("table");
    var newMessage = document.createElement("caption");
    var newTableHead = document.createElement("thead");
    var newTableBody = document.createElement("tbody");
    var newTableHeaders = document.createElement("th");
    var newTableRow = document.createElement("tr");

    _clearTable(anchor, table);

    anchor.appendChild(newTable).setAttribute("id", "results");
    table = document.getElementById("results");
    table.appendChild(newMessage).textContent = "Your Results";
    table.appendChild(newTableHead).appendChild(newTableRow).appendChild(newTableHeaders)
         .textContent = _userInputArray[0] + " to " + _userInputArray[1] + ":";
    table.appendChild(newTableBody);

    for(var i = 0; i < output.length; i++) {
      var newTableRow = document.createElement("tr");
      var newTableData = document.createElement("td");

      table.lastChild.appendChild(newTableRow).appendChild(newTableData)
           .textContent = output[i];
    }
  }

  function handler(e) {
    e.preventDefault();
    fizzBuzz.read(document.getElementById("start-value"), document.getElementById("end-value"));
    fizzBuzz.write(document.getElementById("fizz-buzz"));
  }

  document.getElementById("user-input").addEventListener("submit", handler, false);

})();
