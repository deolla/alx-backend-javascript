export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = array.indexOf(idx);
    array[value] = appendString + idx;
  }

  return array;
}
