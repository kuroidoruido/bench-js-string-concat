export function sortNumberAsc(valueExtractor = (x) => x) {
  return (a, b) => valueExtractor(a) - valueExtractor(b);
}

export function sortAlphaAsc(valueExtractor = (x) => x) {
  return (a, b) => valueExtractor(a).localeCompare(valueExtractor(b));
}
