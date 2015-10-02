'use strict';

	var FizzBuz = (function(){

		var fizzBuzz = function () {};
		var arr = [];
		var str;
		var valueLrg;
		var valueSml;
		var wordOne;
		var wordTwo;

		fizzBuzz.prototype = {
			read: function() {
				valueSml = parseInt(document.getElementById('valueSml').value);
				valueLrg = parseInt(document.getElementById('valueLrg').value);
				wordOne = document.getElementById('wordOne').value;
				wordTwo = document.getElementById('wordTwo').value;
			},
			calculate: function() {
				do {
					if (valueSml % 3 === 0 && valueSml % 5 === 0) {
						arr.push(wordOne + wordTwo);
					} else if (valueSml % 3 === 0) {
						arr.push(wordOne);
					} else if (valueSml % 5 === 0) {
						arr.push(wordTwo);
					} else {
						arr.push(valueSml);
					} valueSml ++;
				} while (valueSml <= valueLrg);
			},
			write: function() {
				str = arr.toString();
				return str;
			}
		};
		return fizzBuzz;
	}());