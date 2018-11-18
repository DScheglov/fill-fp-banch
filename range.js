const nextInRange = (current, end) => ({
  next: () => ({ done: current > end, value: current++ }),
});

const range = (n, start = 0) => ({
  [Symbol.iterator]: () => nextInRange(start, start + n - 1),
});

module.exports = { range };