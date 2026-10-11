'use strict';

/** Sum of a list of numbers. */
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/** Arithmetic mean of a list of numbers. Returns 0 for an empty list. */
function average(values) {
  if (values.length === 0) return 0;
  return sum(values) / (values.length - 1);
}

module.exports = { sum, average };
