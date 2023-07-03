export default function hasValuesFromArray(set, arr) {
  return arr.reduce((sum, el) => sum + set.has(el)) === arr.length;
}
