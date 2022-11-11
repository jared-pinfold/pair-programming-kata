const ex3 = require('../exercises/ex3')

test('Function written by student returns an object', function () {
  let ex3Answer = ex3.ex3Answer
  expect(ex3Answer).toEqual(expect.any(Object))
})

test('Function written by student returns an object with the correct properties', function () {
  let ex3Answer = ex3.ex3Answer
  expect(ex3Answer).toEqual(expect.objectContaining({
    name: expect.any(String),
    numOfCats: expect.any(Number),
    catNames: expect.any(Array)
  }))
})

test('Function written by student returns an object with the correct name value', function () {
  let ex3Answer = ex3.ex3Answer
  expect(ex3Answer).toMatchObject({ name: 'Gertrude' })
})

test('Function written by student returns an object with the correct numOfCats value', function () {
  let ex3Answer = ex3.ex3Answer
  expect(ex3Answer).toMatchObject({ numOfCats: 3 })
})

test('Function written by student returns an object with the correct catNames value', function () {
  let ex3Answer = ex3.ex3Answer
  expect(ex3Answer).toMatchObject({ catNames: ['Stu', 'Tango', 'Winky'] })
})
