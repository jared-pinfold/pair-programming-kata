///////////////////////////////////////////////////////////////////
// Exercise 2 - Implement your own version of a .filter() method //
///////////////////////////////////////////////////////////////////

// In this exercise you are doing the opposite of what you did in Exercise 1. 
// You're going to write a function which implements a simple version of the .filter() array method
// https://www.w3schools.com/jsref/jsref_filter.asp

function filterFunction (arr, func) {
  /* code goes here*/
  }
  
  // The test will compare the return value of your function with the return value of the .filter() method.
  
  
  const ex2Array = [10, 1, 25, 100, 2, 9]
  const ex2Example = ex2Array.filter((num) => num >= 10)
  const ex2Answer = filterFunction(ex2Array, (num) => num >= 10)

//////////////////
  module.exports = {
    ex2Example,
    ex2Answer
  }
