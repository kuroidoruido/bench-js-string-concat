export function groupBy(array, groupExtractor) {
  const groups = {};
  for (const item of array) {
    const group = groupExtractor(item);
    if (group in groups) {
      groups[group].push(item);
    } else {
      groups[group] = [item];
    }
  }
  return groups;
}
