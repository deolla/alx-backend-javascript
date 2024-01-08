export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) throw new TypeError('Cannot process');
  for (const [key, value] of items) { if (value === 1) items.set(key, 100); }
}
