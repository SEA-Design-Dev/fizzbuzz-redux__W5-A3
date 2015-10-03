var Printlist = (function () {

  var _printList = function(elementID, array) {

    // Pass in an ID and an array, Output a UL of the array in the ID
    var createUl = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
      var createLi = document.createElement('li');
      createLi.appendChild(document.createTextNode(array[i]));
      createUl.appendChild(createLi);
    }
    elementID.appendChild(createUl);
  };

  return _printList;

})();

module.exports = Printlist;

// Printlist.printlist(fizzBuzzList, fizzArray);






    // var createUl = document.createElement('ul'); // Create UL
    // var createHead = document.createElement('h2'); // Create H2
    // var headText = "Values " + this.min + " to " + this.max; // H2 Text

    // createHead.appendChild(document.createTextNode(headText)); // Create & append the h2
    // elementID.appendChild(createHead);

  //   for (var i = 0; i < array.length; i++) {
  //       var listItem = document.createElement('li');
  //       listItem.appendChild(document.createTextNode(fizzArray[i]));
  //       createUl.appendChild(listItem);
  //     }

  //   for (var i = 0; i < array.length; i++) { // Loop through the array
  //     var listItem = document.createElement('li'); // Create a li
  //     listItem.appendChild(document.createTextNode(array[i])); // Attach a text node (the array value)
  //     createUl.appendChild(listItem); // Append li + text to the ul
  //   }
  //   elementID.appendChild(createUl); // Append the ul
  // };
