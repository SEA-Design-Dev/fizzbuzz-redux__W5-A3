function FizzBuzz(word1, word2) {
	
	this.word1 = word1;
	this.word2 = word2;
	this.word3 = word1 + word2;

	this.read = function(num1, num2) {
		this.begin = num1;
		this.end = num2;
	};
	
	this.makeFizz = function() {
		var words = "";
		for (var i = this.begin; i < (this.end + 1); i++) {
		
			if (i%3 === 0 && i%5 !== 0) {
				words += this.word1;
			}
			else if (i%5 === 0 && i%3 !== 0) {
				words += this.word2;
			}
			else if ( i%3 === 0 && i%5 === 0) {
				words += this.word3;
			}
			else {
				words += i;
			}
			words += "<br>";
		}
		return words;
	};

	this.write = function(place) {
		place.innerHTML = this.makeFizz(); 
	};	
}