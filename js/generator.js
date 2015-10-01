"use strict"

function _generateOutput(input, string1, string2) {
  var startInput = input[0];
  var endInput = input[1];
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

// console.log(_generateOutput([1, 15], "Fizz", "Buzz"));
