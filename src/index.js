module.exports = function reverse(n) {
  const strN = Math.abs(n).toString();
  const reversedStr = strN.split('').reverse().join('');

  return Number(reversedStr);
};
