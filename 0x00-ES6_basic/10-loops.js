export default function appendToEachArrayValue(array appendString) {
  const modifiedArray = [...array];

  for (let i = 0; i < modifiedArray.length; i += 1) {
    modifiedArray[i] = appendString + modifiedArray[i];
  }

  return modifiedArray;
}
