export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  const strings = [];

  set.forEach((val) => {
    if (val.startsWith(startString)) strings.push(val.replace(startString, ''));
  });

  return strings.join('-');
}
