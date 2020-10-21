const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return arr;
    }

    let transformedArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
        if (i < arr.length - 1) {
          transformedArray.push(arr[i + 1])
        }
      } else if (arr[i] === '--discard-next') {
        if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
          i += 2;
        } else {
          i += 1;
        }
      } else if (arr[i] === '--double-prev') {
        if (i > 0) {
          transformedArray.push(arr[i - 1]);
        }
      } else if (arr[i] === '--discard-prev') {
        if (i > 0) {
          transformedArray.pop();
        }
      } else {
        transformedArray.push(arr[i])
      }
    }
    return transformedArray;
  } else {
    throw new Error();
  };
};
