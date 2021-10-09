function calculatePairs(inputs) {
  let lastInput = 0;
  let count = 0;
  // sort array asc
  inputs.sort(function (a, b) {
    return a - b;
  });

  // do main operation
  inputs.forEach((input) => {
    if (lastInput == input) {
      count++;
      lastInput = 0;
    } else {
      lastInput = input;
    }
  });

  return count;
}

module.exports = {
  calculatePairs,
};
