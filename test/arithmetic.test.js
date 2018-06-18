'use strict';

const arithmetic = require('../lib/arithmetic');

test('This is an invalid input', () => {
  expect(arithmetic.sum('asd;lkfjaslfdkj') || arithmetic.sub('as;df')).toBeNull();
})
test('This is an empty input', () => {
  expect(arithmetic.sum() || arithmetic.sub()).toBeNull();
})
test('Now see this over hyar is a valid input, I tell you hwat', () => {
  expect(arithmetic.sum(8, 1) && arithmetic.sub(10, 1)).toBe(9);
})