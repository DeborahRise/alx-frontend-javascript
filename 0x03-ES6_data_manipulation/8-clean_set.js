export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const result = [];
  for (const s of set) {
    if (s.startsWith(startString)) {
      result.push(s.slice(startString.length));
    }
  }
  return result.join('-');
}
