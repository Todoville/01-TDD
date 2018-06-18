'use strict';

const arithmetic = module.exports = {};

arithmetic.sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') return null;
  console.log(a, b);
  if(!a || !b) return null;
  console.log(a, b);
  return a + b;
}

arithmetic.sub = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') return null;
  if(!a || !b) return null;
  return a - b;
}
