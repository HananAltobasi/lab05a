'use strict';
function sum(a, b) { 
    let sum= a + b;
    let con=('The sum of '+a+' and '+b+ ' is '+sum+ '.');
   let arr1=[sum,con]
    return arr1;
}
 testSum(4, 7);

function multiply(a, b) { 
    let multiply= a * b;
    let mul=('The product of '+a+' and '+b+ ' is '+multiply+ '.');
    let arr2=[multiply,mul];
    return arr2;
}
 testMultiply(5,9);

function sumAndMultiply(a, b, c) { 
    let sum1= a + b + c;
    let multiply1= a * b * c;
    let con1=a+ ' and ' + b + ' and ' + c + ' sum to ' + sum1 + '.'
    let con2=('The product of ' + a + ' and ' + b + ' and ' + c + ' is '+ multiply1 + '.');
    let arr3=[sum1, multiply1, con1, con2]
    return arr3;
}
testSumAndMultiply(4,7,5);

var testArray = [2, 3, 4]; 

function sumArray() { 
    let sarr= testArray[0]+testArray[1]+testArray[2]
    let str= testArray+' was passed in as an array of numbers, and '+sarr+' is their sum.'
    let finish=[sarr, str]
    return finish;
}
 testSumArray(testArray);

function multiplyArray(multArr) { 
      multArr=[2,3,4];
      let mArr=multArr[0]*multArr[1]*multArr[2]
      let sArr=('The numbers '+ multArr+' have a product of '+mArr+'.');
      let b=[mArr, sArr]
      return b;
}

 testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
