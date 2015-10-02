"use strict";

var FizzBuzz = (function() {
  var _stringsArray = [];
  var _outputArray;

  function _generateOutput(inputs, strings) {
    var startInput = inputs[0];
    var endInput = inputs[1];
    var string1 = strings[0] || "Fizz";
    var string2 = strings[1] || "Buzz";
    var outputArray = [];

    for(var i = startInput; i <= endInput; i++) {
      var output = "";

      if (i % 3 === 0) {
        output = string1;
      }
      if (i % 5 === 0) {
        output += string2;
      }
      if (!output) {
        output = i;
      }
      outputArray.push(output);
    }

    return outputArray;
  }

  function _clearTable(node) {
    var table = node;
    var clearElements = document.getElementsByClassName("clear");

    while (clearElements[0]) {
      table.removeChild(clearElements[0]);
    }
  }

  var FizzyBuzzy = function(string1, string2) {
    _stringsArray.push(string1, string2);
  }

  FizzyBuzzy.prototype.read = function(startNode, endNode) {
    var userInputArray = [parseInt(startNode.value), parseInt(endNode.value)];
    _outputArray = _generateOutput(userInputArray, _stringsArray);
  }

  FizzyBuzzy.prototype.write = function(node) {
    var anchor = node;
    var table;
    var newTable = document.createElement("table");
    var newMessage = document.createElement("h2");
    var newTableHead = document.createElement("thead");
    var newTableBody = document.createElement("tbody");
    var newTableHeaders = document.createElement("th");
    var newTableRow = document.createElement("tr");

    // if (table) {
    //   _clearTable(table);
    // }

    // table.appendChild(newTableHead).className = "clear";
    // table.lastChild.appendChild(newTableRow).appendChild(newTableHeaders).textContent = "#1";
    // table.appendChild(newTableBody).className = "clear";

    anchor.appendChild(newTable).setAttribute("id", "results");
    table = document.getElementById("results");
    table.appendChild(newMessage).textContent = "Your Results";
    table.appendChild(newTableHead).appendChild(newTableRow).appendChild(newTableHeaders).textContent = "#1";
    table.appendChild(newTableBody);

    for(var i = 0; i < _outputArray.length; i++) {
      var newTableRow = document.createElement("tr");
      var newTableData = document.createElement("td");

      table.lastChild.appendChild(newTableRow).appendChild(newTableData)
           .textContent = _outputArray[i];
    }
  }

  return FizzyBuzzy;

})();

