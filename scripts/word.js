function calculateWords(input) {
  const words = input.split(" ");
  let count = words.length;

  words.forEach((word) => {
    if (!word.match(/^[a-z\-A-Z]+[.,?]?$/)) count--;
  });

  return count;
}

module.exports = {
  calculateWords,
};
