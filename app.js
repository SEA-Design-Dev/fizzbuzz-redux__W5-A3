var aVal, zVal

document.getElementById("button-a").addEventListener("click", function (e) {
var myfizz = new FizzBuzz();
  e.preventDefault();
  aVal  = document.getElementById("min").value;
  zVal  = document.getElementById("max").value;
  myfizz.read(aVal, zVal);
  myfizz.write(aVal, zVal);
});


