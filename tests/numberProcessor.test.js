// tests/numberProcessor.test.js
const { parseNumbersFromString, sumNumbers, minNumber, maxNumber, average } = require('../src/numberProcessor');

test('parseNumbersFromString converts string to array of numbers', () => {
  expect(parseNumbersFromString('1\n2\n3')).toEqual([1,2,3]);
});

test('sumNumbers calculates sum correctly', () => {
  expect(sumNumbers([1,2,3])).toBe(6);
});

test('minNumber finds the minimum number', () => {
  expect(minNumber([5,1,9])).toBe(1);
});

test('maxNumber finds the maximum number', () => {
  expect(maxNumber([5,1,9])).toBe(9);
});

test('average calculates the mean correctly', () => {
  expect(average([2,4,6])).toBe(4);
});
