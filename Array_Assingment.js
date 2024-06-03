// Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all the elements.

// const numbers = [1, 2, 3, 4, 5];
// Output: 15
function SumOfarray(array){
    let total=0;
    for( i=0;i<array.length;i++){
 total+=array[i]
    }
    return total
}
let numbers=[1,2,3,4,5,5,6,8,9]
let result=SumOfarray(numbers)
console.log(result)
// Task 2: Find Even Numbers
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Output: [2, 4, 6, 8]
function evenNumbers(array){

    return array.filter((num)=>num%2===0)
}
 numbers=[1,2,3,4,5,5,6,8,9]

result=evenNumbers(numbers)
console.log(result)

// Check Array Equality
// Write a function that takes two arrays and returns true if they are equal (have the same elements in the same order), otherwise returns false.

// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// const array3 = [1, 2, 4];
// Output: true
function ChekEquality(array1,array2){
if(array1.length !== array2.length) {
    return false;
}

for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
        return false;
    }
}

return true;

}
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = [1, 2, 3, 4, 6];

console.log(ChekEquality(array1, array2));  // Output: true
console.log(ChekEquality(array1, array3));  // Output: false
// Merge Arrays and Remove Duplicates
// Write a function that takes two arrays and returns a new array that contains all the elements from both arrays without any duplicates.

// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// Output: [1, 2, 3, 4, 5]
function murgArray(array1,array2){
    let combinedArray=array1.concat(array2)
    let a=[...new Set(combinedArray)]
 return a;

}
 array4 = [1, 2, 3];
 array5 = [3, 4, 5];
// Output: [1, 2, 3, 4, 5]
console.log(murgArray(array4, array5));  

// Find Common Elements
// Write a function that takes two arrays and returns a new array containing the common elements between the two arrays.

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// Output: [3, 4]

function comman(array1,array2){
    let set1=new Set(array1)
    let set2=new Set(array2)
    return [...set2].filter(ele=>set1.has(ele))
}
const array6 = [1, 2, 3, 4];
const array7 = [3, 4, 5, 6];
// Output: [3, 4]
console.log(comman(array6, array7));  
result=new Set([2,3,3,4,5,6,6,8])
console.log(result)
// Calculate Average of Numbers
// Write a function that takes an array of numbers and returns the average value.

// const numbers = [10, 20, 30, 40, 50];
// Output: 30
function AveRage(array){
    let total=0;
    for( i=0;i<array.length;i++){
 total+=array[i]
    }
    return total/array.length
}
 numbers=[10, 20, 30, 40, 50]
 result=AveRage(numbers)
console.log(result)
