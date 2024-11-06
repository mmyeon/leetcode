type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr;
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flat(arr[i] as MultiDimensionalArray, n - 1))
        } else result.push(arr[i])
    }

    return result
};