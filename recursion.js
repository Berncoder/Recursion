//Use Recursion to Create a Countdown

/*We have define a function called countdown with one parameter(n). The function should use
recursion to return an array containing the integers n through 1 based on the n parameter. If the function is 
called w a number less than 1, the function should return an empty array. For example calling this function w n=5
shld return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not 
use loops of any kind. */

function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n-1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdown(10));
//counsole output: 
[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return[];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum -1);
        countArray.push(endNum);
        return countArray;
    }
}

console.log(rangeOfNumbers(1, 5));

//console output: [1, 2, 3, 4, 5 ]