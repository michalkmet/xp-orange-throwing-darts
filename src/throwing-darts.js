function throwingDarts(inputArr) {
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > 4 && inputArr[i] < 11) {
      result += 5;
    } else if (inputArr[i] < 5) {
      result += 110;
    }
  }
  return result;
}

module.exports = throwingDarts;
