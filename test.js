var FizzBuzz = require('sea-d44-fizz-buzz-sk');

var buzzer = new FizzBuzz("hello", "no"); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 120);

console.log(buzzer.output());