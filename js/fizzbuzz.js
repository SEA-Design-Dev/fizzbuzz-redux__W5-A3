var FizzBuzz = (function () { // Gotta have that IFFE

  var _fizzBuzz = function (x, y) { // Initialize the class/factory/what-have-you
    this.wordOne = x;
    this.wordTwo = y;
    var min;
    var max;
    var fizzArray;
  };

  _fizzBuzz.prototype = { // define fizzBuzz methods

    // READING METHOD
    getValues: function (startVal, endVal) {
      this.min = startVal;
      this.max = endVal;
      this.fizzArray = [];
      for (var i = parseInt(startVal); i <= parseInt(endVal); i++) { // Loop through the values
        // Check conditions; Push to fizzArray
        this.fizzArray.push(i % 15 === 0 ? this.wordOne + this.wordTwo : i % 3 === 0 ? this.wordOne : i % 5 === 0 ? this.wordTwo : i);
      }
      return this.fizzArray;
    },

    // WRITING METHOD
    writeValues: function (elementID) {
      var fizzieList = elementID;
      var createList = document.createElement('ul'); // Create UL
      var createHead = document.createElement('h2'); // Create H2
      var headText = "Value " + this.min + " to " + this.max; // H2 Text

      while (fizzieList.hasChildNodes()) { // Remove all child nodes from elementID
        fizzieList.removeChild(fizzieList.firstChild);
      }

      createHead.appendChild(document.createTextNode(headText)); // Create & append the h2
      fizzieList.appendChild(createHead);

      for (var i = 0; i < this.fizzArray.length; i++) { // Loop through the array
        var listItem = document.createElement('li'); // Create a li
        listItem.appendChild(document.createTextNode(this.fizzArray[i])); // Attach a text node (the array value)
        createList.appendChild(listItem); // Append li + text to the ul
      }
      fizzieList.appendChild(createList); // Append the ul
    }
  }; // END METHODS

  return _fizzBuzz;

}());
