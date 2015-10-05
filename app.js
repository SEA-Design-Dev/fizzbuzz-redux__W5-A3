var nodeBuzz = require('sea-d44-fizz-buzz-zg');

document.getElementById("button-a").addEventListener("click", function (e) {
var myfizz = new FizzBuzz('bleep', 'blorp');
  e.preventDefault();
  aVal  = parseInt(document.getElementById("min").value);
  zVal  = parseInt(document.getElementById("max").value);
  myfizz.input(aVal, zVal);
  document.getElementById("write").innerHTML="";
  var newEl = document.createElement("p");
  var newtext = document.createTextNode(myfizz.output(this.result));
  newEl.appendChild(newtext);
  document.getElementById("write").appendChild(newEl);
});



