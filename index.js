// Write your code here
//multiplication function using an integer and a float since the instructions say it only needs to be numbers
let num1 = 16;
let num2 = 3.875;

function myFunction(num1, num2) {
    return (num1*num2);
}

let multiply = myFunction(16, 3.875)

//random integer generator value>1 lets make it generate values between 1 and 6 (inclusive)
const random = Math.floor(Math.random() * 6) + 1


// equation that calculates a remainder that is equal to 4
let num3 = 20;
let num4 = 16;

function mymodFunction(num3, num4) {
    return (num3 % num4);
}

let mod = mymodFunction(num3,num4)

//will return 20 as the highest number in the set

let max = Math.max(num1, num2, num3, num4)
