//////////////////////////////////////////////////////
// Stretch - Implement the index optional parameter //
//////////////////////////////////////////////////////

// In this exercise you will be implementing the option index parameter into your filter function from Exercise 2
// Check out the MDN docs for .filter() for more info on how the index parameter works
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntax

// step 1 - Go back to Exercise 2 and copy the code inside your filterFunction and paste it into the function called filterIndex below.

// step 2 - Modify the new function to accept an optional index parameter

function filterWithIndex () {

}

const stretchArray = ['Jared', 'Joseph', 'Naomi']
const stretchExample = stretchArray.filter((person, i) => i > 0)
const stretchAnswer = filterWithIndex(stretchArray, (person, i) => i > 0 )


/////////////////////////////

module.exports = {
  stretchExample,
  stretchAnswer
}