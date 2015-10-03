var Printlist = (function () {

  var _printList = function(elementID, array) {

    var createUl = document.createElement('ul'); // Create a UL

    for (var i = 0; i < array.length; i++) {
      var createLi = document.createElement('li');  // Create an LI
      createLi.appendChild(document.createTextNode(array[i])); // Create Text Node with array value; append to LI
      createUl.appendChild(createLi); // Append LI to UL
    }
    elementID.appendChild(createUl); // Append UL to elementID
  };

  return _printList; // Return the function

})();

module.exports = Printlist; // Export the function
