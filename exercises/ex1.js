////////////////////////////////////////////////////////
// Exercise 1 - Convert a for loop to an array method //
////////////////////////////////////////////////////////

// In this exercise you need to examine the below code and figure out which array method could be used to achieve the same results, 
// then write the code necessary to call that array method.

// Example code
const ex1Array = [1, 2, 3, 4]

function mysteryMethod(arr, func) { // takes an array and a function as parameters

  let newArr = [] // starts with an empty new array

  for (let i = 0; i < arr.length; i++) { // loops through each item in the array
    newArr.push(func(arr[i])) // adds the returned value from the 'func' parameter to the new array
  }

  return newArr // returns the new array
}

// Write your code where indicated below.
// When you run the test, it will compare the return value of your method with the return value of the mysteryMethod function.
const ex1Example = mysteryMethod(ex1Array, (num) => num * 5)
const ex1Answer = 'Your method goes here'


//////////////////////

module.exports = {
  ex1Example,
  ex1Answer
}