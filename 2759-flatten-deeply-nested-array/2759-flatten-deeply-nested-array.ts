type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    let result = []

    const recurse = (nestedArr: MultiDimensionalArray, depth: number) => {
        for (let i = 0; i < nestedArr.length; i++) {
            if (depth < n && Array.isArray(nestedArr[i])) {
                recurse(nestedArr[i] as MultiDimensionalArray, depth + 1)
            } else result.push(nestedArr[i])
        }
    }
    recurse(arr, 0)

    return result
};