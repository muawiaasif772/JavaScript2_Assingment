// Print Numbers Write a function printNumbers that takes a number n as input and prints all numbers from 1 to n.

// Input: printNumbers(5) Expected Output: 1 2 3 4 5
function printNumbers(n) {
    for (let i =0 ; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(5);
// While Loop - Countdown Write a function countdown that takes a number n as input and prints a countdown from n to 1.

// Input: countdown(5) Expected Output: 5 4 3 2 1
function countdown(n) {
   
    while (n > 0) {
        console.log(n);
        n--;
    }
}

countdown(10);

// Do-While Loop - Repeat Input Write a function repeatInput that asks the user to enter a number and keeps repeating the prompt until a valid number is entered. Once a valid number is entered, print it.

function repeatInputn(num) {
    let input = num;
    
    do {
        if (input > 0) {
            console.log(input);
            break;
        } else {
            console.log('Re-enter a positive number');
            let newNum = prompt('Please enter a positive number:');
            input = Number(newNum);
        }
    } while (true); 
}


repeatInputn(5);

// For...of Loop - Sum Array Write a function sumArray that takes an array of numbers as input and returns their sum using the for...of loop.

// Input: sumArray([1, 2, 3, 4, 5]) Expected Output: 15
function sumArray(array){
let total=0;
for(i=0;i<array.length;i++){
    total+=array[i]
}
return total
}
let array=[2,3,4,6,6,8,9]
console.log(sumArray(array))
// For...in Loop - Iterate Object Properties Write a function printObjectProperties that takes an object as input and prints its properties using the for...in loop.

// Input: printObjectProperties({ name: 'John', age: 30, city: 'New York' }) Expected 
const Mydata = { name: 'Muawia', age:20,city:'TMP' };

for (const property in Mydata) {
  console.log(`${property}: ${Mydata[property]}`);
}

// Nested For Loop - Multiplication Table Write a function multiplicationTable that takes a number n as input and prints the multiplication table up to n using nested for loops.

// Input: multiplicationTable(5) Expected Output:
function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = ''; 
        for (let j = 1; j <= n; j++) {
       row+=  (i * j) + ' '; 
        }
        console.log(row); 
    }
}

multiplicationTable(5);

// Break Statement - Stop at Specific Number Write a function findNumber that takes an array of numbers and a target number. It should search for the target number and stop the loop if it finds it.

function findNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Found at index ${i}`);
            break; 
        }
    }   
}

findNumber([7,8,9,33,45,34], 34);
// Continue Statement - Skip Even Numbers Write a function printOddNumbers that takes a number n as input and prints all odd numbers from 1 to n, skipping even numbers.
// Input: printOddNumbers(7) Expected Output: 1 3 5 7

function printOddNumbers(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

printOddNumbers(10);

// While Loop with Break - Sum Numbers Write a function sumNumbers that takes a number n as input and calculates the sum of all numbers from 1 to n using a while loop and break statement.

// Input: sumNumbers(5) Expected Output: 15

function sumNumbers(num){
    let total=0;
    for(i=0;i<=num;i++){
        total+=i
    }
    return total
}
console.log(sumNumbers(7)+'\n')
// While Loop with Continue - Skip Negative Numbers Write a function printPositiveNumbers that takes an array of numbers and prints only positive numbers using a while loop and continue statement.

// Input: printPositiveNumbers([-2, 5, -9, 10, -3]) Expected Output: 5 10
function printPositiveNumbers(arr){
    let i=0
    while(i<arr.length){
        if(arr[i]>=0){
            console.log(arr[i])
            
        }
        i++;
    }

}
console.log(printPositiveNumbers([23,-5,89,-9,10,12,34]))
// Do-While Loop with Break - Sum Input Numbers Write a function sumInputNumbers that repeatedly asks the user to enter a number. It should stop asking when the user enters a negative number and then return the sum of all entered positive numbers.

function sumInputNumbers(...userinput) {
    let total = 0;
    let i = 0;

    do {
        if (userinput[i] < 0) {
            break;
        } else {
            total += userinput[i];
        }
        i++;
    } while (i < userinput.length);

    return total;
}

console.log(sumInputNumbers(45, 5, 6)); 

// forEach Loop - Double Array Elements Write a function doubleArray that takes an array of numbers and returns a new array where each element is doubled using the forEach loop.

function doubleArray(array) {
    let result = [];
    array.forEach(ele => result.push(ele * 2));
    return result;
}

console.log(doubleArray([3, 4, 5, 6, 7])); 

// for...of Loop with Array of Strings Write a function capitalizeStrings that takes an array of strings and returns a new array where each string's first letter is capitalized using the for...of loop.

// Input: capitalizeStrings(['hello', 'world']) Expected Output: ['Hello', 'World']

function capitalizeStrings(strings) {
    let capitalizedStrings = [];
    
    for (const str of strings) {
        let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        capitalizedStrings.push(capitalized);
    }
    
    return capitalizedStrings;
}

console.log(capitalizeStrings(['hello', 'world'])); 
console.log(capitalizeStrings(['javaScript', 'is', 'awesome'])); 

// for...in Loop with Object Write a function countProperties that takes an object as input and returns the count of its properties using the for...in loop.

// Input: countProperties({ name: 'John', age: 30, city: 'New York' }) Expected Output: 3

function countProperties(obj) {
    let count = 0;
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    
    return count;
}

console.log(countProperties({ name: 'John', age: 30, city: 'New York' }));
console.log(countProperties({ a: 1, b: 2, c: 3, d: 4 })); 

