function countLargestGroup(n: number): number {
    let map: Record<string, number> = {};


    for (let i = 1; i <= n; i++) {
        const sum = String(i).split("").reduce((acc, cur) => acc + Number(cur), 0);

        if (map[sum]) {
            map[sum]++
        } else {
            map[sum] = 1
        }
    }

    const groupCount = Object.values(map);
    const maxSize = Math.max(...groupCount)

    return groupCount.filter(count => count === maxSize).length
};