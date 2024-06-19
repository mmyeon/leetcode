function findContentChildren(g: number[], s: number[]): number {
    let contentChildrenNumber = 0;
    let i = 0, j = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            contentChildrenNumber++;
            i++;
        }
        j++;
    }

    return contentChildrenNumber
};