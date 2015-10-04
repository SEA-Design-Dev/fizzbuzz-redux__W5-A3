(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{"sea-d44-fizz-buzz-sk":2}],2:[function(require,module,exports){
var FizzBuzz = function(word1, word2) {
	
	this.word1 = word1;
	this.word2 = word2;
	
	if (word1 === undefined) {
		this.word1 = "fizz";
	}
	if (word2 === undefined) {
		this.word2 = "buzz";
	}
	this.word3 = this.word1 + this.word2;
	
	this.input = function(num1, num2) {
		this.begin = num1; 
		this.end = num2;
	};
	
	this.output = function() {
		var words = [];
		for (var i = this.begin; i < (this.end + 1); i++) {
			if (i%3 === 0 && i%5 !== 0) {
				words.push(this.word1);
			}
			else if (i%5 === 0 && i%3 !== 0) {
				words.push(this.word2);
			}
			else if ( i%3 === 0 && i%5 === 0) {
				words.push(this.word3);
			}
			else {
				words.push(i);
			}
		}
		return words;
	};
};
module.exports = FizzBuzz;
},{}]},{},[1]);
