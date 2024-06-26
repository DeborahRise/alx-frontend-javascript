export default function appendToEachArrayValue(array, appendString) {
    let newarray = [];
    for (const value of array) {
      newarray.push(appendString + value);
    }
    return newarray;
  }