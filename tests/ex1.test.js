const ex1 = require('../exercises/ex1')

test('Return value of array method written by student is the same as the return value of the mystery code', function () {
  let { ex1Example, ex1Answer } = ex1
  let expected = [5, 10, 15, 20]
  expect(ex1Answer).toEqual(expected)
  expect(ex1Answer).toEqual(ex1Example)
})