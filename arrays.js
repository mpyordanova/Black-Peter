//  1.Question 1: FIZZ BUZZ 
 for(let i=1; i<= 100; i++){

    if( i %3===0 && i %5 ===0){
      console.log("FIZZBUZZ")}
      else if(i %5 ===0){
        console.log("BUZZ")}
        else if(i %3 === 0){
          console.log("FIZZ")}
          else console.log(i)
    }

// 2./*********** Question 2: THE EVEN/ODD REPORTER ************/
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

    for(let i=0; i<= 20; i++){
        if(i %2 ===0)
          console.log("even")
          else console.log("odd")
        }

// 3.uestion 3: MULTIPLICATION TABLE ************/
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
        for(let i=0; i<=10; i++){
console.log(i*9)
}

// Question 4: THE GRADE ASSIGNER ************/
// Check the results of your assignGrade function by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.


function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(assignGrade(90))
//  in order to get A for score 90 I added >=

// 5. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
for (let i = 1; i <= 5; i++){
   let triangle = ""
   for (let x = 1; x<= i; x++){
       triangle += "*"
   }
   console.log(triangle)
}

// Question 6 
// Sum the multiples of 3 and 5 under 1000

let sum = 0;
for (let i = 0; i< 1000; i++){
    if( i % 3 ===0 || i % 5 === 0){
        sum += i
    }
}
console.log(sum)