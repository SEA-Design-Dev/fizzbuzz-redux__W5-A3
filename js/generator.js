"use strict"

function _generateOutput(inputs, strings) {
  var startInput = inputs[0];
  var endInput = inputs[1];
  var string1 = strings[0];
  var string2 = strings[1];
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
