const stretch = require('../exercises/stretch')

test('Function written by student returns an array containing the correct elements', function () {
  let { stretchExample } = stretch
  let stretchAnswer = stretch.stretchAnswer || "Your function doesn't return anything yet"
  let expected = ['Joseph', 'Naomi']
  expect(stretchAnswer).toEqual(expected)
  expect(stretchAnswer).toEqual(stretchExample)
})