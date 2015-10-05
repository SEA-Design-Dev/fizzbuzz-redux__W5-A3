var Printlist = (function () {

  var _printList = function(elementID, array) {

    var createUl = document.createElement('ul'); // Create a UL

    for (var i = 0; i < array.length; i++) {
      var createLi = document.createElement('li');  // Create an LI for each value in the array
      createLi.appendChild(document.createTextNode(array[i])); // Create Text Node with array the value; append to LI
      createUl.appendChild(createLi); // Append LI to UL
    }
    elementID.appendChild(createUl); // Append UL to elementID
  };

  return _printList;

})();

module.exports = Printlist; // Export the function
