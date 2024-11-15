type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let obj: Record<string, ArrayType> = {};

    for (const item of arr1) {
        obj[item["id"]] = item
    }

    for (const item of arr2) {
        obj[item["id"]] = obj[item["id"]] ? { ...obj[item["id"]], ...item } : item
    }

    return Object.values(obj)
};


