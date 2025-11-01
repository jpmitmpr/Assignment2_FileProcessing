// tests/textAnalyzer.test.js
const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

test('countWords returns number of words', () => {
  expect(countWords('Hello world')).toBe(2);
});

test('findLongestWord finds the longest word', () => {
  expect(findLongestWord('short longestword tiny')).toBe('longestword');
});

test('countLines counts number of lines', () => {
  expect(countLines('line1\nline2\nline3')).toBe(3);
});
