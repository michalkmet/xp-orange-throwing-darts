function throwingDarts(inputArr) {
  console.log('inputArr: ', inputArr);
  let result = 0;
  let allBelowFive = true;
  for (const element of inputArr) {
    [result, allBelowFive] = calculatePoints(element, result, allBelowFive);
  }
  result += addBonus(allBelowFive, inputArr);
  return result;
}

function calculatePoints(element, result, allBelowFive) {
  if (element > 4 && element < 11) {
    result += 5;
    allBelowFive = false;
  } else if (element < 5) {
    result += 10;
  } else {
    allBelowFive = false;
  }
  return [result, allBelowFive];
}

function addBonus(allBelowFive, inputArr) {
  let result = 0;
  if (allBelowFive === true && inputArr.length != 0) {
    result += 100;
  }
  return result;
}

module.exports = throwingDarts;
