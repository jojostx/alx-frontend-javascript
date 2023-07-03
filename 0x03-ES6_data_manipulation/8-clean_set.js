export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const strings = [];
  set.forEach((val) => {
    if (val.startsWith(startString)) strings.push(val.replace(startString, ''));
  });
  return strings.join('-');
}
