'use strict'

var FizzBuzz = (function() {
  var _fizzBuzz = function() {
    this.name = "FizzBuzz";
    this.nums = [];
  };

  _fizzBuzz.prototype = {
    getNums: function(low, high) {

      if (this.nums.length > 0) {
        this.nums.length = 0;
      }

      this.low = low;
      this.high = high;

      this.nums.push(low);
      this.nums.push(high);

    return this.nums;
    },

    renderFB: function(fizz, buzz, divId) {
      var fizz, buzz, divId, input, output, writeNums, writeFB;

      this.fizz = fizz;
      this.buzz = buzz;
      this.divId = divId;
      input = this.nums;
      output = "";

      writeNums = document.getElementById(this.divId);
      writeNums.innerHTML = "";
      var heading = document.createElement("h2");
      var hText = "<em>You chose the numbers " + input[0] + " and " + input[1] + ".</em>";
      heading.innerHTML = hText;
      writeNums.appendChild(heading);

      for (var i = input[0]; i <= input[1]; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
          output += "<span class='fizzbuzz'/>" + this.fizz + this.buzz + "</span> ";
        }
        else if (i % 3 === 0) {
          output += "<span class='fizz'/>" + this.fizz + "</span> ";
        }
        else if (i % 5 === 0) {
          output += "<span class='buzz'/>" + this.buzz + "</span> ";
        } else {
          output += i + " ";
        }
      }
      writeFB = document.createElement("p");
      writeFB.innerHTML = "";
      writeFB.innerHTML = output;
      writeNums.appendChild(writeFB);
      // return output;
    },
  };
  return _fizzBuzz;
}());

var myFizzBuzz = new FizzBuzz();

var form = document.getElementById("numbers");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  var low = parseInt(document.getElementById("low").value);
  var high = parseInt(document.getElementById("high").value);
  myFizzBuzz.getNums(low, high);
  myFizzBuzz.renderFB("Shmizz", "Shmuzz", "displayNums");
});
