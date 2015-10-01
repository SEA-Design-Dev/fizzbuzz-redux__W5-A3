//Benton Green
  function FizzBuzz(input1, input2){
    var startNum;
    var endNum;
    this.input1 = input1;
    this.input2 = input2;
    
    this.readFizzBuzz = function(startNum, endNum){
      startingNum = startNum;
      endingNum = endNum;
    };

    this.writeFizzBuzz = function() {
      this.startingNum = startingNum; 
      this.endingNum = endingNum + 1; //added one to stopNum so that it would include ending number in list
      
      fbOutputList = document.getElementsByClassName('fizzBuzzOutput')[0];
      fbOutputContent = document.createElement('li');
      
      while (fbOutputList.firstChild) { //basically checks to see if the fizzbuzz output ul has any content
        fbOutputList.removeChild(fbOutputList.firstChild); //loops through and removes all content, IE reset
      }

      function writeToList(item){
      fbOutputList = document.getElementsByClassName('fizzBuzzOutput')[0];
      fbOutputContent = document.createElement('li');
      fbOutputContent.appendChild(document.createTextNode(item));
      fbOutputList.appendChild(fbOutputContent);
      }

      for(var x = this.startingNum; x < this.endingNum; x++) {
        if(x%3 === 0 && x%5 === 0){
          writeToList(x + " " + input1 + " " + input2);
        }
          else if(x%3 === 0){
            writeToList(x + " " + input1);  
          }
            else if(x%5 === 0){
              writeToList(x + " " + input2);
            }
            else{
              writeToList(x);
            }
      }
    };

    this.writeToFizzBuzz = function(tagName1){
      tagName1.innerHTML = this.writeFizzBuzz(); 
    };

  }
