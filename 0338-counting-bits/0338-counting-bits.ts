function countBits(n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i <= n; i++) {

        const value = i.toString(2).split("").map(str => Number(str)).reduce((acc, cur) => { return cur + acc });

        result.push(value);
    }

    return result
};