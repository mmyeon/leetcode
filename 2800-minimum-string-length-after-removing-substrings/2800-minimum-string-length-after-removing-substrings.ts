function minLength(s: string): number {
    let modifiedString = s;
    let i = 0;

    if (modifiedString.length < 2) return 1;


    while (i < modifiedString.length - 1) {
        const targetString = modifiedString[i] + modifiedString[i + 1]

        if (targetString === "AB" || targetString === "CD") {
            modifiedString = modifiedString.split(targetString).join("");
            i = i > 0 ? i - 1 : i
        } else i++;
    }


    return modifiedString.length;
};