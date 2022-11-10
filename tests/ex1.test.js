const ex1 = require('../exercises/ex1')

test("Student's array method returns the correct value", function () {
  let { ex1Answer } = ex1
  let expected = [5, 10, 15, 20]
  expect(ex1Answer).toEqual(expected)
})