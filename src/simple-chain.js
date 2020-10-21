const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (String(value)) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position] && position > 0) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let output = this.chain.join('~~');
    this.chain = [];
    return output;

  }
};

module.exports = chainMaker;
