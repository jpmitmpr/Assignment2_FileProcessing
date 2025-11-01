// src/textAnalyzer.js
const fs = require('fs');
const path = require('path');

// Count total number of words in a string
function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Find the longest word
function findLongestWord(text) {
  if (!text) return '';
  const words = text.trim().split(/\s+/).map(w => w.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, ''));
  let longest = '';
  for (const w of words) {
    if (w.length > longest.length) longest = w;
  }
  return longest;
}

// Count number of lines
function countLines(text) {
  if (!text) return 0;
  return text.split('\n').length;
}

// Export functions for Jest
module.exports = {
  countWords,
  findLongestWord,
  countLines,
};
