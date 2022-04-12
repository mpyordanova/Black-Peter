// Question 1 Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

    function maxOfTwoNumbers(x, y) {
        if (x > y)
        {
          return x;
        }
          else if (x<y)
          {
            return y;
        }
        }

// Question 2.Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
    function maxOfThree(x,y,z) {
        if(x>y && x>z){
          return x;
          }
          if (y>z && y>x){
            return y;}
            else{ return z;}
      
      }


// Question 3.Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(letter) {
    

        if((letter == "a")||(letter == "e")||(letter == "u")||(letter == "o")||(letter == "i")){
         return true}
         else {
           return false}
       } 
           console.log(isCharacterAVowel("b"))
           


// Question 4.Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sumArray(array){
    let sum = 0;
    for ( let i = 0; i< array.length; i++){
      sum += array[i];
      }
      return sum;
      }
    console.log(sumArray([1,2,3]));
    


// Question 4
function multiplyArray(array){
    let product= array[0];
    for (let i=1; i < array.length; i ++){
      product *= array[i]
    }
    return product
    }
    
    console.log(multiplyArray([2,2,2]))

// Question 5.Write a function that return the number of arguments passed to the function when called.
var numberOfArguments = function(){
    return arguments.length
}

console.log(numberOfArguments(3,4,66,77,888,9,"o",7,64,3));



// Question 6.Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
 
function reverseString(string){
let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
  };
  reverseString("yaba daba duu")
  


// Question 7.Write a function findLongestWord that takes an array of words and returns the length of the longest one.
function findLongestWord (arr) {
    let longest = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].length > longest) {
            longest = arr[i].length;
          }
        }
        return longest;
      }
      findLongestWord(["Come", "on", "lets", "twist"]);
      


// Question 8.Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
    function filterLongWords (array, num) {
        newArray = [];
        for(let i = 0; i< array.length; i++){
          if(array[i].length > num){
            newArray.push(array[i]);
      }
      }
      return newArray;
      }
}


// Bonus 1.Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
  };


// Bonus 2
function charactersOccurencesCount() {
  
}

