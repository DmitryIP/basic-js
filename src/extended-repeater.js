const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  str = String(str);
  addition = String(addition);
  let additionalPart = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let repeatedElement = str + additionalPart;
  return new Array(repeatTimes).fill(repeatedElement).join(separator);
};
