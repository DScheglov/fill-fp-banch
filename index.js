const { range } = require('./range');
const { run } = require('./run');

const fillFp = n => Array.from(range(n));

const toIndex = (_, index) => index;

const fillFp2 = n => Array.from({ length: n }).map(toIndex);

/* ---------------------------------------------------- */

const fill = n => {
  const a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = i;
  return a;
}

/* ---------------------------------------------------- */

const N = 10000;
const times = 1e3;

run(`fill::imperative(${N})`, times, () => fill(N));
run(`fill::fp(${N})`, times, () => fillFp(N));
run(`fill::fp2(${N})`, times, () => fillFp2(N));