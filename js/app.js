'use strict';

var FizzyBuzzy = require('sea-d44-fizz-buzz-mk');

(function() {
  var word1 = 'Fla';
  var word2 = 'Floo';
  var fizzbuzz = new FizzyBuzzy(word1,word2);  
  var elSubmit = document.getElementById('goForFizzBuzz');
  
  // render function
  function renderFizzBuzz(destination) {
    var startValue = parseInt(document.getElementById('beginValue').value);
    var stopValue = parseInt(document.getElementById('endValue').value);
    fizzbuzz.input(startValue,stopValue);

    while (destination.firstChild) {
      destination.removeChild(destination.firstChild);
    }
    if (startValue < stopValue) {
      var heading = document.createElement('h2');
      heading.appendChild(document.createTextNode('Your ' + word1 + word2 + ' from ' + startValue + ' to ' + stopValue + ':'));
      destination.appendChild(heading);
      var newList = document.createElement('ul');
      destination.appendChild(newList);
    }
    for (var i = 0; i < fizzbuzz.output().length; i++) {
      var resultItem = document.createElement('li');
      resultItem.appendChild(document.createTextNode(fizzbuzz.output()[i]));
      newList.appendChild(resultItem);
    }
    
    
    document.getElementById('beginValue').value = '';
    document.getElementById('endValue').value = '';

  };

  // event listener
  elSubmit.addEventListener('click', function(evt) {
    evt.preventDefault();
    renderFizzBuzz(document.getElementById('fizzbuzz'));
  });

})();