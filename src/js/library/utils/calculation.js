const operation = {
  ['-']: (a, b) => a - b,
  ['+']: (a, b) => a + b,
  ['X']: (a, b) => a * b,
  ['/']: (a, b) => parseInt(a / b),
};

export default operation;
