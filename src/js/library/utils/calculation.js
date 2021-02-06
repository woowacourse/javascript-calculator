const operation = {
  ['-']: (a, b) => a - b,
  ['+']: (a, b) => a + b,
  ['X']: (a, b) => a * b,
  ['/']: (a, b) => Math.floor(a / b),
};

export default operation;
