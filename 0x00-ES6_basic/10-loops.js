export default function appendToEachArrayValue(array, appendString) {
  /* eslint-disable no-param-reassign */
  for (let i = 0; i < array.length; i += 1) {
    array[i] = appendString + array[i];
  }
  /* eslint-disable no-param-reassign */

  return array;
}
