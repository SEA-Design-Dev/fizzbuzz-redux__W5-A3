var NodeBuzz = require('sea-d44-fizz-buzz-zg');


document.getElementById("button-b").addEventListener("submit", function (e) {
  e.preventDefault();

  // instantiated my new NodeBuzz function.
  var myfizz = new NodeBuzz('bleep', 'blorp');

  // Assigning the input values to variables.
  aVal  = parseInt(document.getElementById("min").value);
  zVal  = parseInt(document.getElementById("max").value);
  myfizz.input(aVal, zVal);

  // Creating and appending DOM elements with processed inputs
  document.getElementById("DOM-elements").innerHTML="";
  var newEl = document.createElement("p");
  var newtext = document.createTextNode(myfizz.output(this.result));
  newEl.appendChild(newtext);
  document.getElementById("DOM-elements").appendChild(newEl);
});



