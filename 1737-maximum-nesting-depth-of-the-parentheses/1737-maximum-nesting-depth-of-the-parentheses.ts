function maxDepth(s: string): number {
    let stack: string[] = [];
    let maximumDepth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push("(");
        if (s[i] === ")") {
            if (stack.length > maximumDepth) maximumDepth = stack.length;
            stack.pop();
        }
    }

    return maximumDepth;
};