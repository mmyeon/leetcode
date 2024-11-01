type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => compactObject(item)).filter(Boolean);
  } else if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const key in obj) {
      const value = compactObject(obj[key]);

      if (Boolean(value)) {
        result[key] = value;
      }
    }
    return result;
  }

  // 단순 값 그대로 반환
  return obj;
}