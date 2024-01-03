export default function appendToEachArrayValue(array, appendString) {
  for (let idx in array) {
    let value = array.indexOf(idx);
    array[value] = appendString + idx;
  }

  return array;
}
