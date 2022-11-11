const stretch = require('../exercises/stretch')

test('Function written by student returns an array containing the correct elements', function () {
  let stretchAnswer = stretch.stretchAnswer
  let expected = ['Joseph', 'Naomi']
  expect(stretchAnswer).toEqual(expected)
})