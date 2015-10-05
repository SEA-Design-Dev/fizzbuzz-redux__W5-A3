(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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




},{"sea-d44-fizz-buzz-zg":2}],2:[function(require,module,exports){
var FizzBuzz = (function () {
  var aVal, zVal;

  var _fizzbuzz = function(newString1, newString2) {
    this.newString1 = newString1 || "Fizz";
    this.newString2 = newString2 || "Buzz";
  };

  _fizzbuzz.prototype = {
    input: function (aVal, zVal) {
      this.result =[];
      for ( aVal ; aVal <= zVal; aVal ++) {
        if (aVal % 5 === 0 && aVal % 3 === 0) {
          this.result.push(this.newString1+this.newString2)
        } else if ( aVal % 3 === 0) {
          this.result.push(this.newString1);
        } else if (aVal % 5 === 0) {
          this.result.push(this.newString2);
        } else {
          this.result.push(aVal);
        }
      }
      return this.result;
    },
    output: function(){
      return this.result;
    }
  }

  return _fizzbuzz;

}());

module.exports = FizzBuzz



},{}]},{},[1]);
