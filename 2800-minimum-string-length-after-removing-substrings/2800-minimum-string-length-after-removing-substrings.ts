function minLength(s: string): number {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let currentWord = stack[stack.length - 1] + s[i]

        if (currentWord === "AB" || currentWord === "CD") stack.pop()
        else stack.push(s[i])
    }

    return stack.length;
};