# Pair Programming Kata

## Introduction
This exercise is intended to be worked on by 2 students in a pair programming session.
In this exercise we'll practise some of the fundamentals of JavaScript and start learning about automated testing (which you'll see a lot more of in Bootcamp). We're going to start getting used to seeing tests coloured RED, and writing code to make them go GREEN.


## Installation

First, in your terminal, navigate to your `workspace` directory and clone the repository from GitHub. 

In your terminal, type `npm install`, which will install some behind the scenes utility stuff to make this project work.

Type `code .` to open your code editor. 


## The first test

To run the first test from your terminal:

```
npm test getGreeting
```

You'll see some red output that looks like this:

```
 FAIL  tests/getGreeting.test.js
  ✕ getGreeting returns "Hello <name>" (4ms)

  ● getGreeting returns "Hello <name>"

    expect(received).toBe(expected)

    Expected value to be (using ===):
      "Hello Aardvark"
    Received:
      undefined

    Difference:

      Comparing two different types of values. Expected string but received undefined.

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.619s, estimated 1s
Ran all test suites matching /getGreeting/i.

Active Filters: filename /getGreeting/
 › Press c to clear filters.

Watch Usage
 › Press a to run all tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

The most important thing is not to panic! The test is telling you what it's expecting as the return value of the function, and what it's actually getting. In this example it was expecting a string which says `"Hello Aardvark"`, and it got `undefined` (which normally means the function didn't return anything).
Welcome to your first introduction to testing! In this challenge, you're going to make all the tests go GREEN. It's rather addictive once you get started.


## Kata

The files you will be working on are in the `Exercises` directory and are called `ex1.js`, `ex2.js`, `ex3.js` and `stretch.js`

These files contain incomplete functions with comments describing what they should do. Every time you run the tests (using `npm test nameOfTheFileYoureWorkingOn` eg. `npm test ex1`) you're checking to see if you've completed each function correctly. When you finish it successfully, it will show up GREEN and you can move on to the next function.

Let's try it on an intro exercise! Open `getGreeting.js` in your editor. The first function looks like this:

```js
// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
function getGreeting (name) {
}
```

Ok, so it wants us to return a string using the input parameter `name`. Let's solve it so we can make the test go GREEN:

```js
function getGreeting (name) {
  return 'Hello ' + name
}
```

You'll notice that when you save `kata.js` your terminal indicates the test is now passing.

```
 PASS  tests/getGreeting.test.js
  ✓ getGreeting returns "Hello <name>" (1ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.069s, estimated 1s
Ran all test suites matching /getGreeting/i.

Watch Usage: Press w to show more.
```

One passed! Some coding pairs choose to treat these as high-five moments ... you can decide for yourselves.

Now you should press the `q` key in the terminal to stop the test runner (`w` will show you all the options) and you can move on to the next function.

This way we can practise the basics of JavaScript and build up our muscle memory:

 1. read what the next function is supposed to do
 1. run the tests using `npm test nameOfTheFileYoureWorkingIn`
 1. think and talk about how to solve the problem
 1. write the code and save the file
 1. read any errors and keep trying
 1. rinse and repeat until all the tests pass

In Bootcamp we're going to become a lot more familiar with this process.


## Making sure you're finished

To run all of the tests for all of the functions you've written, in terminal run:

```
npm test
```

This will run all tests in the `tests` directory.