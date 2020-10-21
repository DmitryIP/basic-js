const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.some((el) => Array.isArray(el))) {
            let count = 1;
            count += this.calculateDepth(arr.flat());
            return count;
        } else { return 1 }
    };
};