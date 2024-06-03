// Explain the difference between strict equality (===) and loose equality (==) operators in JavaScript.

// Provide examples to illustrate how they handle different data types (numbers, strings, booleans, etc.)
// Potential Pitfalls:

// Discuss scenarios where loose equality (==) might lead to unexpected results due to type coercion.
// Why is strict equality (===) generally preferred for reliable comparisons?
// == use for check valyes are equal or not
// === check both  values and  data type
let a=4;
let b='4'
if(a===b){
    console.log('value & and data typeof "a" and "b" is same' )
}
else{
    console.log('value & and data typeof "a" and "b" is NOT same' )

}
let x=5;
let y='5'
if(x==y){
    console.log('value of "x" and "y" is same' )
}
else{
    console.log('value  of "x" and "y" is NOT same' )

}
// Code Challenges

// Equality of Numbers:

// Write a program that demonstrates the behavior of == and === when comparing numbers.
// Include examples with numeric values and NaN (Not a Number).
// Equality of Strings:

// Create a program that showcases how == and === handle string comparisons.
// Consider cases with different capitalization and implicit type conversion.
// Equality of Booleans and null/undefined:

// Write code that compares boolean values and the special values null and undefined using == and ===.
// Explain the output and how these values are treated during comparison.
console.log(5 == 5);       // true
console.log(5 === 5);      // true

console.log(5 == '5');     // true 
console.log(5 === '5');    // false 

console.log(NaN == NaN);   // false 
console.log(NaN === NaN);  // false 

console.log(0 == false);   // true 
console.log(0 === false);  // false 
console.log('hello' == 'hello');   // true (same value and type)
console.log('hello' === 'hello');  // true (same value and type)

console.log('hello' == 'Hello');   // false (different values)
console.log('hello' === 'Hello');  // false (different values)

console.log('5' == 5);             // true 
console.log('5' === 5);            // false 
console.log(true == 1);     // true 
console.log(true === 1);    // false 

console.log(false == 0);    // true 
console.log(false === 0);   // false 

console.log(null == undefined);    // true 
console.log(null === undefined);   // false 

console.log(null == 0);      // false 
console.log(undefined == 0); // false 

console.log('' == false);    // true 
console.log('' === false);   // false 

console.log('0' == false);   // true 
console.log('0' === false);  // false 


// Part 3: Object.is()

// Explain the purpose of the Object.is() method in JavaScript.

// How does it differ from strict equality (===) in terms of value comparison?
// Code Example with Object.is():

// Write a program that demonstrates the use of Object.is() to compare different data types, including objects with references.

console.log(Object.is(25, 25));          
console.log(Object.is('hello', 'hello'));
console.log(Object.is(true, true));      
console.log(Object.is(false, false));    

console.log(Object.is(25, '25'));        
console.log(Object.is(null, undefined)); 
console.log(Object.is(NaN, NaN));       

console.log(Object.is(1, -1));           
console.log(Object.is(-0, -0));         

const obj1 = { key: 'value' };
const obj2 = { key: 'value' };
const obj3 = obj1;

console.log(Object.is(obj1, obj2));    
console.log(Object.is(obj1, obj3));     


const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(Object.is(arr1, arr2));      
console.log(Object.is(arr1, arr3));
// Part 4: Choosing the Right Operator

// Best Practices:
// Discuss best practices for choosing between ==, ===, and Object.is() in your JavaScript code.
// When would you prioritize strict equality (===) over loose equality (==)?
// *************Strict Equality************
console.log(1 === 1);        
console.log('1' === 1);      
console.log(true === 1);     
// *************Loose Equality************

console.log(1 == '1');       
console.log(true == 1);      
console.log(null == undefined); 
// *************Special Cases Equality************

console.log(Object.is(NaN, NaN));   
console.log(Object.is(0, -0));      
console.log(Object.is(-0, -0));     



