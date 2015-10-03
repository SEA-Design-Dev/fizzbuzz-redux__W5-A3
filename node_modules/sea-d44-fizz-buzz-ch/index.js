var fizzbuzz = (function() {
  var _fizzBuzz = function(fizz, buzz) {
    this.fizzbuzz = fizz + buzz || "fizzbuzz";
    this.fizz = fizz || "fizz";
    this.buzz = buzz || "buzz";
    this.nums = [];
  };

  _fizzBuzz.prototype = {
    input: function(low, high) {

      this.low = low;
      this.high = high;

      this.nums.push(low);
      this.nums.push(high);

    return this.nums;
    },

    output: function() {
      var input, resultArray;

      lowNumber = this.nums[0];
      highNumber = this.nums[1];
      resultArray = [];

      for (var i = lowNumber; i <= highNumber; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
          resultArray.push(this.fizzbuzz);
        }
        else if (i % 3 === 0) {
          resultArray.push(this.fizz);
        }
        else if (i % 5 === 0) {
          resultArray.push(this.buzz);
        } else {
          resultArray.push(i);
        }
      }
      return resultArray;
    },
  };
  return _fizzBuzz;
}());

module.exports = fizzbuzz;
