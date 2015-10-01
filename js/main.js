
var form = document.getElementById('form');
form.addEventListener('submit', function(e) {

  e.preventDefault();

  var low = Number(form.elements.lowNumber.value);
  var high = Number(form.elements.highNumber.value);

  var text = new FizzBuzz(low, high);
  text.writeArray(text.readArray());

});
