var aVal, zVal

var FizzBuzz = (function () {
  var brains = function(aVal, zVal){
  var myArray =[];
    for ( aVal ; aVal <= zVal; aVal ++) {
      if (aVal % 5 === 0 && aVal % 3 === 0) {
        myArray.push("FizzBuzz")
      } else if ( aVal % 5 === 0) {
        if (document.getElementById("new-string1").value == "") {
          myArray.push("Buzz");
        } else {
          myArray.push(document.getElementById("new-string1").value);
        }
      } else if (aVal % 3 === 0) {
       if (document.getElementById("new-string1").value == "") {
          myArray.push("Fizz");
        } else {
          myArray.push(document.getElementById("new-string2").value);
        }
      } else {
        myArray.push(aVal);
      }
    }
    return myArray;
  };
  var _fizzbuzz = function() {};
  _fizzbuzz.prototype = {
    read: function (aVal, zVal) {
      this.result = brains(aVal, zVal);
      },
    write: function(){
      document.getElementById("output").innerHTML="";
      var newEl = document.createElement("p");
      var newtext = document.createTextNode(this.result);
      newEl.appendChild(newtext);
      document.getElementById("output").appendChild(newEl);
    }
  }
  return _fizzbuzz;
}());
