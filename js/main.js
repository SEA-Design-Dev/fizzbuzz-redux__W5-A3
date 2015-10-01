"use strict"

var FizzBuzz = (function() {
  var _output = [];

  var FizzyBuzzy = function() {};

  FizzyBuzzy.prototype.read = function() {
    var userInput = [];
    var startValue = document.getElementById("start-value");
    var endValue = document.getElementById("end-value");

    userInput.push(parseInt(startValue.value), parseInt(endValue.value));
    return userInput;
  }

  return FizzyBuzzy;

})();

// var fizzBuzz = new FizzBuzz("Fizz", "Buzz");

// FizzBuzz.prototype.generate = function(input) {
//   var userInput = input;
//   var data = [];

//   for(var i = userInput[0]; i <= userInput[1]; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       data.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       data.push("Fizz");
//     } else if (i % 5 === 0) {
//       data.push("Buzz");
//     } else {
//       data.push(i);
//     }
//   }
//   return data;
// }


//   FizzBuzz.prototype.setData = function() {
//     var userInput = this.read();

//     this.data = this.generate(userInput);
//   }

//   FizzBuzz.prototype.write = function() {
//     var table = document.getElementById("results");

//     var newTableHead = document.createElement("thead");
//     var newTableBody = document.createElement("tbody");
//     var newTableHeaders = document.createElement("th");
//     var newTableRow = document.createElement("tr");
//     var newTableData;

//     if (table.firstChild.nextSibling) {
//       this.clearTable();
//     }

//     table.appendChild(newTableHead).className = "clear";
//     table.lastChild.appendChild(newTableRow).appendChild(newTableHeaders).textContent = "#1";
//     table.appendChild(newTableBody).className = "clear";

//     for(var i = 0; i < this.data.length; i++) {
//       newTableRow = document.createElement("tr");
//       newTableData = document.createElement("td");

//       table.lastChild.appendChild(newTableRow).appendChild(newTableData)
//            .textContent = this.data[i];
//     }
//   }

//   FizzBuzz.prototype.clearTable = function() {
//     var table = document.getElementById("results");
//     var clearElements = document.getElementsByClassName("clear");

//     for (var i = 0; i < clearElements.length;) {
//       table.removeChild(clearElements[0]);
//     }
//   }

//   FizzBuzz.prototype.addEventListener = function() {
//     var form = document.getElementById("user-input");

//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       console.log(e.target);
//       this.setData();
//       this.write();
//     }.bind(this), false);
//   }

function _handler(e) {
  e.preventDefault();


}

// fizzBuzz.addEventListener();
