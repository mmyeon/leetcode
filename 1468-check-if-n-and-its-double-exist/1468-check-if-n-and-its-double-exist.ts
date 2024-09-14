function checkIfExist(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i] * 2) !== -1 && arr.indexOf(arr[i] * 2) !== i) return true;
    }

    return false;
};