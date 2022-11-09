////////////////////////////////
// Exercise 3 - Find a person //
////////////////////////////////

// In this exercise you need to write a function which will take an array and a string, representing a person's name.
// Find that person in the array, and return an object which includes their name, how many cats they have, and an array of their cats' names.
// Use the following as a template:
const ex3ObjExample = {
  name: 'Mary',
  numOfCats: 2,
  catNames: ['Steve', 'Petunia']
}

const ex3Data = [
  {
    name: 'Dave',
    cats: [{ name: 'Red', age: 1}, { name: 'Mr Boingboing', age: 3}]
  },
  {
    name: 'Gertrude',
    cats: [{ name: 'Stu', age: 5}, { name: 'Tango', age: 2}, { name: 'Winky', age: 2}]
  },
  {
    name: 'Ying',
    cats: [{ name: 'Roy', age: 11}]
  },
]

function findAPerson (arr, person) {
  // your code goes here
}

const ex3Answer = findAPerson(ex3Data, 'Gertrude')


/////////////////////////

module.exports = {
  ex3Answer
}