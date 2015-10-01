function onButtonClick () {
	var startNum = parseInt(document.getElementById('startNumber').value);
    var endNum = parseInt(document.getElementById('endNumber').value);
	var input1 = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;

	var fizzyBuzzer = new FizzBuzz(input1,input2);
	
	fizzyBuzzer.readFizzBuzz(startNum,endNum);
    fizzyBuzzer.writeToFizzBuzz(document.getElementsByClassName("fizzBuzzOutput"));
}