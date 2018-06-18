'use strict'

const greet = require('../lib/greet');


test('With a valid input', () => {
  expect(greet.hi('sup')).toBe('hello, sup')
})
test('With invalid input', () => {
  expect(greet.hi(234234)).toBeNull();
})
test('With no input', () => {
  expect(greet.hi()).toBeNull();
})