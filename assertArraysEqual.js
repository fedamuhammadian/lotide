const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed`);
    } else {
      console.log(`❌ Assertion Failed`);
    }
  };

 assertArraysEqual (eqArrays ([1, 2, 3, 4], [1, 2, 3, 4], true));
  