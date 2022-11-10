const ex2 = require('../exercises/ex2')

test('Function written by student returns an array', function () {
  let ex2Answer = ex2.ex2Answer || "Your function doesn't return anything yet"
  expect(ex2Answer).toEqual(expect.any(Array))
})

test('Function written by student returns an array containing the correct elements', function () {
  let ex2Answer = ex2.ex2Answer || "Your function doesn't return anything yet"
  let expected = [10, 25, 100]
  expect(ex2Answer).toEqual(expected)
})