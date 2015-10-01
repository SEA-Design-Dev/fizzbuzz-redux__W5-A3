
var form = document.getElementById('form');
form.addEventListener('submit', function(e) {

  e.preventDefault();

  var el = document.getElementById('FizzBuzz');
  el.removeChild(el.firstChild);

  var low = Number(form.elements.lowNumber.value);
  var high = Number(form.elements.highNumber.value);

  var wordOne = form.elements.fizzOption.value;
  var wordTwo = form.elements.buzzOption.value;

  var fizzBuzzer = new FizzBuzz(wordOne, wordTwo);

  console.log(fizzBuzzer);

  fizzBuzzer.readArray(low, high);
  fizzBuzzer.writeArray(el);

});
