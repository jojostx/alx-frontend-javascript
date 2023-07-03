export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const val = weakMap.get(endpoint);
  const currVal = (val === undefined ? 0 : val) + 1;

  if (currVal >= 5) throw new Error('Endpoint load is high');

  weakMap.set(endpoint, currVal);
}
