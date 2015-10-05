var NodeBuzz = require('sea-d44-fizz-buzz-zg');


document.getElementById("button-b").addEventListener("submit", function (e) {
  var myfizz = new NodeBuzz('bleep', 'blorp');

  aVal  = parseInt(document.getElementById("min").value);
  zVal  = parseInt(document.getElementById("max").value);

  myfizz.input(aVal, zVal);

  document.getElementById("write").innerHTML="";
  var newEl = document.createElement("p");
  var newtext = document.createTextNode(myfizz.output(this.result));
  newEl.appendChild(newtext);
  document.getElementById("write").appendChild(newEl);
  e.preventDefault();
});



