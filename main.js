
var FizzBuzz = require('sea-d44-fizz-buzz-sk');
document.getElementById("button").onclick = onButtonClick;

 function onButtonClick () {

	var start = parseInt(document.getElementById("start-input").value);
	var end = parseInt(document.getElementById("end-input").value);
	
	document.getElementById("start").innerHTML = "Start: " + start;
	document.getElementById("end").innerHTML = "End: " + end;
	
	var fizz = new FizzBuzz();
	fizz.input(start,end);
	document.getElementById("output").innerHTML = fizz.output();
}
