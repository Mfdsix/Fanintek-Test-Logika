function calculatePairs(inputs) {
  let lastInput = 0;
  let count = 0;

  inputs.sort(function (a, b) {
    return a - b;
  });

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
