'use strict';
(function() {
  // create an instance on page load
  var fizzbuzz = new FizzyBuzzy('Bloop','Beep');
  
  // create variable for submission element
  var elSubmit = document.getElementById('goForFizzBuzz');
  
  // render function
  function renderFizzBuzz() {
    // store beginning and ending values in variables
    var startValue = parseInt(document.getElementById('beginValue').value);
    var stopValue = parseInt(document.getElementById('endValue').value);
    // call the read function, give the start and stop values
    fizzbuzz.read(startValue,stopValue);
    // call the write function, give the DOM node where it should render
    fizzbuzz.write(document.getElementById('fizzbuzz'));
    // clear the entered values
    document.getElementById('beginValue').value = '';
    document.getElementById('endValue').value = '';
  };

  // event listener
  elSubmit.addEventListener('click', function(evt) {
    // prevent page reload
    evt.preventDefault();
    // call render function
    renderFizzBuzz();
  });

})();