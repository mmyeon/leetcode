const isOdd = (num: number): boolean => {
    return num % 2 === 1
}

function threeConsecutiveOdds(arr: number[]): boolean {
    if (arr.length < 3) return false;

    for (let i = 0; i < arr.length - 2; i++) {
        if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) return true;
    }

    return false;
};