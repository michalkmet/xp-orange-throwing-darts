function throwingDarts(inputArr) {
  console.log('inputArr: ', inputArr);
  let result = 0;
  let allBelowFive = true;
  for (const element of inputArr) {
    if (element > 4 && element < 11) {
      result += 5;
      allBelowFive = false;
    } else if (element < 5) {
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
