// src/numberProcessor.js
const fs = require('fs');
const path = require('path');

// Convert string of numbers (one per line) to array
function parseNumbersFromString(text) {
  if (!text) return [];
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(Number)
    .filter(n => !isNaN(n));
}

// Sum of numbers
function sumNumbers(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Minimum number
function minNumber(numbers) {
  if (!numbers || numbers.length === 0) return null;
  return Math.min(...numbers);
}

// Maximum number
function maxNumber(numbers) {
  if (!numbers || numbers.length === 0) return null;
  return Math.max(...numbers);
}

// Average
function average(numbers) {
  if (!numbers || numbers.length === 0) return null;
  return sumNumbers(numbers) / numbers.length;
}

// Export functions for Jest
module.exports = {
  parseNumbersFromString,
  sumNumbers,
  minNumber,
  maxNumber,
  average,
};
