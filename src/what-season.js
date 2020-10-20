const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  };
  if (date.getTime()) {
    let m = date.getMonth();

    if (m === 11 || m === 0 || m === 1) return 'winter';
    else if (m === 2 || m === 3 || m === 4) return 'spring';
    else if (m === 5 || m === 6 || m === 7) return 'summer';
    else if (m === 8 || m === 9 || m === 10) return 'autumn';
  } else throw Error;
};
