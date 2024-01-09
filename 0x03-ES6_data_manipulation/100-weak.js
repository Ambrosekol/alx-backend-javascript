export const weakmap = new WeakMap();

export function queryAPI(obj) {
  if (!weakmap.has(obj)) {
    weakmap.set(obj, 0);
  }

  const ct = weakmap.get(obj) + 1;

  weakmap.set(obj, ct);

  if (weakmap.get(obj) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
