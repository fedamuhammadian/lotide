const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      if (typeof arr1[i] !== typeof arr2[i] || arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;