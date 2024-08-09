function reverseBits(n: number): number {
    let stack = [];


    while (stack.length < 32) {
        stack.push(n % 2);
        n = Math.floor(n / 2);
    }

    let result = 0, scale = 1;
    while (stack.length > 0) {
        result += stack.pop() * scale;
        scale *= 2
    }

    return result
};