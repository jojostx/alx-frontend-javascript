export default function appendToEachArrayValue(array, appendString) {
    let arr = [];

    for (const val of array) {
      arr.push(appendString + val);
    }

    return arr;
}
