
var form = document.getElementById('form');
form.addEventListener('submit', function(e) {

  e.preventDefault();

  var low = Number(form.elements.lowNumber.value);
  var high = Number(form.elements.highNumber.value);

  var wordOne = form.elements.fizzOption.value;
  var wordTwo = form.elements.buzzOption.value;

  console.log(wordOne);
  console.log(wordTwo);

  var text = new FizzBuzz(low, high, wordOne, wordTwo);
  console.log(text);
  text.writeArray(text.readArray());

});
