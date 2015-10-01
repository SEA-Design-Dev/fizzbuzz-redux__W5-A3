'use strict'

var FizzBuzz = (function() {
  var _fizzBuzz = function(fizz, buzz) {
    this.name = fizz + buzz;
    this.nums = [];
    this.fizz = fizz;
    this.buzz = buzz;
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

    renderFB: function(divId) {
      var input, output, writeNums, writeFB;

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
