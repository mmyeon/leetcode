function reverseVowels(s: string): string {

    const strArr = s.split("");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !isVowel(strArr[left])) { left++; }
        while (left < right && !isVowel(strArr[right])) { right--; }

        const leftTemp = strArr[left];

        strArr[left] = strArr[right];
        strArr[right] = leftTemp;

        left++;
        right--;
    }

    return strArr.join("")
};

const isVowel = (str: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];

    return vowels.includes(str)
}