const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    let name = members.reduce((letters, memberName) => {
      if (typeof memberName === 'string') {
        letters.push(memberName.trim()[0].toUpperCase());
      }
      return letters;
    }, [])

    return name.sort().join('');

  } else return false;
};

