/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('First array:', arr1); // logs First array: [1, 2, 3, 4]
console.log('Second array:', arr2);// logs Second array: [1, 2, 3, 4]

// Copying an array
arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log('Third array:', arr3); // logs Third array: [ 4, 5, 6 ]
console.log('Fourth array:', arr4); // logs Fourth array: [ 4, 5, 6, 7 ]
// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 6};
console.log('First object:', obj1); // logs First object: { a: 1, b: 2, c: 3 }
console.log('Second object:', obj2); // logs Second object: { a: 1, b: 2, c: 3, d: 4 }
console.log('Third object:', obj3); // logs Third object: { a: 1, b: 6, c: 3 }

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);