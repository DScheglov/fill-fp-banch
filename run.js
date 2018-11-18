const run = (title, times, func) => {
  console.log('----------------------');
  const timerId = `${title} x ${times}`;
  console.time(timerId);
  while (times--) func();
  console.timeEnd(timerId);
}

module.exports = { run };