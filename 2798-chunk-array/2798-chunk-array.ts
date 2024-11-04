type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr, size) {
  let result = [];
  
  while (arr.length > 0) {
    const chunkedArr = arr.splice(0, size);
    result.push(chunkedArr);
  }

  return result;
}
