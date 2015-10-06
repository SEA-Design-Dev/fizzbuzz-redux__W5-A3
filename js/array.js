function modifyArray(resultsArray, string1, string2, string3) {
  this.resultsArray = resultsArray;
  this.string1 = string1;
  this.string2 = string2;
  this.string3 = string3;

  var print = '';

  for (i = 0; i < this.resultsArray.length; i++) {
    if (this.resultsArray[i] === this.string1) {
      print += "<span class='" + "s-" + this.string1 + "'>" + this.resultsArray[i] + "</span>" + ' ';
    }
    else if (this.resultsArray[i] === this.string2) {
      print += "<span class='" + "s-" + this.string2 + "'>" + this.resultsArray[i] +"</span>" + ' ';
    }
    else if (this.resultsArray[i] === this.string3) {
      print += "<span class='" + "s-" + this.string3 + "'>" + this.resultsArray[i] +"</span>" + ' ';
    }
    else print += this.resultsArray[i] + ' ';
  }
  return print;
}

module.exports = modifyArray;
