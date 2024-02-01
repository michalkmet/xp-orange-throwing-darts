function throwingDarts(inputArr) {
  console.log('inputArr: ', inputArr);
  let result = 0;
  let allBelowFive = true;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > 4 && inputArr[i] < 11) {
      result += 5;
      allBelowFive = false;
    } else if (inputArr[i] < 5) {
      result += 10;
    } else {
      allBelowFive = false;
    }
  }

  if (allBelowFive === true) {
    result += 100;
  }
  return result;
}

module.exports = throwingDarts;
