'use strict';

(function(){
	document.getElementById('submit').addEventListener("click", function(e){
		e.preventDefault();
		var fb = new FizzBuz();
		fb.read();
		fb.calculate();		
		document.getElementById("write").innerHTML = fb.write();
	});
}());