function maxDepth(s: string): number {
    let stack: string[] = [];
    let maximumDepth = 0;
    const openParenthesis = "(";
    const closeParenthesis = ")";


    for (let i = 0; i < s.length; i++) {
        if (s[i] === openParenthesis) {
            stack.push(openParenthesis);
            if (stack.length > maximumDepth) maximumDepth = stack.length;
        }
        if (s[i] === closeParenthesis)
            stack.pop();
    }

    return maximumDepth;
};