
var FizzBuzz = require('sea-d44-fizz-buzz-sk');
function onButtonClick () {

	var start = parseInt(document.getElementById("start-input").value);
	var end = parseInt(document.getElementById("end-input").value);
	
	document.getElementById("start").innerHTML = "Start: " + start;
	document.getElementById("end").innerHTML = "End: " + end;

	var fizz = new FizzBuzz();
	alert("hi");
	fizz.input(start,end);
	

	var out = fizz.output();
	document.getElementById("output").innerHTML = out;
}
var fizz = new FizzBuzz();
fizz.input();
console.log(fizz.output());