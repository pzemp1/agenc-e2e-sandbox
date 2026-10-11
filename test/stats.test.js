'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('../src/stats.js');

test('sum adds every value', () => {
  assert.equal(sum([1, 2, 3, 4]), 10);
});

test('sum of an empty list is 0', () => {
  assert.equal(sum([]), 0);
});
