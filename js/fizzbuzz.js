var FizzBuzz = require('sea-d44-fizz-buzz-ps');

var buzzer = new FizzBuzz("fuzz", "buzzy"); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 15);

console.log(buzzer.output());



    // WRITING METHOD
    // output: function (elementID) {
    //   var createList = document.createElement('ul'); // Create UL
    //   var createHead = document.createElement('h2'); // Create H2
    //   var headText = "Values " + this.min + " to " + this.max; // H2 Text

    //   createHead.appendChild(document.createTextNode(headText)); // Create & append the h2
    //   elementID.appendChild(createHead);

    //   for (var i = 0; i < this.fizzArray.length; i++) { // Loop through the array
    //     var listItem = document.createElement('li'); // Create a li
    //     listItem.appendChild(document.createTextNode(this.fizzArray[i])); // Attach a text node (the array value)
    //     createList.appendChild(listItem); // Append li + text to the ul
    //   }
    //   elementID.appendChild(createList); // Append the ul
    // }
