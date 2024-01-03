export default function appendToEachArrayValue(array, appendString) {
  /* eslint-disable no-param-reassign */
  for (const element of array) {
    const value = array.indexOf(element);
    array[value] = appendString + element;
  }
  /* eslint-disable no-param-reassign */

  return array;
}
