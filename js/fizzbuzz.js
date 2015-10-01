// scope FizzyBuzzy for privacy
var FizzyBuzzy = (function() {  

  var _FizzBuzz = function(word1,word2) {
    this.word1 = word1 || 'Fizz';
    this.word2 = word2 || 'Buzz';
  }; 
  // defining _FizzBuzz as a function, but can be empty b/c 
  // all the functionality is in the other functions below
  
  // start and stop come from the READ function where doFizzBuzz is called
  function doFizzBuzz(start,stop) {  
    console.log(this.word1);
    // array to store the results
    var resultArr = [];
    // for loop to generate results
    for (var i = start; i < stop + 1; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        resultArr.push(this.word1); 
      } else if (i % 5 === 0 && i % 3 !== 0) {
        resultArr.push(this.word2); 
      } else if (i % 3 === 0 && i % 5 === 0) {
        resultArr.push(this.word1 + this.word2); 
      } else {
        resultArr.push(i); 
      }
    }
    // return the array so it can be assigned to this.result in READ
    return resultArr; 
  };
  
  _FizzBuzz.prototype.read = function(start,stop) {
    // called in the event listener, 
    // given the values entered in the form as start and stop
    this.start = start;
    this.stop = stop + 1;
    this.result = doFizzBuzz(start,stop);
    // error checking
    if (start >= stop) {
      alert('Your stop value must be larger than your start value.');
    }
  };
  // call WRITE in the event listener, give destination DOM object in the call
  _FizzBuzz.prototype.write = function(destination) {
    this.destination = destination;
    // removes existing DOM nodes from inside the <div>
    while (this.destination.firstChild) {
      this.destination.removeChild(this.destination.firstChild);
    }
    // the IF part of this is to keep it from printing if the start
    // value is greater than the stop value
    if (this.start < this.stop) {
      // append heading and empty <ul>
      var heading = document.createElement('h2');
      heading.appendChild(document.createTextNode('Your ' + this.word1 + this.word2 + ' from ' + this.start + ' to ' + (this.stop - 1) + ':'));
      this.destination.appendChild(heading);
      var newList = document.createElement('ul');
      this.destination.appendChild(newList);
    }
    // append an <li> for each result in the array
    for (var i = 0; i < this.result.length; i++) {
      var resultItem = document.createElement('li');
      resultItem.appendChild(document.createTextNode(this.result[i]));
      newList.appendChild(resultItem);
    }
    // empty the results array in preparation for the next entry
    this.result = [];
  };
  // must return _FizzBuzz so it can be heard outside the IFFY
  return _FizzBuzz; 
})();
