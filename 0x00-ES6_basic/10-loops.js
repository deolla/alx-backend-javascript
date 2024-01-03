export default function appendToEachArrayValue(arr, appendString) {
  const modifiedArray = [...arr];

  for (let i = 0; i < modifiedArray.length; i += 1) {
    modifiedArray[i] = appendString + modifiedArray[i];
  }

  return modifiedArray;
}
