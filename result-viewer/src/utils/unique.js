export function unique(array) {
  const res = [];
  const existings = new Set();
  for (const x of array) {
    if (!existings.has(x)) {
      existings.add(x);
      res.push(x);
    }
  }
  return res;
}
