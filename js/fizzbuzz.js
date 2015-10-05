"use strict";

var FizzBuzz = (function() {
  var _stringsArray, _userInputArray, _outputArray;

  function _generateOutput(inputs, strings) {
    var outputArray = [];

    for(var i = inputs[0]; i <= inputs[1]; i++) {
      var output = "";

      if (i % 3 === 0) {
        output = strings[0] || "Fizz";
      }
      if (i % 5 === 0) {
        output += strings[1] || "Buzz";
      }
      if (!output) {
        output = i;
      }
      outputArray.push(output);
    }

    return outputArray;
  }

  function _clearTable(anchor, table) {
    if (table) {
      anchor.removeChild(table);
    }
  }

  var FizzyBuzzy = function(string1, string2) {
    _stringsArray = [string1, string2];
  }

  FizzyBuzzy.prototype.read = function(startNode, endNode) {
    _userInputArray = [parseInt(startNode.value), parseInt(endNode.value)];
    _outputArray = _generateOutput(_userInputArray, _stringsArray);
  }

  FizzyBuzzy.prototype.write = function(node) {
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

    for(var i = 0; i < _outputArray.length; i++) {
      var newTableRow = document.createElement("tr");
      var newTableData = document.createElement("td");

      table.lastChild.appendChild(newTableRow).appendChild(newTableData)
           .textContent = _outputArray[i];
    }
  }

  return FizzyBuzzy;

})();

