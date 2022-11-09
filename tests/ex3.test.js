const ex3 = require('../exercises/ex3')

test("Student's function returns an object containing the correct data", function () {
  let ex3Answer = ex3.ex3Answer || "Your function doesn't return anything yet"
  let expected = {
    name: 'Gertrude',
    numOfCats: 3,
    catNames: ['Stu', 'Tango', 'Winky']
  }
  expect(ex3Answer).toEqual(expected)
})