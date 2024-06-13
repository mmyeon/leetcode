function fib(n: number): number {
    const memo: Record<number, number> = {};

    function fibInner(n: number): number {
        if (n < 2) return n;
        if (memo[n]) return memo[n];

        memo[n] = fibInner(n - 1) + fibInner(n - 2);

        return memo[n]
    }

    return fibInner(n)
};