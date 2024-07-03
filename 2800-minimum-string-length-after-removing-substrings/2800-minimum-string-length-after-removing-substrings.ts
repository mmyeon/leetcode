function minLength(s: string): number {
    let i = 0;

    if (s.length < 2) return s.length;


    while (i < s.length - 1) {
        const targetString = s[i] + s[i + 1]

        if (targetString === "AB" || targetString === "CD") {
            s = s.split(targetString).join("");
            i = i > 0 ? i - 1 : i
        } else i++;
    }

    return s.length;
};