var aVal, zVal

var FizzBuzz = (function () {
  var brains = function(aVal, zVal, newString1, newString2){
  var myArray =[];
  var formString1 = document.getElementById("new-string1").value;
  var formString2 = document.getElementById("new-string2").value;
  this.newString1 = newString1 || "FUCK SHIT";
  this.newString2 = newString2 || "yay";

    for ( aVal ; aVal <= zVal; aVal ++) {
      if (aVal % 5 === 0 && aVal % 3 === 0) {
        myArray.push("FizzBuzz")
      } else if ( aVal % 5 === 0) {
        if ( formString1 == "") {
          myArray.push(this.newString1);
        } else {
          myArray.push(formString1);
        }
      } else if (aVal % 3 === 0) {
       if (formString2 == "") {
          myArray.push(this.newString2);
        } else {
          myArray.push(formString2);
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
