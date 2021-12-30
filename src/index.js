module.exports = function reverse(n) {
  const numToString = Math.abs(n).toString();
  let reversedString = '';

  for (let i = numToString.length - 1; i >= 0; i--) {
    reversedString += numToString[i];
  }

  return reversedString;
};
