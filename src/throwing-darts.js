function throwingDarts(inputArr) {
  if ((inputArr[0] > 4 && inputArr[0] < 11) || inputArr[1] < 11) {
    return 5;
  } else if (inputArr[0] < 5) {
    return 110;
  }
  return 0;
}

module.exports = throwingDarts;
