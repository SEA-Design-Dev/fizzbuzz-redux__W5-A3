'use strict';
(function() {
  // create an instance on page load
  var fizzbuzz = new FizzyBuzzy('Fla','Floo');  
  // create variable for submission element
  var elSubmit = document.getElementById('goForFizzBuzz');
  
  // render function
  function renderFizzBuzz() {
    // store beginning and ending values in variables
    var startValue = parseInt(document.getElementById('beginValue').value);
    var stopValue = parseInt(document.getElementById('endValue').value);
    // call the read & write functions
    fizzbuzz.read(startValue,stopValue);
    fizzbuzz.write(document.getElementById('fizzbuzz'));
    // clear the entered values
    document.getElementById('beginValue').value = '';
    document.getElementById('endValue').value = '';
  };

  // event listener
  elSubmit.addEventListener('click', function(evt) {
    evt.preventDefault();
    renderFizzBuzz();
  });

})();